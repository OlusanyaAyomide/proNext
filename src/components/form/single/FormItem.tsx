import React from 'react'

export default function FormItem({title,content}:{title:string,content:string}) {
  return (
    <div className='w-full max-w-[600px] mb-5 flex-center max-sm:flex-col'>
        <span className="w-full max-sm:mb-2 sm:w-5/12">{title}</span>
        <span className='w-full sm:w-7/12 font-semibold text-pro-blue'>{content}</span>
    </div>
  )
}
