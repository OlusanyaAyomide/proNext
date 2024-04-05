import React, { useEffect } from 'react'
import { QueryClientProvider, QueryClient,QueryCache } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { redirect, useNavigate } from 'react-router-dom';

export default function QueryProvider({children}:{children:React.ReactNode}) {
    const navigate = useNavigate()
    // useEffect(()=>{
    //     navigate("/admin/dashboard")
    // },[])
    
    const queryClient = new QueryClient({
      queryCache:new QueryCache({
        onError:(err,data)=>{console.log(err,data)}
      })
    })

  return (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}
