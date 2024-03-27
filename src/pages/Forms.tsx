import React from 'react'
import Layout from '../components/layout/Layout'
import FormFilter from '../components/form/FormFilter'
import AllForms from '../components/form/AllForms'

export default function Forms() {
  return (
    <Layout>
        <FormFilter/>
        <AllForms/>
    </Layout>
  )
}
