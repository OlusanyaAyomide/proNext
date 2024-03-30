import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ScrollRestore from './components/layout/ScrollResrote'
import Dashboard from './pages/Dashboard'
import Forms from './pages/Forms'
import Users from './pages/Users'
import AddUser from './pages/AddUser'
import Auth from './components/authLayout/Auth'
import LogIn from './components/authLayout/LogIn'
import ResetPassword from './components/authLayout/ResetPassword'

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
        <Route path='/admin/auth/login' element={<LogIn/>}/>
        <Route path='/admin/auth/reset-password' element={<ResetPassword/>}/>
        <Route path='*' element={<div className='section-header h-screen grid place-content-center'>In Development</div>}/>
        {/* <Route path='/admin/auth' element={<Auth/>}/> */}
      </Routes>
  </BrowserRouter>
  )
}
