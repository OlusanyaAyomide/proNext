import React from 'react'
import Paragraph from '../util-component/Paragraph'
import { _aboutUs1,_aboutus2, _aboutus3, _aboutus4, _aboutus5 } from '../../util/constants'
import TriggerView from '../util-component/TriggerView'
import AboutUsSection from './AboutUsSection'

export default function AboutUs() {
  return (
    <div id='about' className='flex-center w-full overflow-hidden flex-wrap bg-white landing-pad py-8 mt-16'>
            <TriggerView side='up' className="text-pro-blue w-full text-center font-bold mb-6 text-lg ">About Us</TriggerView>
            <TriggerView side="up" className="mb-6 max-w-[300px] mx-auto">
                <div className="">
                    <img src="/aboutus.png" alt=""  className='h-full w-full object-contain'/>
                </div>
            </TriggerView>
            <TriggerView side='up' className="mb-3">
                <p className='mb-3'>{_aboutUs1}</p>
                <p className='mb-3'>{_aboutus2}</p>
            </TriggerView>  
        <div className='mt-4'>
            <AboutUsSection image='/aboutus2.png' title='Vision' text={_aboutus3}/>
            <AboutUsSection reverse image='/aboutus3.png' title='Mission' text={_aboutus4}/>
            <AboutUsSection image='/aboutus4.png' title='Our objectives' text={_aboutus5}/>
        </div>
    </div>
  )
}
