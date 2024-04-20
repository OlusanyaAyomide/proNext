import React, { useState,useEffect } from 'react'
import { cn } from '../lib/utils'
import { Svgs } from '../../util/svgs'
import { Button } from '../ui/button'
import { DialogClose } from '../ui/dialog'
import { X } from 'lucide-react'


interface IDialogSlider {
    slides:{
        title: string;
        content: string;
        image: string;
    }[]
    className?:string
}

export default function DialogSliders({className,slides}:IDialogSlider) {
    let timeout:any;
    const [count,setCount] = useState(0)
    // const [isCleared,setIsCleared] = useState(false)

    const handleNext = () => {
        clearTimeout(timeout);
        setCount((prev) => (prev === 3 ? 0 : prev + 1));
        resetTimeout();
      };
    
    const handlePrevious = () => {
      clearTimeout(timeout);
      setCount((prev) => (prev === 0 ? 3 : prev - 1));
      resetTimeout();
    };

    const resetTimeout = () => {
      timeout = setTimeout(() => {
        setCount((prev) => (prev === 3 ? 0 : prev + 1));
        resetTimeout();
      }, 5000);
    };

    useEffect(() => {
        resetTimeout();
    
        return () => {
          clearTimeout(timeout);
        };
      }, [count]);
    
  return (
    <div className={cn("pt-4  w-full rounded-r-md lg:sticky top-0  bg-[#24BC75] pb-3 overflow-hidden",className)}>
        <div className="rounded-full h-52 w-52 max-lg:-top-16 bg-[#4CD091] px-2 right-0 lg:-right-12 absolute  -top-8"></div>
        <DialogClose className='lg:absolute max-lg:hidden max-lg:top-[3vh]  right-2'>
            <X className='h-6 w-6'/>
        </DialogClose>
        <div className="mx-auto w-fit relative z-20 flex-center">
            <Svgs.customerSvg className='mr-2'/>
            <span className='text-white'>Support</span>   
        </div> 
        <div className={cn(`flex relative z-20 w-[400%] transition-all duration-1000 ease-out mt-10  ${count===0?"translate-x-[0%]":count===1?"-translate-x-[25%]":count===2?"-translate-x-[50%]":"-translate-x-[75%]"}`)}>
            {slides.map((item,key)=>(
                <div  key={key} className='w-[25%] px-2 text-white h-full'>
                    <div className="mx-auto aspect-[3/2] h-[120px]">
                        <img src={item.image} alt="" className='h-full w-full object-contain'/>
                    </div>
                    <h1 className="mt-4 text-center font-bold text-lg ">{item.title}</h1>
                    <p className="mt-2 mb-6 text-[13px]">{item.content}</p>

                    <div className="mx-auto gap-x-2 w-fit flex-center">
                        <Button  variant={"ghost"} size={"icon"} disabled={count===0} onClick={handlePrevious} className='rounded-full rotate-180 hover:bg-[#4CD091]'>
                            <Svgs.arrowRight/>
                        </Button>

                        <Button  variant={"ghost"} size={"icon"} className='rounded-full hover:bg-[#4CD091]'>
                            <Svgs.blockCenter  className='mx-2 scale-[90%]'/>
                        </Button>

                        <Button variant={"ghost"} size={"icon"} disabled={count===3} onClick={handleNext} className='rounded-full hover:bg-[#4CD091]'>
                            <Svgs.arrowRight />
                        </Button>
                    </div>
                </div>
            ))}
        </div> 
        
    </div>
  )
}

