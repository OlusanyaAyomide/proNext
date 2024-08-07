import React from 'react'
import { _mockServices } from '../../util/constants'
import { Button } from '../ui/button'
import { Svgs } from '../../util/svgs'
import TriggerView from '../util-component/TriggerView'

export default function Services() {
    const partners =["/partner5.png","/partner6.png","/partner7.png"]
  return (
    <div id='services' className='bg-white landing-pad py-6'>
        <h1 className="text-center  text-pro-blue font-bold text-lg">Services</h1>
        <div className="mt-5 flex flex-wrap max-w-[1200px] mx-auto">
            {_mockServices.map((item,key)=>(
                <TriggerView side='up' key={key} className='w-full hover:shadow-lg rounded-md transition-shadow  mb-5 sm:w-6/12 lg:w-4/12 sm:px-2'>
                    <div className="mb-4  mx-auto max-w-[420px]">
                        <div className="aspect-[3/2] rounded-md overflow-hidden">
                            <img src={item.image} className='h-full w-full object-contain'/>
                        </div>
                        <h1 className="mt-4  text-pro-blue text-base font-bold">{item.title}</h1>
                        <p className="mt-2">{item.content}</p>
                    </div>
                </TriggerView>
            ))}
            <TriggerView side='up' className='w-fit mx-auto'>
                <Button disabled className='mx-auto items-center px-6 hover:bg-pro-blue   flex bg-pro-blue'>
                    <span>Load More Services</span>
                    <Svgs.DownloadSvg className='ml-4'/>
                </Button>
            </TriggerView>
        </div>
        <div className="flex-center justify-center mb-4 mt-4 w-full flex-wrap">
            {partners.map((item,key)=>(
                <div className='w-full xs:w-6/12 md:w-4/12 px-2' key={key}>
                    <img alt={item} src={item} className={`max-w-[170px] lg:max-w-[250px] max-sm:mx-auto block ${key===0?"":""} ${key===1?"mt-2":""}`}/>
                </div>
            ))}
        </div>

    </div>
  )
}
