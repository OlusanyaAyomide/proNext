import React from 'react'
import { cn } from '../lib/utils'

export default function Logo({className,style}:{className?:string,style?:string}) {
  return (
    <div className={cn('w-[260px] h-[65px] scale-150 pt-1',style)}>
        <img className={cn("object-contain h-full w-full",className)} src='/logo3.png' alt=''></img>
    </div>
  )
}
