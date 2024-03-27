import React from 'react'
import { cn } from '../lib/utils';

export default function Paragraph({content,className}:{content:string,className?:string}){
    const transfomedText = content
        .split('\n')
        .map((sentence, index) => (
          <p className={cn(`mb-1`,className)} key={index}>{sentence.trim()}</p>
    ));
  return (
    <div className='leading-7'>
        {transfomedText.map((JSX)=>(
            JSX
        ))}
    </div>
  )
}
