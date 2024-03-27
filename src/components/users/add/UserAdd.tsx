import React, { useState } from 'react'
import { Svgs } from '../../../util/svgs'
import { Button } from '../../ui/button'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm ,SubmitHandler} from 'react-hook-form';
import { INewUserSchema, newUserSchema } from '../../../hooks/validation';
import UserInput from './UserInput';
import { Select, SelectGroup, SelectTrigger,SelectContent, SelectValue, SelectItem } from '../../ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Calendar } from '../../ui/calendar';
import { Textarea } from '../../ui/textarea';


export default function UserAdd() {
    const [file,setFile] = useState<File | null>(null)
    const [url,setUrl] = useState("")
    const [date, setDate] = useState<Date | undefined>(new Date())

  const {register,handleSubmit,getValues,formState:{errors},setValue} = useForm<INewUserSchema>(
    {resolver:yupResolver(newUserSchema)}
    )


    const onSubmit:SubmitHandler<INewUserSchema>= async (data)=>{
        console.log(data)
    }

  return (
    <div  className='pt-6'>
        <h1 className="pl-2 section-header">Add User</h1>
        <div className="mt-4 card px-2">
            <div className="w-fit mx-auto">
                <div className="mx-auto h-20 w-20 grid rounded-full bg-offwhite place-items-center">
                    <Svgs.CameraSvg/>
                </div>
                <Button variant={"ghost"} className='block mx-auto mt-3'>Upload Photo</Button> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex-center max-w-[800px] mx-auto flex-wrap">
            <UserInput
                name='firstName'
                placeholder='First Name'
                register={register}
                error={errors.firstName?.message}
                className='sm:w-6/12 pr-2'
                title='firstName'
            />
            <UserInput
                name='lastName'
                placeholder='last Name'
                register={register}
                error={errors.lastName?.message}
                className='sm:w-6/12 pl-2'
                title='lastName'
            />
            <UserInput
                name='email'
                placeholder='Email'
                register={register}
                error={errors.email?.message}
                className='sm:w-6/12 pr-2'
                title='User Email'
            />
            <UserInput
                name='phoneNumber'
                register={register}
                error={errors.phoneNumber?.message}
                className='sm:w-6/12 pl-2'
                title='phoneNumber'
                placeholder='PhoneNumber'
            />
            <div className='w-full  pr-2 sm:w-6/12 mb-6 relative'>
                <h3 className='ml-[2px] font-medium  text-gray-800 text-support mb-[2px] md:text-[15px]'>Date Of Birth</h3>
                <Popover>
                    <PopoverTrigger className='bg-offwhite w-full flex justify-between px-2 border rounded-md items-center h-10'>
                        <span>Select BirthDate</span>
                        <Svgs.ChevronSvg/>
                    </PopoverTrigger>
                    <PopoverContent>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date)=>{
                            if (date){setValue("dateOfBirth",date)}
                            setDate(date)
                        }}
                        className="rounded-md"
                    />
                    </PopoverContent>
                </Popover>
                {errors.dateOfBirth && <span className="text-red-500 absolute -bottom-4 left-2 text-[13px]">{errors.dateOfBirth.message}</span>}
            </div>
            <div className="w-full pl-2 sm:w-6/12 mb-6 relative">
                <h3 className='ml-[2px] font-medium text-support mb-[2px] md:text-[15px]'>Select Gender</h3>
                <Select onValueChange={(val)=>{setValue("gender",val)}}>
                    <SelectTrigger className='w-full bg-offwhite border-0 flex justify-between '>
                        <SelectValue placeholder=""/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value='Male'>Male</SelectItem>
                            <SelectItem value='Female'>FeMale</SelectItem>
                            <SelectItem value='others'>Othere</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {errors.gender && <span className="text-red-500 absolute -bottom-4 left-2 text-[13px]">{errors.gender.message}</span>}
            </div>
            <div className="w-full relative h-[200px]">
                <Textarea {...register("address")} className='resize-none bg-offwhite rounded-md ring-0 focus-visible:ring-0 h-full'>
                </Textarea>
                {errors.address && <span className="text-red-500 absolute -bottom-4 left-2 text-[13px]">{errors.address.message}</span>}
            </div>
            <Button className='mt-5 block mx-auto px-10'>Add User</Button>
        </form>
        </div>

    </div>
  )
}
