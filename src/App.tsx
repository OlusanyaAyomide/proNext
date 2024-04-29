import React from 'react';
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ScrollRestore from './components/layout/ScrollResrote'
import Dashboard from './pages/Dashboard'
import Forms from './pages/Forms'
import Users from './pages/Users'
import AddUser from './pages/AddUser'
import LogIn from './components/authLayout/LogIn'
import ResetPassword from './components/authLayout/ResetPassword'
import ServiceList from './components/servcies/ServiceList'
import NewService from './pages/NewService'
import ServiceDetail from './pages/ServiceDetail'
import QueryProvider from './components/authLayout/QueryProvider'
import NewPassword from './components/authLayout/Newpassword'
import USerInfo from './pages/USerInfo'
import EditProfile from './pages/EditProfile'

export default function App() {

  return (
    <BrowserRouter>
      <ScrollRestore/>
      <QueryProvider>
      <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path='/admin/forms' element={<Forms/>}/>
          <Route path='/admin/users' element={<Users/>}/>
          <Route path='/admin/users/add' element={<AddUser/>}/>
          <Route path='/admin/users/:id' element={<USerInfo/>}/>
          <Route path='/admin/users/edit/:id' element={<EditProfile/>}/>
          <Route path='/admin/auth/login' element={<LogIn/>}/>
          <Route path='/admin/auth/reset-password' element={<ResetPassword/>}/>
          <Route path='/admin/auth/new-password' element={<NewPassword/>}/>
          <Route path='/admin/services' element={<ServiceList/>}/>
          <Route path='/admin/services/add' element={<NewService/>}/>
          <Route path='/admin/services/:id' element={<ServiceDetail/>}/>
          <Route path='*' element={<div className='section-header h-screen grid place-content-center'>In Development</div>}/>
      </Routes>
      </QueryProvider>
  </BrowserRouter>
  )
}
