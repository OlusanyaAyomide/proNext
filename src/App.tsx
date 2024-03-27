import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ScrollRestore from './components/layout/ScrollResrote'
import Dashboard from './pages/Dashboard'
import Forms from './pages/Forms'
import Users from './pages/Users'
import AddUser from './pages/AddUser'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestore/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/forms' element={<Forms/>}/>
        <Route path='/admin/users' element={<Users/>}/>
        <Route path='/admin/users/add' element={<AddUser/>}/>
      </Routes>
  </BrowserRouter>
  )
}
