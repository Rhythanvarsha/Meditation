import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './admin/Home'
import Register from './auth/Register'
import Login from './auth/login'

import './App.css'
import HomeHeader from './admin/HomeHeader'

import LandingPage from './pages/LandingPage'
import HomeUser from './user/HomeUser'
import Session from './user/Session'
import UserHistory from './user/UserHistory'
import UserProfile from './user/Profile'  
import Quote from './user/Quote'
import AllQuote from './user/AllQuote'
import RandomQuote from './user/RandomQuote'
import HomeManageUser from './admin/manageUser/HomeMangeUser'
import Add from './admin/manageUser/Add'
import UserUpdate from './admin/manageUser/UserUpdate'
import Delete from './admin/manageUser/Delete'
import HistoryAdmin from './admin/sessionAdmin/HistoryAdmin'
import QuoteAdmin from './admin/quote/QuoteAdmin'
import AdminProfile from './admin/manageUser/AdminProfile'
import SessionAdmin from './admin/sessionAdmin/SessionAdmin'
import AdminSessionHome from './admin/sessionAdmin/AdminSessionHome'
import AdminHeaderSession from './admin/sessionAdmin/AdminHeaderSession'
import AdminSessionDisplay from './admin/sessionAdmin/AdminSessionDisplay'
import AdminSessionAdd from './admin/sessionAdmin/AdminSessionAdd'
import Statistics from './admin/sessionAdmin/Statistics'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
     <Route path='/session' element={<Session />} />
     <Route path='/home' element={<Home />} />
      <Route path='/homeheader' element={<HomeHeader />} />
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/homeuser' element={<HomeUser />} />
<Route path='/history' element={<UserHistory />} />
      <Route path='/profile' element={<UserProfile />} />
      <Route path='/quote' element={<Quote />} />
      <Route path='/all-quotes' element={<AllQuote />} />
      <Route path='/random-quote' element={<RandomQuote />} />
     <Route path='/homeManageUser' element={<HomeManageUser />} />
    <Route path='/add' element={<Add />} />
    <Route path='/userUpdate' element={<UserUpdate />} />
    <Route path="/delete/:empId" element={<Delete />} />
<Route path='/returnHome' element={<Home />} />
<Route path='/historyAdmin' element={<HistoryAdmin />} />
<Route path='/quoteAdmin' element={<QuoteAdmin />} />
<Route path='/managerHeader' element={<manangerHeader />} />
   <Route path='/adminProfile' element={<AdminProfile />} />
    <Route path='/sessionAdmin' element={<SessionAdmin />} />
    <Route path='/adminSessionHome' element={<AdminSessionHome />} />
    <Route path='/adminSessionAdd' element={<AdminSessionAdd />} />
    <Route path='/adminSessionDisplay' element={<AdminSessionDisplay />} />
    <Route path='/adminSessionHome' element={<AdminSessionHome />} />
    <Route path='/adminHeaderSession' element={<AdminHeaderSession />} />
    <Route path='/statistic' element={<Statistics />}/>
    <Route path='/homeUser' element={<HomeUser />} />
    



    
    </Routes>
 
  
  </BrowserRouter>
  )
}

export default App
