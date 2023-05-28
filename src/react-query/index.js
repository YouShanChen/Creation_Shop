import { useQuery } from '@tanstack/react-query'
import { getComissionById, getComissions, getComissionsByCategory} from "../api";

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
