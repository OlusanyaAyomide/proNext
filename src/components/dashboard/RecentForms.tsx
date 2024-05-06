import React from 'react'
import FormList from './FormList'
import { _FormStatusFilter, _formTypeFilters, _mockRecent } from '../../util/constants'
import { Button } from '../ui/button'
import { useCookies } from 'react-cookie'
import { jwtDecode } from 'jwt-decode'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { IFormResponse, IToken } from '../../util/resInterfaces'
import request from '../../hooks/requests'
import FullLoader from '../util-component/FullLoader'
import { Link } from 'react-router-dom'
export default function RecentForms() {
  const [{authCookie},] = useCookies(['authCookie'])

  const adminId = (authCookie?jwtDecode(authCookie as string):null ) as IToken
  const {isLoading,data,isSuccess} = useQuery<AxiosResponse<IFormResponse>>({queryKey:["all-forms",_FormStatusFilter,_formTypeFilters,1],queryFn:()=>{
    return request.post(`/admin/retrieve/all/form/${adminId.admin}?page=1`,{
        type:_formTypeFilters,
        status:_FormStatusFilter
    })
}}) 

  const dataPresent = (data?.data?.data) ? data.data.data.slice(0,3) :null
  
  return (
    <div className='card mt-6'>
        <h1 className="section-header mb-7">Recent Forms</h1>
        {(data && isSuccess && !isLoading) ?<FormList form={dataPresent || []}/>:""}
        <Link to={"/admin/forms"}><Button className='mt-6 block mx-auto px-8'>View All</Button></Link>
        <FullLoader isLoading={isLoading}/>
    </div>
  )
}
