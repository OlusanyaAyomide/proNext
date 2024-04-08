import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import DialogSliders from './DialogSliders'
import Logo from './Logo'

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
        <DialogContent className='flex  bg-[#24BC75] max-md:flex-wrap max-h-[88vh] md:max-h-[482px]  overflow-auto default-scroll p-0 border-0'>
            <DialogSliders slides={slide} className='w-full md:hidden'/>
            <div className="w-full bg-white h-full  md:w-6/12  p-2 max-md:mt-6 min-h-[250px]">
              <Logo className='block'/>
              {form}
            </div>
            <div className='w-6/12 relative max-md:hidden'>
                <DialogSliders className='' slides={slide}/>
            </div>
        </DialogContent>
    </Dialog>
  )
}
