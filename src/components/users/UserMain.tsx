import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { _mockUsers } from '../../util/constants'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useGetRequest } from '../../hooks/useGetRequests'

export default function UserMain() {
    const {data,isLoading,isError} = useGetRequest({queryKey:["test","post"],url:'/util/testpost'})
    console.log(data)
  return (
    <div className='pt-10'>
        <div className="flex-center mb-4 px-2 justify-between">
            <span className='section-header text-pro-blue'>Users</span>
            <Link to={"/admin/users/add"}>
                <Button className='px-6'>Add New User</Button>
            </Link>
        </div>
        <div className="flex-center mt-10 flex-wrap">
        {_mockUsers.map((item,key)=>(
            <div key={key} className="w-6/12 sm:w-4/12 md:w-3/12 px-1 sm:px-2">
                    <div className='bg-[url("/user/userbg2.png")] bg-cover mb-5 py-8'>
                        <Avatar className='block mb-3 mx-auto h-16 w-16'>
                            <AvatarFallback>PN</AvatarFallback>
                            <AvatarImage src={item.image}/>
                        </Avatar>
                        <h3 className="text-center text-base mb-[2px] font-semibold">{item.name}</h3>
                        <h3 className="text-center mb-[2px]">{item.level}</h3>
                        <h3 className="text-center mb-[2px]">{item.email}</h3>
                    </div>
            </div>
        ))}
        </div>
    </div>
  )
}
