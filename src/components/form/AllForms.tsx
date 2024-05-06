import React from 'react'
import FormList from '../dashboard/FormList'
import { _allForms } from '../../util/constants'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { IFormResponse, IToken } from '../../util/resInterfaces'
import { useFormFilter } from '../../store/useFormFilters'
import { useCookies } from 'react-cookie'
import { jwtDecode } from 'jwt-decode'
import request from '../../hooks/requests'
import FullLoader from '../util-component/FullLoader'

export default function AllForms() {

      
  const {date,status,type,page} = useFormFilter()

  const [{authCookie},] = useCookies(['authCookie'])

  const adminId = (authCookie?jwtDecode(authCookie as string):null ) as IToken
  const {isLoading,data,isSuccess} = useQuery<AxiosResponse<IFormResponse>>({queryKey:["all-form",status,type,page,date],queryFn:()=>{
    return request.post(`/admin/retrieve/all/form/${adminId.admin}?page=${page}${date?`&date=${date}`:""}`,{
        type:type,
        status:status
    })
}}) 
  
  return (
    <div className='mt-5 pb-8 card'>
        {(data && isSuccess && !isLoading) ?<FormList form={data.data.data || []}/>:""}
        <FullLoader isLoading={isLoading}/>
        {(isSuccess && data.data.data.length===0)?
        <div className='w-full px-2 mx-auto mt-4 max-w-[280px]'>
            <div className='aspect-square mx-auto'>
              <img src="/empty.svg" alt="" />
            </div>
            <h3 className="text-center min-header">No Result Found</h3>
        </div>
        :""}
    </div>
  )
}
