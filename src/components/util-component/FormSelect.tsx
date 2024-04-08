import React, { useState } from 'react'
import { Select,SelectTrigger,SelectValue,SelectItem,SelectContent,SelectGroup } from '../ui/select'
import type { UseFormSetValue } from 'react-hook-form'
import { cn } from '../lib/utils'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
interface ISelect{
    label:string
    value:string
}
interface IFormSelect{
    setValue:UseFormSetValue<any>
    error?:string
    selectTitle?:string
    items:ISelect[]
    className?:string
    name:string
    title:string
    others?:boolean 
}

export default function FormSelect({setValue,className,error,items,selectTitle,name,title,others}:IFormSelect) {

    const [IsdroppedDown,setIsDropDown] = useState(false)
    const [otherValue,setOtherValue] =  useState("")

    const formatText=(input:string)=>{
        const words = input.split('_').map(word => {
            if (word.length > 15) {
                return word.substring(0, 15);
            }
            return word;
        });
        return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return (
    <div className={cn("relative",className)}>
    <h3 className='ml-[2px] font-medium text-support mb-[2px] md:text-[15px]'>{title}</h3>
    <Select onValueChange={(val)=>{
        if(IsdroppedDown){
            setIsDropDown(false)
        }
        setOtherValue(val)
        setValue(name,val)}}
        >
        <SelectTrigger className='w-full bg-offwhite border-0 flex justify-between '>
            <SelectValue placeholder="select option">{formatText(otherValue)}</SelectValue>
        </SelectTrigger>
        <SelectContent className='max-h-[350px] overflow-auto default-scroll'>
            {selectTitle?
            <div className='border-b py-2'>{selectTitle}</div>
            :null}
            <SelectGroup>
                {items.map((item,key)=>(
                    <SelectItem key={key} value={item.value}>{item.label}</SelectItem>
                ))}
            </SelectGroup>
            {others?
            <div>
                <Button onClick={()=>{
                    setIsDropDown(true)
                    }} className='pl-8 w-full flex justify-start' variant={"ghost"} >Other</Button> 
                {IsdroppedDown && 
                    <Textarea onChange={(e)=>{
                        setOtherValue(e.target.value)
                        setValue(name,e.target.value)
                        }} className='resize-none h-[30px] bg-offwhite rounded-md ring-0 focus-visible:ring-0 '>
                    </Textarea>
                }
            </div>:null
            }
        </SelectContent>
    </Select>
    {error && <span className="text-red-500 absolute -bottom-5 left-2 ">{error}</span>}
</div>
  )
}
