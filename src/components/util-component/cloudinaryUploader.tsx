import axios,{AxiosError, AxiosResponse} from "axios";
import { cloudName, uploadPreset } from "./keys";

export interface IResponse{
    public_id:string
 }
 

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