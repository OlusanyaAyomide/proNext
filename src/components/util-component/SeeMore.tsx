import React, { useState } from 'react'

export default function SeeMore({count=20,text}:{count?:number,text:string}) {
    const [isFull,setIsFull] = useState(false)
    const dsipayedText = !isFull ?text.split(" ").splice(0,count).join(" "):text
  return (
    <div className='h-fit  transition-all duration-300'>
        <p className='inline'>
            {dsipayedText}
            {text.split(" ").length > count && <button onClick={()=>{setIsFull((prev=>!prev))}} className='font-semibold hover:font-bold px-1 text-main'>
              {(!isFull)?"see more":"see less"}...
            </button>}
        </p>
    </div>
  )
}

