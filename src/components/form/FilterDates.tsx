import React ,{useState} from 'react'
import { Calendar } from '../ui/calendar'
import { useFormFilter } from '../../store/useFormFilters'

export default function FilterDates() {
    const {date,setDate} = useFormFilter()
    
    return (
    <div className='p-2'>
        <Calendar
        mode="single"
        selected={date?new Date(date) : new Date()}
        onSelect={(selectedDay)=>{
          if(selectedDay){
            setDate(selectedDay?.toISOString())
          }
        }}
        className="rounded-md"
      />
    </div>

  )
}
