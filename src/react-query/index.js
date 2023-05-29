import { useQuery , useMutation,useQueryClient } from '@tanstack/react-query'
import {
   getComissionById, 
   getComissions, 
   getComissionsByCategory, 
   login, 
   register,
   getUserInfo,
   updateUserInfo,
   logout,
  } from "../api";

export const useComissions = () => {
   const { data, isLoading } = useQuery([], getComissions);
   return { data, isLoading };
 };
 
 export const useComissionsByCategory = (category) => {
    const { data, isLoading } = useQuery([category], getComissionsByCategory);
    return { data, isLoading };
  };
 
 export const useComissionById = (comissionId) => {
   const { data, isLoading } = useQuery([comissionId], getComissionById);
   return { data, isLoading };
 };

 export const useUserInfo = () => {
  return useQuery({
    queryKey: ["uid"],
    queryFn: getUserInfo,
    initialData: {},
  });
};

 export const useSignInWithEmailPassword = () => {
  return useMutation(login);
};

export const useRegisterWithEmailPassword = () => {
  return useMutation(register);
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUserInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation(logout, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};
