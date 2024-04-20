import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'
import DialogSliders from './DialogSliders'
import Logo from './Logo'
import ContactInfo from './ContactInfo'
import ContactForm from '../landing/ContactForm'
import { Button } from '../ui/button'
import { Svgs } from '../../util/svgs'
import { cn } from '../lib/utils'
import { X } from 'lucide-react'
export default function ContactDialog({className}:{className?:string}) {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button  variant={"outline"} className={cn('flex-center rounded-3xl  max-md:mb-6 px-6 border-[1.5px]',className)}>
                <Svgs.CallSvg className='mr-3'/>
                <span className='font-medium'>Contact Us</span>
            </Button>
        </DialogTrigger>
        <DialogContent className='flex max-lg:max-w-[700px] bg-[#24BC75] flex-row flex-wrap max-md:max-h-[88vh] md:h-[96vh]  overflow-auto default-scroll p-0 border-0'>
          <DialogClose className='lg:hidden flex justify-end p-2 w-full z-40 max-lg:sticky max-lg:top-[2vh]  right-0'>
              <X className='h-7 w-7'/>
          </DialogClose>
            <ContactInfo className='w-full lg:hidden'/>
            <div className="w-full bg-white h-fit  lg:w-6/12  p-2 max-md:mt-6 min-h-[250px]">
              <Logo className='block'/>
              <ContactForm/>
            </div>
            <div className='w-6/12 relative max-lg:hidden'>
              <ContactInfo className=''/>
            </div>
        </DialogContent>
    </Dialog>
  )
}
