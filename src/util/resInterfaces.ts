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