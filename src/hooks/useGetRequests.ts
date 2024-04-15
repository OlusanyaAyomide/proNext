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
    detailId?:string
    showAdmin?:boolean
}
const DEFAULT= 60 * 1000

export const useGetRequest = <T>({url,staleTime=DEFAULT,detailId,showAdmin=true,...rest}:IGetRequest)=>{
    
    const [{authCookie},] = useCookies(['authCookie'])
    const adminId = (authCookie?jwtDecode(authCookie as string):null ) as IToken | null
    let reqUrl;
    if((showAdmin && detailId)){
        reqUrl = `${url}/${adminId?`${adminId.admin}`:""}/${detailId}`
    } else{
        reqUrl = `${url}${adminId?`/${adminId.admin}`:""}`
    } 
            // reqUrl = `${url}`
        // // reqUrl = detailId?`${url}${adminId?`/${adminId.admin}/${detailId}`:`${url}${adminId?`/${adminId.admin}`:""}`}`:
        // `${url}${adminId?`/${adminId.admin}/${detailId}`}

    return useQuery<AxiosResponse<T>>({...rest,staleTime,queryFn:()=>{
        return request.get(reqUrl) as Promise<AxiosResponse<T>> 
    }})
}

