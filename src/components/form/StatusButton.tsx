import React from 'react'
import { FormStatus } from '../../util/resInterfaces'
import { Button } from '../ui/button'

export default function StatusButton({status}:{status:FormStatus}) {
  return (
    <>
     {status === "Replied"?
            <Button className='block rounded-sm w-[110px] text-[#10B69B] bg-[#10B69B]/30 hover:bg-[#10B69B]/40 mx-auto px-3  text-sm h-9'>Replied</Button>
        :
        status === "Interview"?
            <Button className='block hover:bg-[#E0D4FC] text-purple-500 rounded-sm w-[110px] bg-[#E0D4FC] hover:brightness-110 mx-auto px-3  text-sm h-9'>Interview</Button>
        :
        status === "NoResponse"?
            <Button className='block rounded-sm w-[110px] text-red-500 bg-red-500/30 hover:bg-red-500/30 mx-auto hover:border px-3  text-sm h-9'>No Response</Button>
        :
        status === "NewForm"?
            <Button className='block hover:border text-gray-700 rounded-sm w-[110px] bg-[#E3E2E5] hover:brightness-110 hover:bg-[#E3E2E5] mx-auto px-3  text-sm h-9'>New Form</Button>
        :
        status === "Hired"?
            <Button className='block hover:border text-[#16EF26] rounded-sm w-[110px] bg-[#EAFCD4] hover:brightness-110 mx-auto px-3 hover:bg-[#EAFCD4] text-sm h-9'>Hired</Button>
        :  
        status === "OnHold"?
            <Button className='block hover:border text-orange-500 rounded-sm w-[110px] bg-[#FFEDDD] hover:brightness-110 mx-auto px-3 hover:bg-[#FFEDDD] text-sm h-9'>On Hold</Button>
        :    
            <Button className='block hover:border rounded-sm w-[110px] text-red-500 bg-red-500/30 hover:bg-red-500/50 mx-auto px-3  text-sm h-9'>Rejected Offer</Button>}
    </>
  )
}
