import React from 'react'
import { useGetRequest } from '../../hooks/useGetRequests'
import { useParams } from 'react-router-dom'
import { IUser } from '../../util/resInterfaces'
import FullLoader from '../util-component/FullLoader'
import { AvatarFallback,Avatar, AvatarImage } from '../ui/avatar'
import {  formatDateToString } from '../lib/utils'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export default function UserDetail() {
    const {id} = useParams()
    const {data,isLoading} = useGetRequest<{data:IUser}>({queryKey:['user-detail',id as string],url:"/admin/retrieve/single/admin",detailId:id})
    const user = data?.data.data
    return (
    <div className="mt-4 pb-4">
        {user ?
            <> 
                <div className="flex justify-end">
                    <Link to={`/admin/users/edit/${user._id}`}>
                        <Button className='px-5'>Edit Profile</Button>
                    </Link>
                </div>

                <div className='max-w-[650px] rounded-md overflow-hidden pt-20 mx-auto pb-24 bg-cover px-3 py-2  bg-[url("/user/userbg2.png")]'>
                    <Avatar className='h-20 w-20 mx-auto '>
                        <AvatarFallback>LD</AvatarFallback>
                        <AvatarImage src={user.photo}/>
                    </Avatar>
                    <h1 className="font-bold text-base text-center my-3">
                        <span className='mr-1'>{user.firstname}</span>
                        <span>{user.lastname}</span>
                    </h1>
                    <h3 className="text-center text-fade">Admin</h3>
                    <h3 className="text-center my-3">{user.email}</h3>
                    <h3 className="text-center my-2">{user.phone}</h3>
                    <h3 className="text-center my-2">Male</h3>
                    <h3 className='text-center'>{formatDateToString(user.dob)}</h3>
                    <h3 className='text-center'>{user.address}</h3>
                </div>
            </>
            

        :null 
        }

    <FullLoader isLoading={isLoading}/>

    </div>
  )
}
