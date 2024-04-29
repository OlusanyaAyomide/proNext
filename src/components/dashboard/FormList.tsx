import React from 'react'
import { _mockRecent } from '../../util/constants'
import {Table,TableBody,TableCaption,TableCell,TableFooter,TableHead,TableHeader,
    TableRow,
  } from "../../components/ui/table"
import { Button } from '../ui/button'
import { useFormFilter } from '../../store/useFormFilters';

export interface IForms{
    name: string;
    phoneNum: string;
    date: string;
    exp: string;
    city: string;
    status?:"replied" | "new form" | "No response" | "interviewed",
}   
export default function FormList({form,isRecent}:{form:IForms[],isRecent?:boolean}) {
    const {date,status,type} = useFormFilter()
    // console.log(date,status,type)

    return (
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
                <TableHead className='max-sm:hidden'>
                    <span>Experiences</span>
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
                {form.map((item,key)=>(
                    <TableRow key={key} className='text-center'>
                        <TableCell>
                            <span>{item.name}</span>
                        </TableCell>
                        <TableCell className='max-sm:hidden'>
                            <span>{item.phoneNum}</span>
                        </TableCell>
                        <TableCell className='max-md:hidden'>
                            <span>{item.date}</span>
                        </TableCell>
                        <TableCell className='max-sm:hidden'>
                            <span>{item.exp}</span>
                        </TableCell>
                        <TableCell>
                            <span>{item.city}</span>
                        </TableCell>
                        <TableCell>
                            {isRecent?
                                <Button className='block bg-[#00B69B] hover:bg-[#00B69B] mx-auto px-3 lg:px-6 text-sm h-9'>View</Button>
                            :
                                item.status === "replied"?
                                <Button className='block rounded-sm w-[100px] text-[#00B69B] bg-[#00B69B]/30 hover:bg-[#00B69B]/40 mx-auto px-3  text-sm h-9'>Replied</Button>
                            :
                                item.status === "new form"?
                            <Button className='block text-gray-800 rounded-sm w-[100px] bg-gray-500/30 hover:bg-gray-500/40 mx-auto px-3  text-sm h-9'>New Form</Button>
                        :
                                item.status === "No response"?
                                <Button className='block rounded-sm w-[100px] text-red-500 bg-red-500/30 hover:bg-red-500/30 mx-auto px-3  text-sm h-9'>No Response</Button>
                            :
                                item.status === "interviewed"?
                                <Button className='block text-purple-500 rounded-sm w-[100px] bg-purple-500/30 hover:bg-purple-500/40 mx-auto px-3  text-sm h-9'>Interviewed</Button>:""
                            }

                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
    </Table>
  )
}
