import { AxiosError } from "axios";
import { useToast } from "../components/ui/use-toast";

export const usePostErrors  = ()=>{
    const {toast} =  useToast()

    const trigger =(error:AxiosError<any>)=>{
        const isAbotred = error.code === "ECONNABORTED"
        const isNetwork = error.code === "ERR_NETWORK"
        const isBadRequest = error.code === "ERR_BAD_REQUEST" 

        if(isAbotred){
            console.log("Aborted triggered")
            toast({
                title:"Request Aborted",
                description:"This might be due to poor network",
                variant:"destructive"
            })
        }
        if(isNetwork){
            toast({
                title:"Unable to reach server",
                description:"This is likely due to poor internet connection",
                variant:"destructive"
            })
        }
        if(isBadRequest){
            toast({
                title:"Bad Request",  
                description:error.response?.data?.message || "wrong information suppllied",
                variant:"destructive",
            })
        }
    }

    return trigger

}