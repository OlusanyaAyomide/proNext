import React, { useRef, useState } from 'react'
import { Button } from '../ui/button'
import type { FormStatus ,FormType } from '../../util/resInterfaces'
import { useFormFilter } from '../../store/useFormFilters'
import { PopoverClose } from '@radix-ui/react-popover'
import { useToast } from '../ui/use-toast'

interface IFilterFormType{
    filters:FormType[]
    title:string,
}

export default function FIlterFormType({filters,title}:IFilterFormType) {
    const {type,setType} = useFormFilter()
    const [selected,setSelected] = useState<FormType[]>(type)
    const ref = useRef<HTMLButtonElement>(null)
    const {toast }= useToast()

    const handleShuffle = (item:FormType)=>{
        setSelected((prev)=>{
            if(!prev.includes(item)){
                console.log("heree,inner")
                return [...selected,item]
            }
            else{
                return prev.filter((filterItem)=>{
                    if(filterItem !== item){
                        return filterItem
                    }
                })
            }
        }) 
    }

    return (
    <div className=''>
        <PopoverClose ref={ref} className='hidden'></PopoverClose>
        <h1 className="font-bold text-xl mt-4 ml-2 text-pro-blue">{title}</h1>
        <div className="mt-4 flex-center pb-4 p-2 border-b flex-wrap">
            {filters.map((item,key)=>(
                <div key={key} className="w-6/12 sm:w-4/12 mb-4 px-2">
                    <Button onClick={()=>{handleShuffle(item)}} className='w-full' variant={selected.includes(item)?"default":"outline"}>
                        <span>{item}</span>
                    </Button>
                </div>
            ))}
        </div>
        <h1 className="mt-3 pl-3">*You Can Choose Multiple Order types</h1>
        <Button onClick={()=>{
            if(selected.length > 0){
                setType(selected)
                ref.current?.click()
            }else{
                toast({  
                    description:"Form Type must not be empty",
                    className:"h-fit border-red-500 border"
                    // variant:"destructive",
                })
            }

        }
        } className='px-10 active:bg-green-600 mb-8 rounded-md mx-auto mt-5 block'>Apply</Button>
    </div>
  )
}
