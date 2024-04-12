import { useMutation } from "@tanstack/react-query";
import request from "./requests";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "../components/ui/use-toast";
import { usePostErrors } from "./usePostErrors";
import { useCookies } from "react-cookie";
import {jwtDecode} from "jwt-decode"
import { IToken } from "../util/resInterfaces";


interface IPostRequest{
    url:string
    onSuccess?:(data:any)=>void,
    onError?:(data:any)=>void
    showSuccess?:string
    showError?:boolean
}

export const usePostRequest = <T,G>({url,onSuccess,onError,showSuccess,showError=true}:IPostRequest)=>{
    const trigger = usePostErrors()
    const [{authCookie},] = useCookies(['authCookie'])
    const adminId = (authCookie?jwtDecode(authCookie as string):null ) as IToken | null

    return useMutation<AxiosResponse<T>,Error,G>({mutationFn:(body)=>{
        return request.post(url,{adminid:adminId?.admin || undefined,...body},{timeout:10000}) 
    },onSuccess:(data)=>{
        if(showSuccess){
            toast({
                description:showSuccess,
                role:"alert",
                className:"h-fit border-border"
            })
        }
        if(onSuccess){
            onSuccess(data)
        }

    },onError:(error:unknown)=>{
    const errorDetail = error as AxiosError<any>
    if(showError){
        trigger(errorDetail)
    }
    if(onError){
        onError(error)
    }
    
    }})
}