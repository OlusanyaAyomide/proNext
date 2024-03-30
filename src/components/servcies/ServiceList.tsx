import React from 'react'
import Layout from '../layout/Layout'
import { Button } from '../ui/button'

export default function ServiceList() {
  return (
    <Layout>
        <div className="px-2 mb-1 flex-center justify-between">
            <h3 className="section-header">Services</h3>
            <Button className='px-5'>Add Servcice</Button>
        </div>
    </Layout>
  )
}
