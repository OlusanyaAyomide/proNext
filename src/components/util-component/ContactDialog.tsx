import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import DialogSliders from './DialogSliders'
import Logo from './Logo'
import ContactInfo from './ContactInfo'
import ContactForm from '../landing/ContactForm'
import { Button } from '../ui/button'
import { Svgs } from '../../util/svgs'
export default function ContactDialog() {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button  variant={"outline"} className='flex-center rounded-3xl  max-md:mb-6 px-6 border-[1.5px]'>
                <Svgs.CallSvg className='mr-3'/>
                <span className='font-medium'>Contact Us</span>
            </Button>
        </DialogTrigger>
        <DialogContent className='flex  bg-[#24BC75] flex-wrap max-h-[88vh] md:max-h-[482px]  overflow-auto default-scroll p-0 border-0'>
            <ContactInfo className='w-full md:hidden'/>
            <div className="w-full bg-white h-full  md:w-6/12  p-2 max-md:mt-6 min-h-[250px]">
              <Logo className='block'/>
              <ContactForm/>
            </div>
            <div className='w-6/12 relative max-md:hidden'>
                <ContactInfo className=''/>
            </div>
        </DialogContent>
    </Dialog>
  )
}
