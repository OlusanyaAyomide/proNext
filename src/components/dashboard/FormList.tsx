import React from 'react'
import { _mockRecent } from '../../util/constants'
import {Table,TableBody,TableCell,TableHead,TableHeader,
    TableRow,
  } from "../../components/ui/table"
import { Button } from '../ui/button'
import {  IMixedFormArray } from '../../util/resInterfaces';
import { formatDateToString } from '../lib/utils';
import StatusButton from '../form/StatusButton';
import { Link } from 'react-router-dom';


export default function FormList({form,isRecent}:{form:IMixedFormArray,isRecent?:boolean}) {
    if(!form){return <span>Server Error</span>}
    return(
        <Table>
        <TableHeader className='mb-3 rounded-lg overflow-hidden '>
            <TableRow className='bg-[#F1F4F9] py-2 rounded-lg overflow-hidden' >
                <TableHead>
                    <span>Name</span>
                </TableHead>
                <TableHead className='max-sm:hidden'>
                    <span>PhoneNumber</span>
                </TableHead>
                <TableHead className='max-md:hidden'>
                    <span>Date</span>
                </TableHead>
                <TableHead>
                    <span>City</span>
                </TableHead>
                <TableHead>
                    <span>Status</span>
                </TableHead>
            </TableRow>
        </TableHeader>
            <TableBody>
            {form.map((item,key)=>{
                const isContactus =  'enquiry' in item?{...item}:null
                const isHireTalent    = 'additionalmessage' in item?{...item}:null
                const isFindJob = 'educationalqualification' in item?{...item}:null
                return <TableRow key={key} className='text-center relative group'>
                    <TableCell>
                        <span>
                            {isFindJob?`${isFindJob.firstname} ${isFindJob.lastname}`:
                            isContactus?isContactus.name:isHireTalent?isHireTalent.name:""}
                        </span>
                        <div className='relative'>
                        <Link className=' left-2 -top-12 hidden group-hover:block group-hover:absolute' to=
                    {`/admin/forms/${isHireTalent?"hiretalent":isContactus?"contactform":"findjob"}/${item._id}`}
                    >
                        <Button className='bg-main text-pro-blue h-8 shadow-md'><span className='text-white'>View Details</span></Button>
                    </Link>
                        </div>
                    </TableCell>
                    <TableCell className='max-sm:hidden'>
                        <span>{item.phone}</span>
                    </TableCell>
                    <TableCell className='max-md:hidden'>
                        <span>{formatDateToString(item.createdAt)}</span>
                    </TableCell>
                    <TableCell>
                        <span>{isFindJob?isFindJob.location:"N/A"}</span>
                    </TableCell>
                    <TableCell>
                        {isRecent?
                            <Button className='block bg-[#00B69B] hover:bg-[#00B69B] mx-auto px-3 lg:px-6 text-sm h-9'>View</Button>
                        :
                            <StatusButton status={item.status}/>
                        }
                    </TableCell>
                </TableRow>
            })}
            </TableBody>
        </Table>
        )

}
