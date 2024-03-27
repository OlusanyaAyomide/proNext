import React from 'react'
import Layout from '../components/layout/Layout'
import DashBoardHero from '../components/dashboard/DashBoardHero'
import DashboardGraph from '../components/dashboard/DashboardGraph'
import RecentForms from '../components/dashboard/RecentForms'

export default function Dashboard() {
  return (
    <Layout>
        <DashBoardHero/>
        <DashboardGraph/>
        <RecentForms/>
    </Layout>
  )
}
