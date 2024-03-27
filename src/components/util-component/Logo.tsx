import React from 'react'
import { cn } from '../lib/utils'

export default function Logo({className}:{className?:string}) {
  return (
    <div className=' w-[120px] h-[45px] pt-1'>
        <img className={cn("object-cover h-full w-full",className)} src='/logo.png' alt=''></img>
    </div>
  )
}
