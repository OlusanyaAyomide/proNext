import React from 'react'
import { _sideLinks } from '../../util/constants'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import { Svgs } from '../../util/svgs'
import { AlertDialog, AlertDialogCancel, AlertDialogTrigger,AlertDialogContent } from '../ui/alert-dialog'

import { useCookies } from 'react-cookie'
import { QueryClient } from '@tanstack/react-query'


export default function SideLinks() {
    const {pathname} = useLocation()
    const [,,removeCookie] = useCookies(['authCookie'])
    const queryClient = new QueryClient()
  return (
    <div className='px-2 pt-8 lg:pt-5 flex h-full flex-col justify-between'>
        <div>
            {_sideLinks.map((item,key)=>{
                const isActive = pathname.startsWith(item.link)

                return(<Link key={key} to={item.link}>
                    <Button variant={isActive?"default":"ghost"} className='w-full flex-center justify-start mb-5 rounded-md'  >
                        <item.Icon isActive className='mr-4'/>
                        <span className={`font-semibold ${isActive?"text-white":""}`}>{item.text}</span>
                    </Button>
                </Link>
                )
            })}
        </div>
        <div className="border-t pt-4 pb-10">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant={"ghost"} className='w-full flex-center justify-start'>
                        <Svgs.LogoutSvg className='mr-5'/>
                        <span>Log out</span>
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className='py-6 px-4 sm:px-12 '>
                    <h3 className="text-center min-header">Are you sure you want to Log out</h3>
                    
                    <div className="flex-center mt-5">
                        <AlertDialogCancel className='pr-3 w-6/12'>
                                <span>Cancel</span>
                        </AlertDialogCancel>
                        <div className="pl-2 w-6/12">
                            <Button onClick={()=>{
                                removeCookie("authCookie");
                                queryClient.clear()
                                }} className='w-full'>
                                <span>Procced</span>
                            </Button>
                        </div>
                    </div>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    </div>
  )
}
