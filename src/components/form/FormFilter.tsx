import React from 'react'
import SearchInput from '../util-component/SearchInput'
import { Svgs } from '../../util/svgs'
import Filters from './Filters'
import FilterDates from './FilterDates'
import FIlterFormType from './FIlterFormType'


import { _FormStatusFilter, _formTypeFilters } from '../../util/constants'
import FIlterFormStatus from './FilterForStatus'
import { useFormFilter } from '../../store/useFormFilters'
import { Button } from '../ui/button'

export default function FormFilter() {
    const {setDate,setStatus,setType} = useFormFilter()
    return (
    <div>
        <div className='pt-7 mb-8 flex sm:items-center max-sm:flex-col'>
            <h1 className="section-header max-sm:mb-3">Forms</h1>
            <div className="grow sm:pl-10">
                <SearchInput className='max-md:block w-full max-w-[330px]'/>
            </div>
        </div>
        <div className="flex-center mb-5 border w-fit bg-white flex-wrap mt-3 rounded-md">
            <div className="py-2 border-r px-4 flex-center"><Svgs.FilterSvg/></div>
            <div className="border-r px-3 font-semibold h-10 grid place-content-center">Filter By</div>
            <div className='border-r max-md:grow md:hidden flex items-center px-3 font-semibold h-10'>
                <Svgs.ResetSvg className='mr-3'/>
                <span className='text-red-500'>Reset filter</span>
            </div>
            <div className="flex-center max-md:w-full">
                <Filters title="Select Filter Date">
                    <FilterDates/>
                </Filters>
                <Filters ngClass='sm:w-[380px]'  title="Select Form Type">
                    <FIlterFormType filters={_formTypeFilters} title='Select Filter Type'/>
                </Filters>
                <Filters ngClass='sm:w-[380px]' className='max-md:grow' title="Select Form Status">
                    <FIlterFormStatus filters={_FormStatusFilter} title='Select Filter Status'/>
                </Filters>
            </div>
            <Button onClick={()=>{
                setDate(null);setStatus(_FormStatusFilter),setType(_formTypeFilters)
            }}
             variant={"ghost"} className='border-r max-md:hidden flex items-center px-3 font-semibold h-10'>
                <Svgs.ResetSvg className='mr-3'/>
                <span className='text-red-500'>Reset filter</span>
            </Button>
        </div>
    </div>

  )
}
