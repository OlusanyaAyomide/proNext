import { useMemo } from "react";
import { AxiosResponse } from "axios";

import { IDashBoardRes } from "../util/resInterfaces";
import { useGetRequest } from "./useGetRequests";


export const useDashBoardData = ()=>{
    const {isLoading,data} = useGetRequest<IDashBoardRes>({url:"/admin/dashboard",queryKey:["dashboard"]})

    const modifArray = useMemo(()=>{
        if(!data?.data){return []}
        const formData = data.data.data?.totaldata
        if(!formData){return []}
        const counts: number[] = Array(14).fill(0);

        formData.forEach(form => {
            const strippedDate = form.createdAt.replace(/\s/g, '')
            const createdDate = new Date(strippedDate);
            const today = new Date();
            const diffTime = Math.abs(today.getTime() - createdDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays >= 1 && diffDays <= 14) {
                counts[14 - diffDays]++;
            }
        });
    
        return counts;
        
    },[isLoading])


    const dataArray = data?.data?modifArray:null
    const formData = data?.data.data


    return {isLoading,dataArray,formData}
    
}