import React, { useRef, useState } from 'react'
import { IFindJob, findJobSchema } from '../../hooks/validation'
import { useForm ,SubmitHandler} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import UserInput from '../users/add/UserInput';
import FormSelect from '../util-component/FormSelect';
import { Popover ,PopoverTrigger,PopoverContent} from '../ui/popover';
import { Svgs } from '../../util/svgs';
import { Calendar } from '../ui/calendar';
import { Button } from '../ui/button';
import { formatDate } from '../lib/utils';
import { qualifications } from '../../util/constants';
import { IoDocumentTextOutline } from "react-icons/io5";
import { toast } from '../ui/use-toast';
import { cloudinaryUploader, useCloudUpload } from '../util-component/cloudinaryUploader';
import { imgUrl } from '../util-component/keys';
import { usePostRequest } from '../../hooks/usePostRequests';
import { IResHireForm } from '../../util/resInterfaces';
import { ISubmitFindJob } from '../../util/mutateInterface';
import Loader from '../util-component/Loader';




export default function FindJobForm() {
    const {register,handleSubmit,formState:{errors},setValue,reset} = useForm<IFindJob>(
        {resolver:yupResolver(findJobSchema)})

    const [date, setDate] = useState<Date | undefined>()
    const [file,setFile] =  useState<File | null>(null)
    const {isPending,mutateAsync} = useCloudUpload()
    const {isPending:pending,mutate} = usePostRequest<IResHireForm,ISubmitFindJob>({url:"/user/findjob",showError:true,showSuccess:"Job Form succesfully submitted",
        onSuccess:()=>{setFile(null),reset(),setDate(undefined),setFile(null)}
    })
    const ref = useRef<HTMLInputElement>(null)  

    const onSubmit:SubmitHandler<IFindJob>= async (data)=>{
        if(!file){return}
        const uploadId = await mutateAsync({file})
        console.log(uploadId)
        if(uploadId.data){
            const imgurl = `${imgUrl}${uploadId.data.public_id}.png`
            console.log(imgurl)
            mutate({
               email:data.email,firstname:data.firstName,lastname:data.lastName,phone:data.mobileNumber,
               scheduledate:data.interviewDate.toISOString(),educationalaccount:data.experienceAccount, 
               educationalqualification:data.qualification,bpoexperience:data.experience.toString(),location:data.location,site:data.site,file:imgurl,type:"form upload"
            })
        }
    }

 
 
    const handeFileChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files && e.target.files[0];
        if(!file){return}
        if(file.size > 10000000){
            toast({
                description:"File Size is to large",
                className:"h-fit border-border"
            })
        }

        const allowedExtensions = /(\.pdf|\.docx*?)$/i
        if (!allowedExtensions.exec(file.name)){
            toast({
                description:"Invalid file type",
                className:"h-fit border-border"
            })
            return
        }
        setValue("resume",file.name)
        setFile(file)
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex-center flex-wrap'>
        <h1 className="text-center section-header mb-3 w-full">Hire A Talent</h1>
    
        <UserInput
            name='firstName'
            placeholder='Enter firstName'
            register={register}
            error={errors.firstName?.message}
            title='First Name'
            className='w-full sm:w-6/12 sm:pr-2'
        />

        <UserInput
            name='lastName'
            placeholder='Enter lastName'
            register={register}
            error={errors.lastName?.message}
            title='Last Name'
            className='w-full sm:w-6/12 sm:pl-2'
        />
        
        <UserInput
            name='email'
            type='email'
            placeholder='Enter your email adress'
            register={register}
            error={errors.email?.message}
            title='Email'
        />

        <UserInput
            name='mobileNumber'
            placeholder='Enter your mobile Number'
            register={register}
            error={errors.mobileNumber?.message}
            title='Mobile Number'
        />

        <div className='w-full'>
            <FormSelect
                name='qualification'
                error={errors.qualification?.message}
                selectTitle='Select education qualification'
                setValue={setValue}
                className='mb-4 w-7/12 sm:w-6/12'
                title='Educational Qualification'
                items={qualifications}  
                others
            />
        </div>

        <UserInput
            name='experience'
            placeholder='Enter your experience in months'
            register={register}
            className='w-full sm:w-6/12 sm:pr-2'
            error={errors.experience?.message}
            title='BPO Experience'
        />

        <FormSelect
            name='experienceAccount'
            error={errors.experienceAccount?.message}
            selectTitle='Select your experience account'
            setValue={setValue}
            className='mb-4 w-7/12 sm:w-6/12 sm:pl-2'
            title='Experience account '
            items={qualifications}  
            others
        />

        <FormSelect
            name='location'
            error={errors.location?.message}
            selectTitle='Select your location'
            setValue={setValue}
            className='mb-4 w-7/12 sm:w-6/12 sm:pl-2'
            title='Location '
            items={[{value:"lagos",label:'lagos'},
                    {value:"abuja",label:'Abuja'},
                    {value:"portHarcout",label:'portHarcout'},
            ]}  
            others
        />
        <FormSelect
            name='site'
            placeholder='Select nearest site'
            error={errors.site?.message}
            selectTitle='Select Site'
            setValue={setValue}
            className='mb-4 w-7/12 sm:w-6/12 sm:pl-2'
            title='Site '
            items={[{value:"lagos",label:'lagos'},
                    {value:"abuja",label:'Abuja'},
                    {value:"portHarcout",label:'portHarcout'},
            ]}  
            others
        />

        <div className='w-full mb-6 relative'>
            <h3 className='ml-[2px] font-medium  text-gray-800 text-support mb-[2px] md:text-[15px]'>When are you available to walk-in for an interview</h3>
            <Popover>
                <PopoverTrigger className='bg-offwhite w-full flex justify-between px-2 border rounded-md items-center h-10'>
                    <span>
                        {date?formatDate(date):"Select Date"}
                    </span>
                    <Svgs.ChevronSvg/>
                </PopoverTrigger>
                <PopoverContent className='shadow-lg'>
                <Calendar
                    mode="single"
                    fromDate={new Date()}
                    selected={date}
                    onSelect={(date)=>{
                    const dayOfWeek = date?.getDay();
                    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
                    if(isWeekend){return}
                    if (date){
                        setValue("interviewDate",date)
                    }
                    setDate(date)
                    }}
                    className="rounded-md"
                />
                </PopoverContent>
            </Popover>
            {errors.interviewDate && <span className="text-red-500 absolute -bottom-5 left-2 ">{errors.interviewDate.message}</span>}
        </div>

        <div className='w-full mb-6 relative'>
            <input onChange={handeFileChange} ref={ref} type="file" className="hidden" />
            {!file ? 
            <>
                <Button type='button' onClick={()=>{ref.current?.click()}} variant={"ghost"}  className="py-2 h-13 w-[100px] border-[#CBD5E0] flex items-center justify-center border-dashed">
                    <Svgs.fileCamera className='w-full object-cover'/>
                </Button>
                <h3 className='text-[13px]'>File Type:pdf,docx,doc</h3>
            </>
            :
            <div className='flex flex-col'>
                <IoDocumentTextOutline className='text-[50px] text-deepGreen'/>
                <span className='font-semibold text-main'>{file.name}</span>  
                <button type='button' onClick={()=>{ref.current?.click()}} className='cursor-pointer w-fit rounded-md hover:bg-accent px-3 mt-1 text-deepGreen'>Change</button>
            </div>
                
        } 
            {errors.resume && <span className="text-red-500 absolute -bottom-5 left-2 ">{errors.resume.message}</span>}
        </div>

        <Button disabled={(pending || isPending)} variant={"deep"} className='block hover:brightness-110 w-full my-6'>
            {!(pending || isPending)?<span>Submit</span>:<Loader/>}</Button>
        <h3 className="flex-center pr-2 justify-end w-full mt-2 flex-center">
            <span>Do you need a job?</span>
            <span className="underline cursor-pointer hover:font-bold font-semibold decoration-deepGreen ml-2">Click here</span>
        </h3>
    </form>
  )
}
