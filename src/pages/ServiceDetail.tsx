import React from 'react'
import Layout from '../components/layout/Layout'
import { _aboutus3 } from '../util/constants'

export default function ServiceDetail() {
    const ServiceItem=({title,content}:{title:string,content:string})=>(
        <div className="mb-3 flex max-sm:flex-wrap justify-between">
            <h3 className='w-full max-sm:mb-1 sm:w-3/12'>{title}</h3>
            <p className='w-full sm:w-9/12 font-bold sm:pl-2'>{content}</p>
        </div>
    )
  return (
    <Layout>
        <div className="pt-6">
            <h3 className="section-header mb-3">View Service</h3>
            <div className="card px-2 sm:px-3">
                <div className="max-w-[320px] max-sm:mx-auto">
                    <div className="aspect-[3/2]">
                        <img src="/service.png" alt="" />
                    </div>
                </div>
                <div className="flex mt-4 flex-col max-w-[600px]">
                    <ServiceItem title='Title' content='Call center Jobs'/>
                    <ServiceItem title='Category' content='WFH, WOS'/>
                    <ServiceItem title='City' content='Lagos'/> 
                    <ServiceItem title='Tag' content='#cebuwfh #newavailablejobs'/>
                    <ServiceItem title='Description' content={_aboutus3}/>  
                </div>
            </div>
        </div>

    </Layout>
  )
}
