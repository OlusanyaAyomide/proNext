import React from 'react'
import Auth from './Auth'
import { Button } from '../ui/button';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm ,SubmitHandler} from 'react-hook-form';
import { ILogIn, loginSchema } from '../../hooks/validation';
import UserInput from '../users/add/UserInput';
import { useNavigate } from 'react-router-dom';


export default function LogIn() {
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors},setValue} = useForm<ILogIn>(
    {resolver:yupResolver(loginSchema)}
    )
    // const his

    const onSubmit:SubmitHandler<ILogIn>= async (data)=>{
        console.log(data)
        navigate("/admin/dashboard")
    }
    return (
        <Auth>
            <form onSubmit={handleSubmit(onSubmit)} >
            <h1 className="section-header mb-2 text-center">Login to your account</h1>
            <h3 className="text-xs text-center mb-8">Enter your email and password</h3>
                <UserInput
                    name='email'
                    placeholder='xyz@gmail.com'
                    register={register}
                    type='email'
                    error={errors.email?.message}
                    className=''
                    title='Enter Email Address'
                />
                <UserInput
                    name='password'
                    placeholder='Enter password'
                    register={register}
                    error={errors.password?.message}
                    className=''
                    title='Enter Password'
                    type="password"
                />
                <Button className='mt-10 rounded-md block mx-auto w-full px-10'>Log In User</Button>
            </form>
  
        </Auth>
  )
}
