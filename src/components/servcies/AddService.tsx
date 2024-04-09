import React ,{useRef, useState} from 'react'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm ,SubmitHandler} from 'react-hook-form';
import { INewService, newServiceSchema } from '../../hooks/validation';
import UserInput from '../users/add/UserInput';
import { Select, SelectGroup, SelectTrigger,SelectContent, SelectValue, SelectItem } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Avatar,AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Svgs } from '../../util/svgs';
import { Form } from 'react-router-dom';
import FormSelect from '../util-component/FormSelect';

export default function AddService() {

    const [file,setFile] = useState<File | null>(null)
    const [url,setUrl] = useState("")
    const ref = useRef<HTMLInputElement>(null)

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

    const onSubmit:SubmitHandler<INewService>= async (data)=>{
        console.log(data)
    }

    const {register,handleSubmit,formState:{errors},setValue} = useForm<INewService>(
        {resolver:yupResolver(newServiceSchema)}
        )
    
    
    return (
    <div className='pt-6'>
         <h1 className="pl-2 section-header">Add Service</h1>
         <div className="card pb-6 mt-4 px-2">
            <div className="max-w-[800px] mx-auto">
                <div className="w-fit relative">
                    {(url && file)?
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
                <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex-center  flex-wrap'>
                    
                <UserInput
                    name='title'
                    placeholder='Enter The TItle Of The Servive'
                    register={register}
                    error={errors.title?.message}
                    className=''
                    title='Title'
                />

                <FormSelect
                    className='w-full sm:pr-2 sm:w-6/12 mb-4 relative'
                    name='category'
                    setValue={setValue}
                    items={[{value:"health",label:"Health Care"},
                            {value:"logistic",label:"Logistics"},
                            {value:"insurance",label:"Insurance"},
                            {value:"wfh",label:"WFH"},]}    
                    error={errors.category?.message}   
                    title='Select Category'   
                />

                <UserInput
                    name='city'
                    placeholder='Enter Your Service City'
                    register={register}
                    error={errors.city?.message}
                    className=''
                    title='City'
                />

                <div className="w-full sm:w-6/12 relative h-[200px]">
                    <Textarea {...register("description")} className='resize-none bg-offwhite rounded-md ring-0 focus-visible:ring-0 h-full'>
                    </Textarea>
                    {errors.description && <span className="text-red-500 absolute -bottom-4 left-2 text-[13px]">{errors.description.message}</span>}
                </div>

                <div className="w-full sm:w-6/12 sm:pl-2 sm:flex sm:items-end sm:h-[200px] max-sm:mt-5">
                    <Button className='mt-5 block mx-auto px-10'>Add Service</Button>
                </div>
            </form>
            </div>
         </div>
    </div>
  )
}
