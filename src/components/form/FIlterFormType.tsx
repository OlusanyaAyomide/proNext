import React, { useState } from 'react'
import { Button } from '../ui/button'

export default function FIlterFormType({filters,title}:{filters:string[],title:string}) {
    const [selected,setSelected] = useState<string[]>([])

    const handleShuffle = (item:string)=>{
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
        <Button onClick={()=>{setSelected([])}} className='px-10 mb-8 rounded-md mx-auto mt-5 block'>Apply</Button>
    </div>
  )
}
