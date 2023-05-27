
import {getApps,getApp,initializeApp} from 'firebase/app';
import { 
    getFirestore,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    deleteDoc,
    query,
    where, } from "firebase/firestore";
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
const db = getFirestore(app);

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
  