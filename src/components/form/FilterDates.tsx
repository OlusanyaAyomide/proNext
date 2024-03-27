import React ,{useState} from 'react'
import { Calendar } from '../ui/calendar'

export default function FilterDates() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    
    return (
    <div className='p-2'>
        <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md"
      />
    </div>

  )
}
