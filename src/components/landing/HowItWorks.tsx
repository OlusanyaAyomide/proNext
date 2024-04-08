import React from 'react'
import { _howItWorksTalent, _howItWorksTalentSeeker, slideImages2, sliderImages } from '../../util/constants'
import { Button } from '../ui/button'
import TriggerView from '../util-component/TriggerView'
import SeeMore from '../util-component/SeeMore'
import JobDialog from '../util-component/JobDialog'
import FindJobForm from './FindJobForm'
import HireTalentForm from './HireTalentForm'

export default function HowItWorks() {
  return (
    <div id='works' className='mt-6 w-full overflow-hidden py-8 landing-pad'>
        <h1 className="text-center font-bold text-pro-blue text-lg mb-3">How it Works</h1>
        <h1 className="font-thin my-3 mb-10 text-lg">How It Works As a  Talent</h1>
        <div className="flex-center flex-wrap">
            {_howItWorksTalent.map((item,key)=>(
                <TriggerView side='up' key={key} className='w-full sm:w-6/12 mb-12 px-2 lg:w-3/12'>
                   <div className='w-full lg:aspect-square'>
                        <div className={`max-w-[210px] relative mx-auto ${key===3?"lg:bottom-6 max-w-[170px]":key===2?"lg:top-5":""}`}>
                            <img src={item.image} alt="" className='h-full w-full object-contain'/>
                        </div>
                    </div> 
                    <h1 className="text-center mb-3 mt-4 lg:-mt-8 text-pro-blue text-lg font-bold">{item.title}</h1>
                    <SeeMore text={item.content}/>
                </TriggerView>
            ))}
        </div>
        <TriggerView side='up' className='w-fit mx-auto'>
            <JobDialog slide={slideImages2} form={<FindJobForm/>}>
                <Button asChild className='px-6 mr-7'>
                        <span>Find a Job</span>
                </Button>
            </JobDialog>

        </TriggerView>
        <div className="mt-16">
            <h1 className="font-thin my-3 mb-10 text-lg">How It Works As a  Talent Seeker</h1>
            <div className="flex flex-center flex-wrap">
                {_howItWorksTalentSeeker.map((item,key)=>(
                    <TriggerView side='up' key={key} className='w-full sm:w-6/12 mb-12 px-2 lg:w-3/12'>
                       <div className='w-full lg:aspect-square'>
                            <div className={`relative mx-auto ${key===3?"max-w-[230px]":key===2?"max-w-[180px] bottom-6":key===1?"max-w-[210px]":"max-w-[180px] bottom-5"}`}>
                                <img src={item.image} alt="" className='h-full w-full object-contain'/>
                            </div>
                        </div> 
                        <h1 className="text-center mb-3 mt-4 lg:-mt-8 text-pro-blue text-lg font-bold">{item.title}</h1>
                        <SeeMore text={item.content}/>
                    </TriggerView>
                ))}
            </div>
        </div>

        <TriggerView side='right' className='w-fit mx-auto'>
            <JobDialog form={<HireTalentForm/>} slide={sliderImages}>
                <Button asChild variant={"outline"} className='px-6'>
                    <span>Hire a Talent</span>
                </Button>
            </JobDialog>
        </TriggerView>
    </div>
  )
}
