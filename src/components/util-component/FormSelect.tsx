import React, { useRef, useState } from 'react'
import { Select,SelectTrigger,SelectValue,SelectItem,SelectContent,SelectGroup } from '../ui/select'
import type { UseFormSetValue } from 'react-hook-form'
import { cn } from '../lib/utils'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import useScreenSize from '../../hooks/useScreenSize'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
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
    disabled?:boolean
}

export default function FormSelect({setValue,className,error,items,selectTitle,name,title,others,placeholder,disabled}:IFormSelect) {

    const [IsdroppedDown,setIsDropDown] = useState(false)
    const [otherValue,setOtherValue] =  useState("")
    const {width} =  useScreenSize()
    const ref = useRef<HTMLTextAreaElement>(null)
    const closeref = useRef<HTMLButtonElement>(null)
    const [open,setOpen] = useState(false)
    const formatText=(input:string)=>{
        const words = input.split('_').map(word => {
            if (word.length > 20) {
                return word.substring(0, 80);
            }
            return word;
        });
        return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return (
    <div className={cn("relative mb-4",className)}>
    <h3 className='ml-[2px] font-medium text-support mb-[2px] md:text-[15px]'>{title}</h3>
    <Select  onOpenChange={(val)=>{
        if(!val){setOpen(val)}
    }} value={otherValue} onValueChange={(val)=>{
        if(IsdroppedDown){ 
            // setOpen(false)
            setIsDropDown(false)
        }
        if(val){
            setOtherValue(val)
            setValue(name,val)
        }
    }}
        >
        <SelectTrigger disabled={disabled} ref={closeref} className='w-full bg-offwhite border-border h-11 py-2 flex justify-between'>
            <SelectValue placeholder={placeholder || "Select option"}>{formatText(otherValue)}</SelectValue>
        </SelectTrigger>
        <SelectContent className='max-h-[300px]  overflow-auto default-scroll'>
            {selectTitle?
            <h3 className='border-b py-2 pl-2 text-center'>{selectTitle}</h3>
            :null}
            <SelectGroup className=''>
                {items.map((item,key)=>(
                    <SelectItem key={key} value={item.value}>{item.label}</SelectItem>
                ))}
            </SelectGroup>
            {others?
            <Popover open={open}>
                <PopoverTrigger className='' onClick={()=>{setOpen(true)}} asChild>
                    <Button className='pl-8 w-full flex justify-start' variant={"ghost"} >Others</Button> 
                </PopoverTrigger>                
                <PopoverContent sideOffset={10}  side={width>768?"right":undefined} align='start'  className='flex-center mb-6 w-[360px] py-3'>
                    <Textarea defaultValue={formatText(otherValue)}  ref={ref}
                        className='resize-none h-20 bg-offwhite rounded-md ring-0 focus-visible:ring-0 grow '>
                    </Textarea>
                    <Button size={"icon"} onClick={()=>{
                        const text = ref.current?.value
                        if(text){
                            setValue(name,text)
                            setOpen(false)
                            setOtherValue(text)
                            closeref.current?.click()
                        }
                    }} className='shrink-0 rounded-md px-2 ml-2' >Ok</Button>
                </PopoverContent>
            </Popover>:null
            }
        </SelectContent>
    </Select>
    {error && <span className="text-red-500 absolute -bottom-5 left-2 ">{error}</span>}
</div>
  )
}
