import React,{useState,useRef} from 'react'
import { Select,SelectTrigger,SelectValue,SelectItem,SelectContent,SelectGroup } from '../ui/select'
import type { UseFormSetValue } from 'react-hook-form'
import { cn } from '../lib/utils'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { _locationList } from '../../util/constants'
import useScreenSize from '../../hooks/useScreenSize'

interface IJobLocation{
    setValue:UseFormSetValue<any>
    error?:string
    name:string
    className?:string
    title:string
}

export default function JobLocation({setValue,className,error,name,title}:IJobLocation) {

    const [IsdroppedDown,setIsDropDown] = useState(false)
    const [otherValue,setOtherValue] =  useState("")
    const ref = useRef<HTMLTextAreaElement>(null)
    const [openPopover,setOpenedPopover] = useState<number | null>(null)
   const {width:screenSize} = useScreenSize()
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
    <Select onOpenChange={(e)=>{
        if(!e){setOpenedPopover(null)}
    }}  value={otherValue} onValueChange={(val)=>{
        setOpenedPopover(null)
        if(IsdroppedDown){ 
            setIsDropDown(false)
        }
        if(val){
            setOtherValue(val)
            setValue(name,val)
        }
    }}
        >
        <SelectTrigger  className='w-full bg-offwhite border-0 flex justify-between '>
            <SelectValue placeholder={"Enter option for others"}>{formatText(otherValue)}</SelectValue>
        </SelectTrigger>
        <SelectContent className='max-h-[300px] w-[350px] overflow-auto default-scroll'>
            <div className='border-b py-2'>Select Location</div>
            {_locationList.map((item,key)=>(
                <Popover open={openPopover===key} key={key} >
                    <PopoverTrigger onClick={()=>{setOpenedPopover(key)}} className='w-full rounded-md flex-center justify-start h-10 px-2 hover:bg-accent'>
                        {item.title}
                    </PopoverTrigger>
                    <PopoverContent alignOffset={10} sideOffset={10} side={screenSize>600?"right":undefined} align='end' className='py-3 min-h-[150px] max-h-[320px] md:max-h-[380px] overflow-scroll default-scroll'>
                        <div className='border-b py-2'>{item.header}</div>
                        <SelectGroup>
                            {item.content.map((item,index)=>(
                                <SelectItem key={index} value={item.value}>{item.label}</SelectItem>
                            ))}
                        </SelectGroup>
                        <div>
                            <Button onClick={()=>{
                                setIsDropDown(true)
                                }} className='w-full pl-8 flex justify-start' variant={"ghost"} >Others
                            </Button> 
                            {IsdroppedDown && 
                            <div className='flex-center w-full mt-3'>
                                <Textarea ref={ref}
                                    className='resize-none h-10 bg-offwhite rounded-md ring-0 focus-visible:ring-0 grow '>
                                </Textarea>
                                <Button size={"icon"} onClick={()=>{
                                    const text = ref.current?.value
                                    if(text){
                                        setValue(name,text)
                                        setOtherValue(text)
                                    }
                                }} className='shrink-0 rounded-md px-2 ml-2' >Ok</Button>
                            </div>}
                        </div>
                    </PopoverContent>   
                </Popover>           
            ))}
        </SelectContent>
    </Select>
    {error && <span className="text-red-500 absolute -bottom-5 left-2 ">{error}</span>}
    </div>
  )
}