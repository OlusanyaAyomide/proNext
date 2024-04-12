import { useQuery } from "@tanstack/react-query";
import request from "./requests";
import { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import {jwtDecode} from "jwt-decode"
import { IToken } from "../util/resInterfaces";
interface IGetRequest{
    url:string
    queryKey:string[],
    refetchInterval?:number,
    refetchOnWindowFocus?:boolean
    staleTime?:number
}
const DEFAULT= 60 * 1000

export const useGetRequest = <T>({url,staleTime=DEFAULT,...rest}:IGetRequest)=>{
    
    const [{authCookie},] = useCookies(['authCookie'])
    const adminId = (authCookie?jwtDecode(authCookie as string):null ) as IToken | null
    
    

    return useQuery<AxiosResponse<T>>({...rest,staleTime,queryFn:()=>{
        return request.get(`${url}${adminId?`/${adminId}`:null}`) as Promise<AxiosResponse<T>> 
    }})
}

