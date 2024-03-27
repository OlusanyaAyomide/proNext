import React, { useRef } from 'react'
import Logo from '../util-component/Logo'
import { _homeNavMenu } from '../../util/constants'
import { Button } from '../ui/button'
import { Svgs } from '../../util/svgs'
import { Sheet, SheetClose, SheetContent, SheetOverlay, SheetTrigger } from '../ui/sheet'
import useScrollCheck from '../../hooks/useScrollTracker'
import {Link} from "react-scroll"

export default function Header() {
    const isScrolled = useScrollCheck()
    const ref = useRef<HTMLButtonElement>(null)
  return (
    <div className={`sticky ${isScrolled?"bg-white":"bg-transparent"} duration-1000 landing-pad transition-colors z-40 text-[15px] justify-between flex-center py-1  top-0 left-0 w-full`} 
    >   
        <Logo className=''/>
        <div className="flex-center  grow lg:pl-32 full md:max-w-[500px] lg:max-w-[700px] justify-between max-md:hidden">
            <div className="flex-center">
                {_homeNavMenu.map((item,key)=>(
                    <Link to={item.id} smooth offset={-50} className='mr-5 block mb-1 cursor-pointer relative before:-left-[10%] before:bottom-0 hover:before:bg-main before:w-0 before:absolute hover:text-main hover:before:w-[120%] before:h-[2px] before:transition-all before:duration-300  text-pro-blue font-semibold' key={key}>{item.text}</Link>
                ))}
            </div>
            <Button variant={"outline"} className='flex-center rounded-3xl max-md:ml-4 px-6 border-[1.5px]'>
                <Svgs.CallSvg className='mr-3'/>
                <span className='font-medium'>Contact Us</span>
            </Button>
        </div>
        <Sheet>
            <SheetTrigger className='md:hidden'>
                <Svgs.MenubarSvg className='scale-110'/>
            </SheetTrigger>
            <SheetClose ref={ref} className='hidden'></SheetClose>
            <SheetContent side="right" className='md:hidden paddingx w-[250px]'>
                <Button variant={"outline"} className='flex-center my-6 rounded-3xl px-6 border-[1.5px]'>
                    <Svgs.CallSvg className='mr-3'/>
                    <span className='font-medium'>Contact Us</span>
                </Button>   
                {_homeNavMenu.map((item,key)=>(
                    <Link onClick={()=>{ref.current?.click()}} to={item.id} smooth offset={-50} className='block mb-3 w-fit cursor-pointer relative before:-left-[10%] before:bottom-0 hover:before:bg-main before:w-0 before:absolute hover:text-main hover:before:w-[120%] before:h-[2px] before:transition-all before:duration-300' key={key}>{item.text}</Link>
                ))}
            </SheetContent>
        </Sheet>

    </div>
  )
}
