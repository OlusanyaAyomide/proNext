import { create } from "zustand";
import { FormStatus, FormType } from "../util/resInterfaces";
import { _FormStatusFilter, _formTypeFilters } from "../util/constants";




interface IuseFormFilter{
    page:number   
    increasePage:()=>void
    reducePage:()=>void
    type:FormType[]
    status:FormStatus[]
    setStatus:(stas:FormStatus[])=>void
    setType:(type:FormType[])=>void
    date:null | string
    setDate:(date:string | null)=>void
    jumpToPage:(page:number)=>void

}

export const useFormFilter = create<IuseFormFilter>((set)=>({
    page:1,
    jumpToPage:(page)=>{
        set(()=>({
            page
        }))
    },
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
    },
}))