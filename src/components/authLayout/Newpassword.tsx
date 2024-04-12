import React from 'react'
import Auth from './Auth'
import { Button } from '../ui/button';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm ,SubmitHandler} from 'react-hook-form';
import { resetPasswordSchema} from '../../hooks/validation';
import UserInput from '../users/add/UserInput';
import { Link, useNavigate,useSearchParams } from 'react-router-dom';

import { usePostRequest } from '../../hooks/usePostRequests';
import Loader from '../util-component/Loader';

export default function NewPassword() {
    const {register,handleSubmit,formState:{errors},reset} = useForm<{password:string}>(
    {resolver:yupResolver(resetPasswordSchema)}
    )
    const navigate = useNavigate()
    const [params] = useSearchParams()
    console.log(params.get("token"))
    ///admin/reset/password
    const {isPending,mutate} = usePostRequest<void,{password:string,token:string}>({url:"admin/reset/password",showSuccess:"Passoword reset succesful",
        onSuccess:()=>{
            navigate("/admin/auth/login")
        }
    })

    const onSubmit:SubmitHandler<{password:string}>= async ({password})=>{
       mutate({password,token:params.get("token") || ""})
    }
    return (
        <Auth>
            <form onSubmit={handleSubmit(onSubmit)} >
            <h1 className="section-header mb-2 text-center">Enter New Password</h1>
                <UserInput
                    name='password'
                    placeholder='Enter New Password'
                    register={register}
                    type='password'
                    error={errors.password?.message}
                    className=''
                    title='Enter Password'
                />
                <Button disabled={isPending} className='mt-10 rounded-md block mx-auto w-full px-10'>
                    {isPending?<Loader/>:<span>Reset Password</span>}
                </Button>
                <h1 className="my-3 text-center font-bold">or</h1>
                <Link to={"/admin/auth/login"}>
                    <Button  variant={"outline"} className='rounded-md max-w-[250px] w-full mx-auto block'>Sign In</Button>
                </Link>
            </form>
  
        </Auth>
  )
}
