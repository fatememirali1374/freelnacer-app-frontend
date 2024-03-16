import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "../services/authService";

export default function useUsers(){

  
    const {data, isLoading}= useQuery({
        queryKey:["users"],
        queryFn: getAllUser ,
        retry:false
    })
    const{users}= data || {}
    return {isLoading , users}
}