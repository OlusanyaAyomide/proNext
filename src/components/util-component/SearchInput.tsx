import React from 'react'
import { Svgs } from '../../util/svgs'
import { cn } from '../lib/utils'
export default function SearchInput({className}:{className?:string}) {
  return (
    <div className={cn("w-fit border max-md:hidden overflow-hidden md:ml-4 lg:ml-40 rounded-3xl relative group",className)}>
        <input className='border-none outline-none focus-visible:outline-none h-10 ring-0 md:w-[300px] lg:w-[330px] bg-[#F5F6FA] px-2 pl-8 focus-visible:pl-2 peer' placeholder='search'/>
        <Svgs.SearchSvgs className='absolute peer-focus-visible:hidden top-[10px] left-2 scale-125'/>
    </div>
  )
}
