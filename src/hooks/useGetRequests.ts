import { useQuery } from "@tanstack/react-query";
import request from "./requests";
import { AxiosResponse } from "axios";

interface IGetRequest{
    url:string
    queryKey:string[],
    refetchInterval?:number,
    refetchOnWindowFocus?:boolean
    staleTime?:number
}
const DEFAULT= 60 * 1000

export const useGetRequest = <T>({url,staleTime=DEFAULT,...rest}:IGetRequest)=>{

    return useQuery<AxiosResponse<T>>({...rest,staleTime,queryFn:()=>{
        return request.get(url) as Promise<AxiosResponse<T>> 
    }})
}

