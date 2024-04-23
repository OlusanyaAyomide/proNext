import React from 'react'
import { useGetRequest } from '../hooks/useGetRequests'
import { IUser } from '../util/resInterfaces'
import { useParams } from 'react-router-dom'
import FullLoader from '../components/util-component/FullLoader'
import UserAdd from '../components/users/add/UserAdd'
import Layout from '../components/layout/Layout'

export default function EditProfile() {
    const {id} = useParams()
    const {data,isLoading} = useGetRequest<{data:IUser}>({queryKey:['user-detail',id as string],url:"/admin/retrieve/single/admin",detailId:id})
    const userData = data?.data.data
  return (
    <Layout>
        {userData?
            <UserAdd user={{
                id:userData._id,
                firstName:userData.firstname,
                lastName:userData.lastname,
                email:userData.email,
                phoneNumber:userData.phone,
                dateOfBirth:new Date(userData.dob),
                gender:"Male",
                address:userData.address,
                image:userData.photo
            }}/>
        :null}
        <FullLoader isLoading={isLoading}/>
    </Layout>
  )
}
