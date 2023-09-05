import { useContext } from "react";
import { authContext } from "../context/AuthContext/AuthContext";

export const useAuthContext=()=>{
    try{
        const user=useContext(authContext)
        return user
    }catch(err){
        console.error("Error",err.message)
    }
}