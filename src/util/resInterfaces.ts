export interface ISuccess{
    status_code: 200,
    status: true,
    message:string
}

export interface IUserLogin extends ISuccess{
    data:{
        id:string
        email:string
        token:string
    }
}

export interface IResHireForm {
    status_code: number;
    status: boolean;
    message: string;
    data: {
      name: string;
      email: string;
      phone: string;
      scheduledate: string; 
      proposaltype: string;
      additionalmessage: string;
      status: string;
      _id: string;
      createdAt: string; 
      __v: number;
    };
  }
  
export interface IToken{
    admin:string
    exp:string
    iat:string
}

export interface IUser {
    _id: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    photo: string;
    address: string;
    phone: string;
    dob: string;
    createdAt: string;
    __v: number;
}
  

export interface IServiceList {
    _id: string;
    title: string;
    category: string;
    city: string;
    tag: string;
    photo: string;
    description: string;
    createdAt: string;
    __v: number;
}


export interface IHireFromRes{
    _id: string
    name:string
    email:string,
    phone: string,
    scheduledate:string,
    proposaltype:string,
    additionalmessage:string,
    status: "" | "",
    createdAt:string,
    __v: 0
}

export type FormStatus = "NewForm" | "Replied" | "Interview" | "NoResponse" | "Others" | "Rejected Offer" | "OnHold" | "Hired" | "All";

export type FormType = "hiretalent" | "all" | "contactus" | "findjob"

export interface IContactRes{
    _id: string;
    status: FormStatus;
    name: string;
    email: string;
    phone: string;
    enquiry: string;
    message: string;
    createdAt: string;
    __v: number;
}


export interface IHireTalentRes {
    _id: string;
    name: string;
    email: string;
    phone: string;
    scheduledate: string;
    proposaltype: string;
    additionalmessage: string;
    status: FormStatus;
    createdAt: string;
    __v: number;
}

export interface IFindJobRes {
    fileupload:{
        file:string;
        type:string
    }
    _id: string;
    lastname: string;
    firstname: string;
    dob: string;
    gender: string;
    email: string;
    phone: string;
    status: FormStatus;
    educationalaccount: string;
    educationalqualification: string;
    bpoexperience: string;
    location: string;
    site: string;
    scheduledate: string;
    createdAt: string;
    __v: number;
}

export type IMixedFormArray = (IFindJobRes | IHireTalentRes | IContactRes)[]

export interface IFormResponse{
    status_code:number
    status:string
    message:string   
    data:IMixedFormArray
    pagination:{
        page:string
        limit:number
        totalpages:number
    }
}

export interface IDashBoardRes{
    status_code:number
    status:string
    message:string   
    data:{
        totaldata:IMixedFormArray
        totalcontactus: number,
        totalhiretalent: number,
        totalfindjob: number,
        totalform: number
    }
}