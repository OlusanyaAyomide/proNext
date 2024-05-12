import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import UserInput from '../users/add/UserInput'
import { IChangePassword, IChangepasswordBody } from '../../util/mutateInterface'
import { resetInAppPasswordsechema } from '../../hooks/validation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import Loader from '../util-component/Loader'
import { usePostRequest } from '../../hooks/usePostRequests'

export default function ChangeUserpassword() {
    const {register,handleSubmit,formState:{errors},reset} = useForm<IChangePassword>(
        {resolver:yupResolver(resetInAppPasswordsechema)}
    )
    
    const {mutate,isPending} = usePostRequest<void,IChangepasswordBody>({url:"/admin/update/staff/password",addId:true,showSuccess:"Password successfully changed",onSuccess:()=>{reset()}})

    const onSubmit:SubmitHandler<IChangePassword>= async (data)=>{
        console.log(data)
        mutate({currentpassword:data.currentpassword,newpassword:data.newpassword})
    }
    return (
    <>
        <h1 className="pl-2 mb-6 section-header">Change Password</h1>
        <div className="card px-2 py-6 mb-3 sm:px-3 mt-3 md:pl-20">
            <form className='mt-4 max-w-[500px] ' onSubmit={handleSubmit(onSubmit)} >
                <UserInput
                    name='currentpassword'
                    placeholder='xyz@gmail.com'
                    register={register}
                    error={errors.currentpassword?.message}
                    inputStyle='bg-[#F5F6FA]'
                    title='Old Password'
                />
                <UserInput
                    name='newpassword'
                    placeholder='Enter New password'
                    register={register}
                    error={errors.newpassword?.message}
                    inputStyle='bg-[#F5F6FA]'
                    title='New Password'
                    type="password"
                />
                <UserInput
                    name='confirmPassword'
                    placeholder='Confirm New password'
                    register={register}
                    error={errors.confirmPassword?.message}
                    inputStyle='bg-[#F5F6FA]'
                    title='Confirm New Password'
                    type="password"
                />
                <Button disabled={isPending} 
                    className='mt-8 mb-16 rounded-md block mx-auto w-full px-10'>
                    {!isPending?<span>Log in user</span>:<Loader/>}
                </Button>
            </form>
        </div>
    </>

  )
}
