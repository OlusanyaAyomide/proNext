import * as yup from "yup"

export interface INewUserSchema{
    firstName:string
    lastName:string
    email:string
    phoneNumber:string
    dateOfBirth:Date
    gender:string
    address:string   
}


export const newUserSchema:yup.ObjectSchema<INewUserSchema>= yup.object({
    firstName:yup.string().required(),
    lastName:yup.string().required(),
    email:yup.string().required(),
    dateOfBirth:yup.date().required(),
    phoneNumber: yup.string().matches(/^[0-9]*$/, 'Phone number must contain only digits').max(12).required(),
    gender:yup.string().required(),
    address:yup.string().required()
})
