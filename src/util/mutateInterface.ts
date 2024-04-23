export interface ISubmitHireTalent{
    email:string,
    name:string,
    phone:string,
    scheduledate:string,
    proposaltype:string,
    additionalmessage:string
}

export interface ISubmitFindJob{
    email:string
    firstname:string,
    lastname:string,
    phone:string,
    scheduledate:string,
    educationalaccount:string,
    educationalqualification:string,
    bpoexperience:string,
    location:string,
    site:string,
    file:string,
    type:string
}


export interface ICreateNewUser
{
    lastname:string,
    firstname:string,
    email:string,
    password?:string,
    address:string,
    photo:string,
    dob:string,
    phone:string
    staffid?:string
}

export interface ISubmitNewService{
    description:string,
    photo:string,
    title:string,
    tag:string,
    city:string,
    category:string
    
}


export interface IResContactUs {
    name:string,
    email:string,
    phone:string,
    enquiry:string,
    message:string
}