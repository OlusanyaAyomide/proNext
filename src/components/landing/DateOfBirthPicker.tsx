import React, { useState } from 'react'
import { UseFormSetValue } from 'react-hook-form';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { formatDate, generateYearsArray } from '../lib/utils';
import { Calendar } from '../ui/calendar';
import { Svgs } from '../../util/svgs';
import FullLoader from '../util-component/FullLoader';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '../ui/select';

interface IDateOFBirth{
    setValue:UseFormSetValue<any>
    name:string
    error?:string

}

export default function DateOfBirthPicker({setValue,name,error}:IDateOFBirth) {
    const [isOpen,setisOpen] = useState(false)
    const [date,setDate] = useState<Date>(new Date())
    const [yearArray,setArray] = useState([2021,2027])
    const [isMounted,setIsMounted] = useState(true)
    const prevYears = generateYearsArray()
    console.log(name)
    return (
        <div className='w-full mb-3 md:w-6/12  md:pl-2  relative'>
            <h3 className='ml-[2px] font-medium  text-gray-800 text-support mb-[2px]= md:text-[15px]'>Date Of Birth</h3>
            <Popover>
                <PopoverTrigger className='bg-offwhite w-full flex justify-between px-2 border rounded-md items-center h-10'>
                    <span>
                        {date?formatDate(date):"Select Date"}
                    </span>
                    <Svgs.ChevronSvg/>
                </PopoverTrigger>
                <PopoverContent className='shadow-lg h-fit w-[310px]'>
                    <Select onValueChange={(val)=>{
                            setArray([Number(val)-3,Number(val)+3])
                            setIsMounted(false)
                            setTimeout(()=>{setIsMounted(true)},200)
                        }

                        }>
                        <SelectTrigger className='mb-2 h-10'>
                            <span>Select Year</span>
                        </SelectTrigger>
                        <SelectContent className='max-h-[300px] max-w-[350px] overflow-auto default-scroll'>
                            <SelectGroup>
                                {prevYears.map((item,key)=>(
                                    <SelectItem value={`${item}`} key={key}>{item}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    { isMounted?
                    <Calendar
                        mode="single"
                        fromYear={yearArray[0]}
                        defaultMonth={new Date(yearArray[1]-3, 0)}
                        toYear={yearArray[1]}
                        selected={date}
                        onSelect={(date)=>{
                        if (date){
                            setValue(name,date)
                            setDate(date)
                        }
                        }}
                        className="rounded-md"
                    />:<FullLoader isLoading/>}
                </PopoverContent>
            </Popover>
            {error && <span className="text-red-500 absolute -bottom-5 left-2 ">{error}</span>}
        </div>

  )
}
