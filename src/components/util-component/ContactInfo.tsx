import React from 'react'
import { Svgs } from '../../util/svgs'
import { _contactinfo } from '../../util/constants'
import { cn } from '../lib/utils'
import { DialogClose } from '../ui/dialog'
import { X } from 'lucide-react'

export default function ContactInfo({className}:{className:string}) {
  return (
    <div className={cn("pt-4  rounded-r-md  lg:sticky top-0 bg-[#24BC75] pb-3 overflow-hidden",className)}>
    <div className="rounded-full h-52 w-52  bg-[#4CD091] px-2 absolute -right-12 -top-4"></div>
        <DialogClose className='sticky flex justify-end pr-2 w-full z-40 top-2 right-4 '>
          <X className='h-6 w-6'/>
         </DialogClose>
    <div className="mx-auto w-fit relative z-20 flex-center">
        <Svgs.customerSvg className='mr-2'/>
        <span className='text-white'>Support</span>   
    </div> 
    <div className="relative z-20 w-full transition-all duration-1000 ease-out mt-10">
        <div  className='px-2 text-white h-full'>
            <div className="mx-auto aspect-[3/2] h-[120px] text">
                <img src={"/contactus.png"} alt="" className='h-full w-full object-contain'/>
            </div>
            <h1 className="mt-4 text-center font-bold text-lg ">Fill Contact us form </h1>
            <p className="mt-2 mb-6 text-[13px]">{_contactinfo}</p>
        </div>
    </div> 
    
    </div>
  )
}
