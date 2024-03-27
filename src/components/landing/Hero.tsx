import React from 'react'
import { Button } from '../ui/button'
import { Svgs } from '../../util/svgs'

export default function Hero() {
  return (
    <div id='home' className='min-h-[90vh] relative landing-pad py-6'>
        <div className="absolute z-10 bottom-14 bg-[#e7f6e9] h-full w-[60%] sm:w-[55%]   rounded-l-[260px] left-[40%] sm:left-[45%]"></div>
        <div className="relative z-20 pt-16 flex-center flex-wrap">
            <div className="w-full md:pl-8 lg:pl-16 h-full flex-col justify-center md:w-6/12">
                <span className="font-bold text-5xl md:text-6xl block mb-4 text-pro-blue max-md:text-center">Unlock Your</span>
                <h1 className='text-5xl md:text-6xl block mb-2 text-main font-bold max-md:text-center'>
                    <span className='relative'>Potential
                        <Svgs.StarSvg  className='absolute scale-75 -right-4 -top-2'/>
                    </span>
                </h1>
                <h1  className='leading-[20px] max-w-[270px] mt-3 max-md:mx-auto max-md:text-center text-base'>Connecting talent with opportunity, one placement at a time.</h1>
                <div className="flex-center mt-12 max-md:justify-center">
                    <Button className='px-6 mr-7'>
                        <span>Find a Job</span>
                    </Button>
                    <Button variant={"outline"} className='px-6'>
                        <span>Hire a Talent</span>
                    </Button>
                </div>
            </div>
            <div className="w-full md:w-6/12 max-md:mt-10">
            <div className="max-w-[420px] max-md:mx-auto">
                <div className="aspect-[3/2]">
                    <img src="/heroimg.png" alt="" className='h-full w-full object-contain' />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
