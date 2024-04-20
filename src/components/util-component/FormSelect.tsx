import React, { useRef, useState } from 'react'
import { Select,SelectTrigger,SelectValue,SelectItem,SelectContent,SelectGroup } from '../ui/select'
import type { UseFormSetValue } from 'react-hook-form'
import { cn } from '../lib/utils'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import useScreenSize from '../../hooks/useScreenSize'
import { useOnClickOutside } from 'usehooks-ts'


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
    console.log("Rerender 2")
    const [IsdroppedDown,setIsDropDown] = useState(false)
    const [otherValue,setOtherValue] =  useState("")
    const {width} =  useScreenSize()
    const ref = useRef<HTMLTextAreaElement>(null)
    const ref2 = useRef<HTMLTextAreaElement>(null)
    const closeref = useRef<HTMLButtonElement>(null)
    const [open,setOpen] = useState(false)
    const spanRef = useRef<HTMLSpanElement>(null)
    const [selectOpen,setSelectOpen] = useState(false)
    const capturRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(capturRef,()=>{
        if(!open){
            setSelectOpen(false)
        }
       
    })
    
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
    <Select  open={selectOpen} onOpenChange={(val)=>{
        if(!val){
            if(width>768){
                setOpen(false)
            }
           }
    }} value={otherValue} onValueChange={(val)=>{
        if(IsdroppedDown){ 
            // setOpen(false)
            setIsDropDown(false)
        }
        if(val){
            setOtherValue(val)
            setValue(name,val)
            setSelectOpen(false)
        }
    }}
        >
        <SelectTrigger onClick={()=>{setSelectOpen(true)}} disabled={disabled} ref={closeref} className='w-full bg-offwhite border-border h-11 py-2 flex justify-between'>
            <SelectValue  placeholder={placeholder || "Select option"}>{formatText(otherValue)}</SelectValue>
        </SelectTrigger>
        <SelectContent ref={capturRef} className='max-h-[300px]  overflow-auto default-scroll'>
            {selectTitle?
            <h3 className='border-b py-2 pl-2 text-center'>{selectTitle}</h3>
            :null}
            <SelectGroup className=''>
                {items.map((item,key)=>(
                    <SelectItem onClick={()=>{setSelectOpen(false)}} key={key} value={item.value}>{item.label}</SelectItem>
                ))}
            </SelectGroup>
            {others?
            <>
                <Popover open={open}>
                    <PopoverTrigger className='max-lg:hidden' onClick={()=>{setOpen(true)}} asChild>
                        <Button className='pl-8 w-full flex justify-start' variant={"ghost"} >Others</Button> 
                    </PopoverTrigger>                
                    <PopoverContent sideOffset={10}  side={width>768?"right":undefined} align='start'  className='flex-center mb-6 w-[360px] py-3 max-lg:hidden'>
                        <Textarea defaultValue={formatText(otherValue)}  ref={ref}
                            className='resize-none h-20 bg-offwhite rounded-md ring-0 focus-visible:ring-0 grow '>
                        </Textarea>
                        <Button size={"icon"} onClick={()=>{
                            const text = ref.current?.value
                            if(text){
                                setValue(name,text)
                                setOpen(false)
                                setOtherValue(text)
                                setSelectOpen(false)
                                closeref.current?.click()
                            }
                        }} className='shrink-0 rounded-md px-2 ml-2' >Ok</Button>
                    </PopoverContent>
                </Popover>
                <Button onClick={()=>{
                    setOpen(true)
                    setTimeout(()=>{spanRef.current?.scrollIntoView({behavior:"smooth"})},100)
                }} className='pl-8 w-full flex justify-start lg:hidden' variant={"ghost"} >Others</Button>
                {open?
                    <div className='flex-center  pl-6 mb-6  py-3 lg:hidden'>
                        <Textarea autoFocus defaultValue={formatText(otherValue)}  ref={ref2}
                            className='resize-none  h-20 bg-offwhite rounded-md ring-0 focus-visible:ring-0 grow '>
                        </Textarea>
                        <Button size={"icon"} onClick={()=>{
                            console.log(ref2.current)
                            const text = ref2.current?.value
                            if(text){
                                console.log("here")
                                setValue(name,text)
                                setOpen(false)
                                setOtherValue(text)
                                setSelectOpen(false)
                                closeref.current?.click()
                            }
                        }} className='shrink-0 rounded-md px-2 ml-2' >Ok</Button>
                        <span ref={spanRef} className='opacity-0'></span>
                    </div>
                :null
                }
                
            </>
        :null
            }
        </SelectContent>
    </Select>

    {error && <span className="text-red-500 absolute -bottom-5 left-2 ">{error}</span>}
</div>
  )
}
