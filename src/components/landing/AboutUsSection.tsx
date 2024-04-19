import React from 'react'
import TriggerView from '../util-component/TriggerView'

interface IAboutUsSection{
    image:string,
    title:string
    reverse?:boolean
    text:string
}

export default function AboutUsSection({image,text,title,reverse}:IAboutUsSection) {
  return (
    <div className='mt-2 mb-16 flex-center flex-wrap'>
        {!reverse?<TriggerView side='left' className="w-full md:w-6/12 max-md:mb-5">
            <div className="mx-auto max-w-[300px]">
                <div className="aspect-[6/5]">
                    <img src={image} alt="about-us"  className='w-full h-full object-contain'/>
                </div>
            </div>
        </TriggerView>:null}
        <TriggerView side={reverse?"left":"right"} className="mt-4 md:w-6/12 max-md:mb-5">
            <h3 className="text-center text-pro-blue w-full font-bold mb-2 text-lg">{title}</h3>
            <p className="text-center">{text}</p>
        </TriggerView>
        {reverse?<TriggerView side='right' className="w-full md:w-6/12 max-md:mb-5">
            <div className="mx-auto max-w-[300px]">
                <div className="aspect-[6/5]">
                    <img src={image} alt="about-us"  className='w-full h-full bg-contain'/>
                </div>
            </div>
        </TriggerView>:null}
        
    </div>
  )
}
