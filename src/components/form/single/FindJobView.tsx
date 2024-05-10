import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useGetRequest } from '../../../hooks/useGetRequests'
import { AxiosResponse } from 'axios'
import { IFindJob } from '../../../hooks/validation'
import Layout from '../../layout/Layout'
import FormHeader from './FormHeader'
import FormItem from './FormItem'
import { IFindJobRes } from '../../../util/resInterfaces'
import { convertToTitleCase, formatDateToString } from '../../lib/utils'
import StatusButton from '../StatusButton'
import FullLoader from '../../util-component/FullLoader'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { Button } from '../../ui/button'


export default function FindJobView() {
  const {id} = useParams()
  const {isLoading,data} = useGetRequest<AxiosResponse<IFindJobRes>>({queryKey:["findjob",id || "id"],detailId:id,url:"/admin/retrieve/single/form",param:"?type=findjob"})

  const formData = data?.data.data
  const ref = useRef<HTMLAnchorElement>(null)

  return (
    <Layout>
    {formData?
        <>
            <FormHeader email={formData.email} id={id || ""} type="findjob" status={formData.status}/>
            <div className='card px-2 py-6 mb-3 sm:px-3 mt-3'>
                <FormItem title='Email' content={formData.email} />
                <FormItem title='Name' content={`${formData.firstname} ${formData.lastname}`} />
                <FormItem title='Phone Number' content={formData.phone} />
                <FormItem title='Gender' content={formData.gender} />
                <FormItem title='Date Of Birth' content={`${formatDateToString(formData.dob)}`} />
                <FormItem title='Educational Account' content={formData.educationalaccount} />
                <FormItem title='Educational Qualification' content={convertToTitleCase(formData.educationalqualification)} />
                <FormItem title='Location' content={formData.location} />
                <FormItem title='Site' content={formData.site} />
                <FormItem title='Scheduled Interview Date' content={formatDateToString(formData.scheduledate) || ""} />
                <div className='w-full max-w-[600px] mb-5 flex-center max-sm:flex-col'>
                    <span className="w-full max-sm:mb-2 sm:w-5/12">Status</span>
                    <div className='w-full sm:w-fit flex font-semibold text-pro-blue'>
                        <StatusButton status={formData.status}/>
                    </div>
                </div>
                <div className='w-full max-w-[600px] mb-5 flex-center max-sm:flex-col'>
                    <span className="w-full max-sm:mb-2 sm:w-5/12">Status</span>
                    <div className='w-full sm:w-7/12 flex font-semibold text-pro-blue'>
                      <IoDocumentTextOutline className='text-[50px] text-deepGreen'/>
                      <Button onClick={()=>{ref.current?.click()}}
                       variant={"ghost"}  className="mt-2 block h-8 px-3">Download Resume</Button>
                        <a target="_blank" ref={ref} className='hidden' download={`${formData.firstname}`} href={formData.fileupload.file}>
                          <img alt={`${formData.firstname}-resume.png`} src={formData.fileupload.file} />
                        </a>
                    </div>
                </div>
            </div>
        </>
        :null
}
<FullLoader isLoading={isLoading}/>
</Layout>
  )
}
