import React, { useState } from 'react'
import { Popover,PopoverTrigger,PopoverContent } from '../ui/popover'
import { cn } from '../lib/utils'
import { Svgs } from '../../util/svgs'

interface IFilters{
    children:React.ReactNode,
    className?:string
    title:string
    ngClass?:string
}
export default function Filters({children,className,title,ngClass}:IFilters) {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <Popover onOpenChange={(val)=>{setIsOpen(val)}}>
        <PopoverTrigger className={cn("py-2 px-3 max-md:border-t border-r flex-center",className)}>
            <span className='font-semibold'>{title}</span>
            <Svgs.ChevronSvg className={`ml-3 transition-transform duration-300 ${isOpen?"rotate-180":""}`}/>
        </PopoverTrigger>
        <PopoverContent align='start' className={cn('p-0',ngClass)}>
            {children}
        </PopoverContent>
    </Popover>
  )
}
