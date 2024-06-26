import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export default function Auth({children}:{children:React.ReactNode}) {
  
  const [{authCookie},] = useCookies(["authCookie"])
  const navigate = useNavigate()

  useEffect(()=>{
    if(authCookie){
      if(authCookie){
        navigate("/admin/dashboard")
      }
    }
  },[authCookie])
  return (
    <>
      {authCookie?null:
        <div className='min-h-screen bg-cover px-2 sm:px-3  flex-center justify-center bg-[url("/authbg.svg")]'>
          <div className="card  py-10 w-full max-w-[430px]">  
              {children}
          </div>
      </div>
    }
    </>

  )
}
