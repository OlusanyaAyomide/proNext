import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetRequest } from '../../../hooks/useGetRequests'
import Layout from '../../layout/Layout'
import FormHeader from './FormHeader'
import { IHireTalentRes } from '../../../util/resInterfaces'
import FullLoader from '../../util-component/FullLoader'
import FormItem from './FormItem'
import { AxiosResponse } from 'axios'
import { convertToTitleCase, formatDateToString } from '../../lib/utils'
import StatusButton from '../StatusButton'

export default function HireTalent() {
    const {id} = useParams()
    const {isLoading,data} = useGetRequest<AxiosResponse<IHireTalentRes>>({queryKey:["hiretalent",id || "id"],detailId:id,url:"/admin/retrieve/single/form",param:"?type=hiretalent"})
    const formData = data?.data.data
    return (
    <Layout>
        {formData?
            <>
                <FormHeader email={formData.email} id={id || ""} type="hiretalent" status={formData.status}/>
                <div className='card px-2 py-6 mb-3 sm:px-3 mt-3'>
                    <FormItem title='Email' content={formData.email} />
                    <FormItem title='Name' content={formData.name} />
                    <FormItem title='Phone Number' content={formData.phone} />
                    <FormItem title='Scheduled Date' content={`${formatDateToString(formData.scheduledate)}`} />
                    <FormItem title='Proposal Type' content={convertToTitleCase(formData.proposaltype)} />
                    <FormItem title='Additional Message' content={formData.additionalmessage} />
                    <div className='w-full max-w-[600px] mb-5 flex-center max-sm:flex-col'>
                        <span className="w-full max-sm:mb-2 sm:w-5/12">Status</span>
                        <div className='w-full sm:w-fit flex font-semibold text-pro-blue'>
                            <StatusButton status={formData.status}/>
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
