import React from 'react'
import { _howItWorksTalent, _howItWorksTalentSeeker } from '../../util/constants'
import { Button } from '../ui/button'

export default function HowItWorks() {
  return (
    <div id='works' className='mt-6 py-8 landing-pad'>
        <h1 className="text-center font-bold text-pro-blue text-lg mb-3">How it Works</h1>
        <h1 className="font-thin my-3 text-lg">How It Works As a  Talent</h1>
        <div className="flex-center flex-wrap">
            {_howItWorksTalent.map((item,key)=>(
                <div key={key} className='w-full sm:w-6/12 mb-12 px-2 lg:w-3/12'>
                   <div className='w-full lg:aspect-square'>
                        <div className={`max-w-[210px] relative mx-auto ${key===3?"lg:bottom-6 max-w-[170px]":key===2?"lg:top-5":""}`}>
                            <img src={item.image} alt="" className='h-full w-full object-contain'/>
                        </div>
                    </div> 
                    <h1 className="text-center mb-3 mt-4 lg:-mt-8 text-pro-blue text-lg font-bold">{item.title}</h1>
                    <p className='text-center'>{item.content}</p>
                </div>
            ))}
        </div>
        <Button className='mx-auto px-6 block mt-1'>Find a Job</Button>
        <div className="mt-16">
            <h1 className="font-thin my-3 mb-4 text-lg">How It Works As a  Talent Seeker</h1>
            <div className="flex flex-center flex-wrap">
                {_howItWorksTalentSeeker.map((item,key)=>(
                    <div key={key} className='w-full sm:w-6/12 mb-12 px-2 lg:w-3/12'>
                       <div className='w-full lg:aspect-square'>
                            <div className={`relative mx-auto ${key===3?"max-w-[230px]":key===2?"max-w-[180px] bottom-6":key===1?"max-w-[210px]":"max-w-[180px] bottom-5"}`}>
                                <img src={item.image} alt="" className='h-full w-full object-contain'/>
                            </div>
                        </div> 
                        <h1 className="text-center mb-3 mt-4 lg:-mt-8 text-pro-blue text-lg font-bold">{item.title}</h1>
                        <p className='text-center'>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
        <Button variant={"outline"} className='mx-auto px-6 block'>Hire a Talent</Button>
    </div>
  )
}
