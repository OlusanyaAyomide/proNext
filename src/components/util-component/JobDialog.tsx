import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'
import DialogSliders from './DialogSliders'
import Logo from './Logo'
import { cn } from '../lib/utils'
import { X } from 'lucide-react'

interface IJobDialog{
  slide:{
    title: string;
    content: string;
    image: string
  }[]
  form:React.ReactNode
  children:React.ReactNode
}
export default function JobDialog({children,form,slide}:IJobDialog) {
  return (
    <Dialog>
        <DialogTrigger>
            {children}
        </DialogTrigger>
        <DialogContent className='flex max-lg:max-w-[700px]  bg-[#24BC75] flex-row flex-wrap max-md:max-h-[88vh] md:h-[96vh]  overflow-auto default-scroll p-0 border-0'>
            <DialogClose className='lg:hidden flex justify-end p-2 w-full z-40 max-lg:sticky max-lg:top-[2vh]  right-0'>
                <X className='h-7 w-7'/>
            </DialogClose>
            <DialogSliders slides={slide} className='w-full lg:hidden'/>
            <div className="w-full h-fit bg-white lg:w-6/12  p-2 max-md:mt-6 min-h-[250px]">
              <Logo className='block'/>
              {form}
            </div>
            <div className={'w-6/12  relative max-lg:hidden'}>
                <DialogSliders className='bg-transparent' slides={slide}/>
            </div>
        </DialogContent>
    </Dialog>
  )
}
