import React, { useEffect } from 'react'
import Header from './Header'
import SideLinks from './SideLinks'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export default function Layout({children}:{children:React.ReactNode}) {

    const navigate = useNavigate()
    const [{authCookie},setCookie] = useCookies(["authCookie"])
    // console.log(authCookie)
    useEffect(()=>{
        if(authCookie){

        }else{
            navigate("/admin/auth/login")
        }
    },[authCookie])

    return (
        <>
            {authCookie?
                <div className='relative bg-[#F7F7F9] min-h-screen max-w-[1600px] mx-auto'>
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
            :null}
        </>

  )
}
