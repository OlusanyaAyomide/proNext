import React from 'react'
import FormList from '../dashboard/FormList'
import { _allForms } from '../../util/constants'

export default function AllForms() {
    
  return (
    <div className='mt-5 pb-8 card'>
        <FormList form={_allForms}/>
    </div>
  )
}
