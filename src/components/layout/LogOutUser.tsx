import React from 'react'
import { AlertDialog, AlertDialogCancel, AlertDialogTrigger,AlertDialogContent } from '../ui/alert-dialog'
import { Button } from '../ui/button';
import { useCookies } from 'react-cookie'
import { QueryClient } from '@tanstack/react-query'




export default function LogOutUser({children}:{children:React.ReactNode}) {
    const [,,removeCookie] = useCookies(['authCookie'])
    const queryClient = new QueryClient()
  return (
    <AlertDialog>
        <AlertDialogTrigger asChild>
            {children}
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
  )
}
