import React, { useState } from 'react'
import { IHowItWorksForm, howItWorksFormSchema } from '../../hooks/validation'
import { useForm ,SubmitHandler} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import UserInput from '../users/add/UserInput';
import FormSelect from '../util-component/FormSelect';
import { Popover ,PopoverTrigger,PopoverContent} from '../ui/popover';
import { Svgs } from '../../util/svgs';
import { Calendar } from '../ui/calendar';
import { Button } from '../ui/button';
import { formatDate } from '../lib/utils';
import { Textarea } from '../ui/textarea';
import { usePostRequest } from '../../hooks/usePostRequests';
import { IResHireForm } from '../../util/resInterfaces';
import { ISubmitHireTalent } from '../../util/mutateInterface';
import Loader from '../util-component/Loader';



export default function HireTalentForm() {
    console.log("Rerender")
    const {register,handleSubmit,formState:{errors},setValue,reset} = useForm<IHowItWorksForm>(
        {resolver:yupResolver(howItWorksFormSchema)})

    const [date, setDate] = useState<Date | null>(null)
    const {isPending,mutate} = usePostRequest<IResHireForm,ISubmitHireTalent>({url:"/user/hiretalent",addId:false,showSuccess:"Form succesfully submited",onSuccess:()=>{
        reset()
        setDate(null)
    }})

    const onSubmit:SubmitHandler<IHowItWorksForm>= async (data)=>{
        const {scheduledDate,mobileNumber,proposal,additionalMessage,...rest} = data
        mutate({scheduledate:scheduledDate.toISOString(),phone:mobileNumber,proposaltype:proposal,additionalmessage:additionalMessage,...rest})
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center section-header mb-3">Hire A Talent</h1>
    
        <UserInput
            name='name'
            placeholder='Enter your name'
            register={register}
            error={errors.name?.message}
            title='Name'
        />

        <UserInput
            name='email'
            placeholder='Enter your email address'
            register={register}
            error={errors.email?.message}
            title='E-mail'
            type='email'
        />

        <UserInput
            name='mobileNumber'
            placeholder='Enter your mobile Number'
            register={register}
            error={errors.mobileNumber?.message}
            title='Mobile Number'
        />


        <FormSelect
            name='proposal'
            error={errors.proposal?.message}
            selectTitle='Select Proposal Type'
            setValue={setValue}
            className='mb-4'
            title='Type of Proposal'
            items={[{value:"volume_hiring",label:"Volume Hiring"},
                  {value:"language_hiring",label:"Language Hiring"},
                  {value:"recruit_process_outsourcing",label:"Recruit Process Outsourcing"},
                  {value:"tech_hiring",label:"Tech Hiring"},
                  {value:"entry_level_hiring",label:"Entry Level Hiring"},
                  {value:"foreign_leadership_hiring",label:"Foreign Leadership Hiring"}]}  
                others
            />

        <div className='w-full  pr-2 sm:w-8/12 mb-6 relative'>
            <h3 className='ml-[2px] font-medium  text-gray-800 text-support mb-[2px] md:text-[15px]'>Schedule a presentation call</h3>
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
                    selected={date || undefined}
                    onSelect={(date)=>{
                    const dayOfWeek = date?.getDay();
                    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
                    if(isWeekend){return}
                    if (date){
                        setValue("scheduledDate",date)
                    }
                    setDate(date || null)
                    }}
                    className="rounded-md"
                />
                </PopoverContent>
            </Popover>
            {errors.scheduledDate && <span className="text-red-500 absolute -bottom-5 left-2 ">{errors.scheduledDate.message}</span>}
        </div>

        <div className="w-full  mb-10 relative ">
            <h3 className='ml-[2px] font-medium  text-gray-800 text-support mb-[2px] md:text-[15px]'>Additional Message</h3>
            <Textarea placeholder='Enter your additional message' {...register("additionalMessage")} className='resize-none bg-offwhite rounded-md ring-0 focus-visible:ring-0 h-[120px]'>
            </Textarea>
            {errors.additionalMessage && <span className="text-red-500 absolute -bottom- left-2 ">{errors.additionalMessage.message}</span>}
        </div>
        <Button disabled={isPending} variant={"deep"} className='block hover:brightness-110 w-full my-6'>
            {!isPending?<span>Submit</span>:<Loader/>}
        </Button>
                          
    </form>
  )
}
