import React from 'react'
import Layout from '../components/layout/Layout'
import { _aboutus3 } from '../util/constants'
import { useGetRequest } from '../hooks/useGetRequests'
import { useParams } from 'react-router-dom'
import { IServiceList } from '../util/resInterfaces'
import FullLoader from '../components/util-component/FullLoader'

export default function ServiceDetail() {
    
    const {id} = useParams()

    const {isLoading,data} = useGetRequest<{data:IServiceList}>({queryKey:["service-detail",`id-${id}`],url:"/admin/retrieve/single/service",detailId:id})

    const ServiceItem=({title,content}:{title:string,content:string})=>(
        <div className="mb-3 flex max-sm:flex-wrap justify-between">
            <h3 className='w-full max-sm:mb-1 sm:w-3/12'>{title}</h3>
            <p className='w-full sm:w-9/12 font-bold sm:pl-2'>{content}</p>
        </div>
    )
    const response = data?.data.data || null
  return (
    <Layout>
        <div className="pt-6">
            {response?
                <>
                    <h3 className="section-header mb-3">View Service</h3>
                    <div className="card px-2 sm:px-3">
                        <div className="max-w-[320px] max-sm:mx-auto">
                            <div className="aspect-[3/2]">
                                <img src={response.photo} alt="" />
                            </div>
                        </div>
                        <div className="flex mt-4 flex-col max-w-[600px]">
                            <ServiceItem title='Title' content={response.title}/>
                            <ServiceItem title='Category' content={response.category}/>
                            <ServiceItem title='City' content={response.city}/> 
                            <ServiceItem title='Tag' content={response.tag}/>
                            <ServiceItem title='Description' content={response.description}/>  
                        </div>
                    </div>
                </>
            :null}
        </div>
        <FullLoader isLoading={isLoading}/>
    </Layout>
  )
}
