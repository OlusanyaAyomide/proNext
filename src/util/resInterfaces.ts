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