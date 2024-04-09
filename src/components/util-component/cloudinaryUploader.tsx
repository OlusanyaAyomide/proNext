import axios,{AxiosError, AxiosResponse} from "axios";
import { cloudName, uploadPreset } from "./keys";
import { useMutation } from "@tanstack/react-query";
import { usePostErrors } from "../../hooks/usePostErrors";

export interface IResponse{
    public_id:string
    url:string
 }

export const imgurl = 'https://res.cloudinary.com/ddyi8emdimage/upload/v1694271070/'
 
                'https://res.cloudinary.com/ddyi8emdl/image/upload/v1712611377/Cloudinary-React/ypouznw3ozqnymzdp3w0.pdf'
export const cloudinaryUploader = async ({file}:{file:File})=>{
    const data = new FormData

    data.append("file", file, file.name);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);
    data.append("folder", "Cloudinary-React");

    return axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data
    ) as Promise<AxiosResponse<IResponse>> || AxiosError<any>
}



export const useCloudUpload = ()=>{
    const trigger = usePostErrors()
    const {isPending,mutateAsync}= useMutation<AxiosResponse<IResponse>,Error,{file:File}>({mutationFn:({file})=>{
        return cloudinaryUploader({file})
    },
    onError:(error:unknown)=>{
        const errorDetail = error as AxiosError<any>
        trigger(errorDetail)
        }
        
    })

     return {isPending,mutateAsync}

    
}