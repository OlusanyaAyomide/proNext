import React, { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'

import { FormStatus, FormType } from '../../../util/resInterfaces'
import { Button } from '../../ui/button'
import { AlertDialog , AlertDialogTrigger ,AlertDialogContent} from '../../ui/alert-dialog'
import { X } from 'lucide-react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'
import { _FormStatusFilter } from '../../../util/constants'
import { usePostRequest } from '../../../hooks/usePostRequests'
import { IUpdateStatus } from '../../../util/mutateInterface'
import Loader from '../../util-component/Loader'


export default function FormHeader({type,id,status,email}:{type:FormType,id:string,status:FormStatus,email:string}) {
    const [value,setvalue] = useState<string>(status)
    const [isOpened,setIsOpened] = useState(false)
    const queryClient = useQueryClient()
    const {isPending,mutate} = usePostRequest<void,IUpdateStatus>({url:"/admin/update/form/status",showError:true,showSuccess:"Form Status successfully updated",onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:[type,id],type:"all"})
      setIsOpened(false)
    }})

    const openEmailCliet = () =>{
      if (!window) { return; }
      window.open(`mailto:${email}`)
    }

  return (
    <div className="px-2 mt-5 mb-1 flex-center flex-wrap justify-between">
        <h3 className="section-header">Candidate Form</h3>
        <div>
            <Button onClick={openEmailCliet} variant="outline" className='mr-3'>Send Email</Button>
            <AlertDialog open={isOpened}>
              <AlertDialogTrigger asChild>
                <Button className='px-5' onClick={()=>{setIsOpened(true)}}>Update Status</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className='px-10 py-6'>
                  <Button variant={"ghost"} size={"icon"} onClick={()=>{setIsOpened(false)}} className='absolute  rounded-full -top-11 right-1 sm:-right-11 bg-white'>
                    <X className=''/>
                  </Button>
                  <div className="flex-center">
                    <h3 className="w-4/12 text-fade">Current Status </h3>
                    <h3 className="w-8/12">{status}</h3>
                  </div>
                  <div className="mt-3 flex-center">
                    <h3 className="w-4/12 text-fade">Change Status</h3>
                    <Select onValueChange={(val)=>{setvalue(val)}}>
                      <SelectTrigger className='w-8/12'>
                          <SelectValue placeholder="Form Status"></SelectValue>
                      </SelectTrigger>
                      <SelectContent className='h-[210px] overflow-scroll default-scroll'>
                        <SelectGroup className=''>
                          {_FormStatusFilter.map((item,key)=>(
                            <SelectItem key={key} value={item}>{item}</SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mt-4">
                    <Button 
                    onClick={()=>{mutate({type,status:value,formid:id})}}
                    disabled={!value || isPending} className='mx-auto px-12 block'>
                      {isPending?<Loader/>:<span>Apply</span>}
                    </Button>
                  </div>
              </AlertDialogContent>
            </AlertDialog>

        </div>
    </div>
  )
}
