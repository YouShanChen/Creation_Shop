
import { getApps, getApp, initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  getDocs,
  deleteDoc,
  query,
  where,
  initializeFirestore,
  enableIndexedDbPersistence
} from "firebase/firestore";
import {
  getAuth, signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  initializeAuth,
  signOut,
  updateProfile,
} from 'firebase/auth';
import _ from "lodash";
import comissions from "../json/comissions.json";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = app_length ? getFirestore(app) : initializeFirestore(app, { experimentalForceLongPolling: true, });

const auth = app_length ? getAuth(app) : initializeAuth(app);

enableIndexedDbPersistence(db)
  .then(() => console.log("Enabled offline persistence"))
  .catch((error) => {
    if (error.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (error.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });

// REFERENCE COLLECTION
const comissionsCollection = collection(db, "comissions");

export const feedComissions = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(comissionsCollection);
  querySnapshot.forEach(async (comission) => {
    await deleteDoc(doc(db, "comissions", comission.id));
  });
  // ADD NEW DOCS
  comissions.forEach(async (comission) => {
    const docRef = await doc(comissionsCollection);
    await setDoc(docRef, { ...comission, id: docRef.id, category: comission.category });
  });
};

export const getComissions = async () => {
  let querySnapshot = await getDocs(comissionsCollection);

  // Convert the query to a json array.
  let result = [];
  querySnapshot.forEach(async (comission) => {
    await result.push(comission.data());
  });
  console.log({ result });
  return result;
};

export const getComissionById = async ({ queryKey }) => {
  const [id] = queryKey;
  const docRef = await doc(db, "comissions", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getComissionsByCategory = async ({ queryKey }) => {
  const [category] = queryKey;
  const q = await query(
    comissionsCollection,
    where("category", "==", category.toUpperCase())
  );
  let querySnapshot = await getDocs(q);
  // Convert the query to a json array.
  let result = [];
  querySnapshot.forEach(async (comission) => {
    await result.push(comission.data());
  });
  return result;
};

export const getUserInfo = async () => {
  const storedUser = localStorage.getItem("user");
  const user = auth?.currentUser || JSON.parse(storedUser) || null;

  if (user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();
    return {
      uid: user.uid,
      email: user.email,
      ...userDoc,
    };
  } else {
    return {}
  }
}

export const toggleFavoriteProduct = async ({productId, uid}) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  const userDoc = docSnap.data();
  const favorites = userDoc?.favorites || [];
  if(favorites.length === _.pull(favorites,productId).length){
    favorites.push(productId);  
  }
  await updateDoc(docRef, { favorites }); 
  return favorites;
}

export const login = async ({ email, password }) => {
  await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
};

export const register = async ({ name, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential?.user;
  localStorage.setItem("user", JSON.stringify(user));
  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    name,
  });
};

export const updateUserInfo = async ({ name, property,adrs, tel, uid }) => {
  const docRef = doc(db, "users", uid);
  await updateDoc(docRef, {
    name,
    property,
    adrs,
    tel,
  });
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
}

export const logout = async () => {
  auth.signOut();
  localStorage.removeItem("user");
}
