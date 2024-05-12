import React from 'react'
import { cn } from '../../lib/utils'
import { UseFormRegister } from 'react-hook-form'
import { Input } from '../../ui/input'
import { INewUserSchema } from '../../../hooks/validation'

interface IInputField extends React.InputHTMLAttributes<HTMLInputElement> {
    title:string
    error?:string
    name:string
    register?:UseFormRegister<any>
    inputStyle?:string
}

export default function UserInput({className,type="text",name,title,disabled=false,placeholder,error,register,inputStyle,...rest}:IInputField) {
  return (
    <div className={cn("mb-4 w-full relative",className)}>
        <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">{title}</h1>

        {/* conditionally register register input form if register is passed in */}
        {register?<Input {...register(name)} {...rest} type={type} disabled={disabled} placeholder={placeholder} className={cn('focus-visible:border focus-visible:ring-0 h-12 bg-offwhite',inputStyle)}/>
        :
        <Input {...rest} type={type} disabled={disabled} placeholder={placeholder} className='focus-visible:border bg-offwhite focus-visible:ring-0 h-12'/>
        }
        {error && <span className="text-red-500 absolute -bottom-5 left-2">{error}</span>}
    </div>
  )
}
