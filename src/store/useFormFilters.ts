import { create } from "zustand";
import { FormStatus, FormType } from "../util/resInterfaces";




interface IuseFormFilter{
    page:number   
    increasePage:()=>void
    reducePage:()=>void
    type:FormType[]
    status:FormStatus[]
    setStatus:(staus:FormStatus[])=>void
    setType:(type:FormType[])=>void
    date:null | string
    setDate:(date:string | null)=>void

}

export const useFormFilter = create<IuseFormFilter>((set)=>({
    page:1,
    increasePage:()=>{
        set((state)=>({
            page:state.page+1
        }))
    },
    reducePage:()=>{
        set((state)=>({
            page:state.page-1
        }))
    },
    type:[],
    setType:(type)=>{
        set(()=>({
            type:type
        }))
    },
    status:[],
    setStatus:(status)=>{
        set({status})
    },
    date:null,
    setDate:(date)=>{
        set(()=>{
            return{date}
        })
        // set(()=>({
        //     date:date
        // }))
    },
}))