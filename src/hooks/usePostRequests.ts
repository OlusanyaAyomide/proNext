import { useMutation } from "@tanstack/react-query";
import request from "./requests";
import { AxiosResponse } from "axios";

interface IPostRequest{
    url:string
    onSuccess?:(data:any)=>void,
    onError?:(data:any)=>void
}

export const usePostRequest = <T,G>({url,onSuccess,onError}:IPostRequest)=>{
    
    return useMutation<AxiosResponse<T>,Error,G>({mutationFn:(body)=>{
        return request.post(url,body,{timeout:10000}) 
    },onSuccess,onError:(error)=>{
        console.log(error)
        //perform logic based on errorcode
        if(onError){
            onError(error)
        }
    
    }})
}