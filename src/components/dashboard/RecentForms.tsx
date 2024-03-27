import React from 'react'
import FormList from './FormList'
import { _mockRecent } from '../../util/constants'
import { Button } from '../ui/button'
export default function RecentForms() {
  return (
    <div className='card mt-6'>
        <h1 className="section-header mb-7">Recent Forms</h1>
        <FormList form={_mockRecent}/>
        <Button className='mt-6 block mx-auto px-8'>View All</Button>
    </div>
  )
}
