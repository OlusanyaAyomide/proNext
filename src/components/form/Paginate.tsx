import React from 'react'
import { Button } from '../ui/button'
import { Svgs } from '../../util/svgs'
import { useFormFilter } from '../../store/useFormFilters'

export default function Paginate({totalPages}:{totalPages:number}) {
    const {page,increasePage,reducePage,jumpToPage} = useFormFilter()

  return (
    <div className="w-fit mt-4  flex-center mx-auto">
        <span className='mr-1'>previous</span>
        <Button disabled={page === 1} onClick={reducePage} className='h-6 w-6 disabled:border-gray-500  rounded-full' variant={"ghost"} size={"icon"}>
            <Svgs.ChevronSvg className='rotate-[90deg]  scale-[200%]'/> 
        </Button>
        <span className='mx-5'>{page}</span>
        <Button disabled={page === totalPages} onClick={increasePage} className='h-6 w-6 disabled:border-gray-500  rounded-full' variant={"ghost"} size={"icon"}>
            <Svgs.ChevronSvg className='rotate-[270deg]  scale-[200%]'/> 
        </Button>
              <span className='ml-1'>Next</span>
    </div>
  )
}
