import { create } from "zustand";


interface IUseLayoutStore{
    triggered:boolean   
    setTrigger:(val:boolean)=>void
}

export const useStoreLayout = create<IUseLayoutStore>((set)=>({
    triggered:true,
    setTrigger:(val)=>{
        set(()=>({
            triggered:val
        }))
    }
}))