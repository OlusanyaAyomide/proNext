import { AxiosResponse } from 'axios'
import { IContactRes } from '../../../util/resInterfaces'
import { useGetRequest } from '../../../hooks/useGetRequests'
import { useParams } from 'react-router-dom'
import Layout from '../../layout/Layout'
import FormHeader from './FormHeader'
import FormItem from './FormItem'
import StatusButton from '../StatusButton'
import FullLoader from '../../util-component/FullLoader'
import { convertToTitleCase } from '../../lib/utils'

export default function ContactForm() {

    const {id} = useParams()
    const {isLoading,data} = useGetRequest<AxiosResponse<IContactRes>>({queryKey:["contactus",id || "id"],detailId:id,url:"/admin/retrieve/single/form",param:"?type=contactus"})
    const formData = data?.data.data
    return (
        <Layout>
        {formData?
            <>
                <FormHeader id={id || ""} type="contactus" status={formData.status}/>
                <div className='card px-2 py-6 mb-3 sm:px-3 mt-3'>
                    <FormItem title='Email' content={formData.email} />
                    <FormItem title='Name' content={formData.name} />
                    <FormItem title='Phone Number' content={formData.phone} />
                    <FormItem title='Enquiry' content={convertToTitleCase(formData.enquiry)} />
                    <FormItem title='Message' content={formData.message} />
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
