import React from 'react'
import Header from './Header'
import SideLinks from './SideLinks'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='relative bg-[#F7F7F9] max-w-[1600px] mx-auto'>
        <Header/>
        <div className="flex">
            <div className="w-[250px] shrink-0 max-lg:hidden ">
                <div className="sticky top-[51px] left-0 h-[calc(100vh-50px)] w-full bg-white">
                    <SideLinks/>
                </div>  
            </div>
            <div className="px-2 grow lg:px-3 pb-3">
                {children}
            </div>
        </div>
    </div>
  )
}
