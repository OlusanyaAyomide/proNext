import axios,{InternalAxiosRequestConfig,AxiosResponse, AxiosError, AxiosRequestConfig, AxiosInstance} from "axios"
import Cookies from "js-cookie"

// Intercepting all axios request and adding cookies to headers if it exists
const onRequest=(config:InternalAxiosRequestConfig):InternalAxiosRequestConfig=>{
    const {method,url} = config
    const token = Cookies.get("authCookie")
    if(token){
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
}
const onResponse = (response:AxiosResponse):AxiosResponse=>{

  return response
}

const onErrorResponse = (error:AxiosError|Error):Promise<AxiosError>=>{
  if (axios.isAxiosError(error)){
    const {status} = error.response as AxiosResponse ?? {}
  }
  return Promise.reject(error)
}


const baseURL ="https://pronext.onrender.com"
// const baseURL = "http://localhost:5000"
const request = axios.create({
  baseURL,
  //allows credential cookies to be set remotely
//   withCredentials:true,
  headers:{
    "Content-Type":"application/json"
  }
})
request.interceptors.request.use(onRequest,onErrorResponse)
request.interceptors.response.use(onResponse,onErrorResponse)


export default request
