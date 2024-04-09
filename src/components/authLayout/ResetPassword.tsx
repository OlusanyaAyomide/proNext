import React from 'react'
import Auth from './Auth'
import { Button } from '../ui/button';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm ,SubmitHandler} from 'react-hook-form';
import { ILogIn,resetSchema} from '../../hooks/validation';
import UserInput from '../users/add/UserInput';
import { Link } from 'react-router-dom';
import { usePostRequest } from '../../hooks/usePostRequests';
import Loader from '../util-component/Loader';

export default function ResetPassword() {
    const {register,handleSubmit,formState:{errors},reset} = useForm<{email:string}>(
    {resolver:yupResolver(resetSchema)}
    )


    const {mutate,isPending} = usePostRequest<void,{email:string}>({url:"/admin/forgot/password",showSuccess:"verification sent to email",
        onSuccess:()=>{reset()}})

    const onSubmit:SubmitHandler<{email:string}>= async (data)=>{
        mutate(data)
    }
    return (
        <Auth>
            <form onSubmit={handleSubmit(onSubmit)} >
            <h1 className="section-header mb-2 text-center">Reset Your Password</h1>
            <h3 className="text-xs text-center mb-8">Please enter your email to reset your password</h3>
                <UserInput
                    name='email'
                    placeholder='xyz@gmail.com'
                    register={register}
                    type='email'
                    error={errors.email?.message}
                    className=''
                    title='Enter Email Address'
                />
                <Button disabled={isPending} className='mt-10 rounded-md block mx-auto w-full px-10'>
                    {isPending?<Loader/>:<span>Reset Password</span>}
                </Button>
                <h1 className="my-3 text-center font-bold">or</h1>
                <Link to={"/admin/auth/login"}>
                    <Button variant={"outline"} className='rounded-md max-w-[250px] w-full mx-auto block'>Sign In</Button>
                </Link>
            </form>
  
        </Auth>
  )
}
