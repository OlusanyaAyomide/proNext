import React from 'react'
import Logo2 from '../util-component/Logo2'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Svgs } from '../../util/svgs'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import SideLinks from './SideLinks'
import { useCookies } from 'react-cookie'
import {jwtDecode} from "jwt-decode"
import { IToken,IUser } from '../../util/resInterfaces'
import { useGetRequest } from '../../hooks/useGetRequests'
import { Skeleton } from '../ui/skeleton'
export default function Header() {
    const [{authCookie},] = useCookies(['authCookie'])
    const adminId = (authCookie?jwtDecode(authCookie as string):null ) as IToken | null

    const {data,isLoading} = useGetRequest<{data:IUser}>({queryKey:['user-detail',adminId?.admin || "null" as string],url:"/admin/retrieve/single/admin",detailId:adminId?.admin || ""})
    return (
    <div className='shadow-sm z-40 py-1 landing-pad bg-white flex-center justify-between top-0 left-0 sticky'>
        <div className="flex-center">
            <Sheet>
                <SheetTrigger className='lg:hidden mr-2'>
                  <Svgs.MenubarSvg/>  
                </SheetTrigger>
                <SheetContent side={"left"} className='lg:hidden py-2 w-[250px] landing-pad'>
                    <SideLinks/>
                </SheetContent>
            </Sheet>
            <Logo2/>
            <div className="w-fit border max-md:hidden overflow-hidden md:ml-4 lg:ml-40 rounded-3xl relative group">
                <input className='border-none outline-none focus-visible:outline-none h-10 ring-0 md:w-[300px] lg:w-[330px] bg-[#F5F6FA] px-2 pl-8 focus-visible:pl-2 peer' placeholder='search'/>
                <Svgs.SearchSvgs className='absolute peer-focus-visible:hidden top-[10px] left-2 scale-125'/>
            </div>
        </div>

        <div className="flex-center">
            <Svgs.NotificationSvg className='mr-1 sm:mr-5 scale-[80%] md:scale-90'/>
            <div className='flex-center'>
                {!isLoading?
                    <Avatar className='bg-[#D8D8D8] '>
                        <AvatarFallback>PN</AvatarFallback>
                        <AvatarImage className='object-contain' src={data?.data.data.photo}/>
                    </Avatar>
                    :<Skeleton className='h-10 w-10 rounded-full'/>
                }
                <div className='px-2 max-sm:hidden'>
                    {!isLoading?
                        <h3 className='font-semibold text-base'>{data?.data.data.firstname} {data?.data.data.lastname}</h3>:
                        <Skeleton className='h-5 w-[120px] rounded-md my1-'/>
                    }
                    {!isLoading?<h3 className="">Admin</h3>:null}
                </div>
                {!isLoading?
                    <div className="rounded-full grid place-items-center ml-2 h-5 w-5 border">
                         <Svgs.ChevronSvg className='scale-150 '/>
                    </div>:null
                }

            </div>                
        </div>
    </div>
  )
}
