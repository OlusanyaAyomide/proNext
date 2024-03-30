import React from 'react'

export default function Auth({children}:{children:React.ReactNode}) {
  return (
    <div className='min-h-screen bg-cover px-2 sm:px-3  flex-center justify-center bg-[url("/authbg.svg")]'>
        <div className="card  py-10 w-full max-w-[430px]">  
            {children}
        </div>
    </div>
  )
}
