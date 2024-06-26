import React, { useRef, useState } from 'react'
import { Svgs } from '../../../util/svgs'
import { Button } from '../../ui/button'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm ,SubmitHandler} from 'react-hook-form';
import { IEditUserSchema, INewUserSchema, newUserSchema } from '../../../hooks/validation';
import UserInput from './UserInput';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Calendar } from '../../ui/calendar';
import { Textarea } from '../../ui/textarea';
import { Avatar,AvatarFallback, AvatarImage } from '../../ui/avatar';
import FormSelect from '../../util-component/FormSelect';
import { formatDate } from '../../lib/utils';
import { useCloudUpload } from '../../util-component/cloudinaryUploader';
import { usePostRequest } from '../../../hooks/usePostRequests';
import { ICreateNewUser } from '../../../util/mutateInterface';
import { imgUrl } from '../../util-component/keys';
import Loader from '../../util-component/Loader';
import { useQueryClient } from '@tanstack/react-query';


interface IUserAdd{
    user?:IEditUserSchema
}

export default function UserAdd({user}:IUserAdd) {
    const [file,setFile] = useState<File | null>(null)
    const [url,setUrl] = useState(user?.image || "")
    const [date, setDate] = useState<Date | undefined>(undefined)
    const ref = useRef<HTMLInputElement>(null)
    const {isPending,mutateAsync} = useCloudUpload()
    const queryClient = useQueryClient()

    const {register,handleSubmit,formState:{errors},setValue,reset} = useForm<INewUserSchema>(
    {resolver:yupResolver(newUserSchema),defaultValues:user}
    )

    const {isPending:pending,mutate} = usePostRequest<void,ICreateNewUser>({url:user?"/admin/update/staff":"/admin/signup",showError:true,showSuccess:user?"User profile has been edited succesfully":"New user added succesfully",addId:!!user,
    onSuccess:()=>{
        setFile(null),setDate(undefined),setFile(null)
        queryClient.invalidateQueries({queryKey:["all-users"]})
        if(user){
            queryClient.invalidateQueries({queryKey:['user-detail',user.id],type:"all"})
            }
        if(!user){reset()}
        }
  
    })


    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
        const file = e.target.files && e.target.files[0];
        if(!file){return}

        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            const imageData = reader.result as string
            setUrl(imageData)
            setFile(file)
            setValue("image",imageData)
        }
    }   


    const onSubmit:SubmitHandler<INewUserSchema>= async (data)=>{
        let imageUrl= user?user.image:""
        if (file){
            const uploadId = await mutateAsync({file})
            imageUrl = `${imgUrl}${uploadId.data.public_id}.png`  
        }
        
        if(imageUrl){
            const ApiData = {lastname:data.lastName,firstname:data.firstName,dob:data.dateOfBirth.toISOString(),
                email:data.email,phone:data.phoneNumber,photo:imageUrl,address:data.address
            }
            user?mutate({...ApiData,staffid:user.id}): mutate({...ApiData,password:`${data.firstName}1234`})
           
        }
    }

  return (
    <div  className='pt-6'>
        <h1 className="pl-2 section-header">Add User</h1>
        <div className="mt-4 card pb-6 px-2">
            <div className="w-fit mx-auto relative">
                {(url)?
                    <Avatar className='h-24 border shrink-0 w-24 overflow-hidden relative'>
                        <AvatarFallback>ND</AvatarFallback>
                        <AvatarImage className='object-cover' src={url}/>
                    </Avatar>
                    :
                    <div className="mx-auto h-24 w-24 grid rounded-full bg-offwhite place-items-center">
                        <Svgs.CameraSvg/>
                    </div>    
                    }

                <Button onClick={()=>ref.current?.click()} variant={"ghost"} className='block mx-auto mt-0 text-blue-500'>Upload Photo</Button> 
                <input  className='hidden' accept="image/*" onChange={handleUpload} ref={ref} type="file"/>
                {errors.image && <span className="text-red-500 absolute -bottom-2 whitespace-nowrap left-2 text-[13px]">{errors.image.message}</span>}
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
                        <span>
                            {date?formatDate(date):"Select Date"}
                        </span>
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

            <FormSelect
                className='w-full pl-2 sm:w-6/12 mb-4'
                setValue={setValue}   
                name='gender'
                defaultValue={user?.gender}
                items={[{value:"Male",label:"Male"},
                        {value:"Female",label:"Female"},
                        {value:"Others",label:"Others"}]} 
                title='Select Gender'
                error={errors.gender?.message}
            />

            <div className="w-full sm:w-6/12 relative h-[200px]">
                <Textarea {...register("address")} className='resize-none bg-offwhite rounded-md ring-0 focus-visible:ring-0 h-full'>
                </Textarea>
                {errors.address && <span className="text-red-500 absolute -bottom-4 left-2 text-[13px]">{errors.address.message}</span>}
            </div>
            <div className="w-full sm:w-6/12 sm:pl-4 sm:flex sm:items-end sm:h-[200px] max-sm:mt-5">
                    <Button disabled={(isPending || pending)} className='mt-5 block mx-auto px-10'>
                    {!(pending || isPending)?<span>{user?"Edit":"Add"} user</span>:<Loader/>}
                    </Button>
            </div>
        </form>
        </div>

    </div>
  )
}
