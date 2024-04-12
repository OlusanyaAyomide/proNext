import React, { useRef, useState } from 'react'
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
    placeholder?:string
}

export default function FormSelect({setValue,className,error,items,selectTitle,name,title,others,placeholder}:IFormSelect) {

    const [IsdroppedDown,setIsDropDown] = useState(false)
    const [otherValue,setOtherValue] =  useState("")
    const ref = useRef<HTMLTextAreaElement>(null)
    const closeref = useRef<HTMLButtonElement>(null)
    console.log(otherValue)
    const formatText=(input:string)=>{
        const words = input.split('_').map(word => {
            if (word.length > 20) {
                return word.substring(0, 20);
            }
            return word;
        });
        return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return (
    <div className={cn("relative mb-4",className)}>
    <h3 className='ml-[2px] font-medium text-support mb-[2px] md:text-[15px]'>{title}</h3>
    <Select  value={otherValue} onValueChange={(val)=>{
        if(IsdroppedDown){ 
            setIsDropDown(false)
        }
        if(val){
            setOtherValue(val)
            setValue(name,val)
        }
    }}
        >
        <SelectTrigger ref={closeref} className='w-full bg-offwhite border-border h-11 py-2 flex justify-between '>
            <SelectValue placeholder={placeholder || "Select option"}>{formatText(otherValue)}</SelectValue>
        </SelectTrigger>
        <SelectContent className='max-h-[300px] w-[350px] overflow-auto default-scroll'>
            {selectTitle?
            <h3 className='border-b py-2 text-center'>{selectTitle}</h3>
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
                    }} className='pl-8 w-full flex justify-start' variant={"ghost"} >Others</Button> 
                {IsdroppedDown && 
                <div className='flex-center w-full'>
                    <Textarea ref={ref}
                        className='resize-none h-10 bg-offwhite rounded-md ring-0 focus-visible:ring-0 grow '>
                    </Textarea>
                    <Button size={"icon"} onClick={()=>{
                        const text = ref.current?.value
                        if(text){
                            setValue(name,text)
                            setOtherValue(text)
                            closeref.current?.click()
                        }
        
                    }} className='shrink-0 rounded-md px-2 ml-2' >Ok</Button>
                </div>
                }
            </div>:null
            }
        </SelectContent>
    </Select>
    {error && <span className="text-red-500 absolute -bottom-5 left-2 ">{error}</span>}
</div>
  )
}
