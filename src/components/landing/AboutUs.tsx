import React from 'react'
import Paragraph from '../util-component/Paragraph'
import { _aboutUs1,_aboutus2, _aboutus3, _aboutus4, _aboutus5 } from '../../util/constants'

export default function AboutUs() {
  return (
    <div id='about' className='flex-center flex-wrap bg-white landing-pad py-8 mt-16'>
        <h1 className="text-pro-blue w-full font-bold mb-6 text-lg ">About Us</h1>
        <div className="w-full md:grow md:w-[65%]">
          <p className='mb-3'>{_aboutUs1}</p>
          <p className='mb-3'>{_aboutus2}</p>
          <h3 className="min-header">Vision</h3>
          <p className="mb-3">{_aboutus3}</p>
          <h3 className="min-header">Mission</h3>
          <p className="mb-3">{_aboutus4}</p>
          <h3 className="min-header">Our objectives</h3>
          <p className="mb-3">{_aboutus5}</p>
        </div>
        <div className="w-full md:pl-3 max-md:mt-8 shrink-0 md:w-[35%]">
            <div className="max-w-[300px] mx-auto">
                <img src="/aboutus.png" alt=""  className='h-full w-full object-contain'/>
            </div>
        </div>
    </div>
  )
}
