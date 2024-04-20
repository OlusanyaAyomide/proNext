import { IContactForm,  contactFormSchema} from '../../hooks/validation'
import { useForm ,SubmitHandler} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import UserInput from '../users/add/UserInput';
import FormSelect from '../util-component/FormSelect';
import { Button } from '../ui/button';
import { _enquiryCategories } from '../../util/constants';
import { Textarea } from '../ui/textarea';


export default function ContactForm() {
    const {register,handleSubmit,formState:{errors},setValue} = useForm<IContactForm>(
        {resolver:yupResolver(contactFormSchema)})

    const onSubmit:SubmitHandler<IContactForm>= async (data)=>{
        console.log(data)
    }
 
    return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex-center flex-wrap'>
        <h1 className="text-center section-header mb-3 w-full">Contact Us</h1>
    
        <UserInput
            name='name'
            placeholder='Enter your Name'
            register={register}
            error={errors.name?.message}
            title='Name'
        />
        
        <UserInput
            name='email'
            type='email'
            placeholder='Enter your email adress'
            register={register}
            error={errors.email?.message}
            title='E-mail'
        />

        <UserInput
            name='mobileNumber'
            placeholder='Enter your mobile Number'
            register={register}
            error={errors.mobileNumber?.message}
            title='Mobile Number'
        />

        <FormSelect
            name='category'
            error={errors.category?.message}
            selectTitle='Select enquiry category'
            setValue={setValue}
            className='mb-6 w-6/12'
            title='Enquiry Category'
            items={_enquiryCategories}  
            others
        />

        <div className="w-full  mb-10 relative ">
            <h3 className='ml-[2px] font-medium  text-gray-800 text-support mb-[2px] md:text-[15px]'>Additional Message</h3>
            <Textarea placeholder='Enter your additional message' {...register("message")} className='resize-none bg-offwhite rounded-md ring-0 focus-visible:ring-0 h-[120px]'>
            </Textarea>
            {errors.message && <span className="text-red-500 absolute -bottom- left-2 ">{errors.message.message}</span>}
        </div>
    

        <Button variant={"deep"} className='block hover:brightness-110 w-full my-6'>Submit</Button>
                          
    </form>
  )
}
