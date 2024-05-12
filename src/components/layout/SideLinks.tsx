import React from 'react'
import { _sideLinks } from '../../util/constants'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import { Svgs } from '../../util/svgs'
import LogOutUser from './LogOutUser'




export default function SideLinks() {
    const {pathname} = useLocation()

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
            <LogOutUser>
            <   Button variant={"ghost"} className='w-full flex-center justify-start'>
                <Svgs.LogoutSvg className='mr-5'/>
                <span>Log out</span>
            </Button>
            </LogOutUser>
        </div>
    </div>
  )
}
