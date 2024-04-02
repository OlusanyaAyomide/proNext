import * as yup from "yup"

export interface INewUserSchema{
    firstName:string
    lastName:string
    email:string
    phoneNumber:string
    dateOfBirth:Date
    gender:string
    address:string   
    image:string
}

export interface ILogIn{
    email:string
    password:string
}

export interface INewService{
    title:string
    category:string
    city:string
    tag:string
    description:string
    image:string
}

export const newUserSchema:yup.ObjectSchema<INewUserSchema>= yup.object({
    firstName:yup.string().required(),
    lastName:yup.string().required(),
    email:yup.string().required(),
    dateOfBirth:yup.date().required(),
    phoneNumber: yup.string().matches(/^[0-9]*$/, 'Phone number must contain only digits').max(12).required(),
    gender:yup.string().required(),
    address:yup.string().required(),
    image:yup.string().required(),
})


export const loginSchema:yup.ObjectSchema<ILogIn>=yup.object({
    email:yup.string().email().required(),
    password:yup.string().required()
})

export const resetSchema:yup.ObjectSchema<{email:string}>=yup.object({
    email:yup.string().email().required()
})


export const newServiceSchema:yup.ObjectSchema<INewService>= yup.object({
    title:yup.string().required(),
    category:yup.string().required(),
    description:yup.string().required(),
    city:yup.string().required(),
    tag:yup.string().required(),
    image:yup.string().required()
    
})
