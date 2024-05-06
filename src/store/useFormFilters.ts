import { create } from "zustand";
import { FormStatus, FormType } from "../util/resInterfaces";
import { _FormStatusFilter, _formTypeFilters } from "../util/constants";




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
    type:_formTypeFilters,
    setType:(type)=>{
        set(()=>({
            type:type
        }))
    },
    status:[..._FormStatusFilter] ,
    setStatus:(status)=>{
        set({status})
    },
    date:null,
    setDate:(date)=>{
        console.log(date,"From store")
        set(()=>{
            return{date}
        })
        // set(()=>({
        //     date:date
        // }))
    },
}))