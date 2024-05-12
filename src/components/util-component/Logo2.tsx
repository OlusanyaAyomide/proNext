import React from 'react'
import { cn } from '../lib/utils'
import Logo from './Logo'

export default function Logo2({className}:{className?:string}) {
  return (
    <div className={cn('flex-center shrink-0 text-xl',className)}>
        {/* <span className='font-extrabold text-main'>Pro</span>
        <span className='text-black font-extrabold'>Next</span> */}
        <Logo style='w-[170px]'/>
    </div>
  )
}
