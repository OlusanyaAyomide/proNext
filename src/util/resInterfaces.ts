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