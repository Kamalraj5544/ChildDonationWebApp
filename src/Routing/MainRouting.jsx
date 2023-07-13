import React from 'react'

import { Route, Routes } from 'react-router-dom'

import MainHome from '../LandingPage/MainHome/MainHome'
import AdminPage from '../AdminPage/AdminPage'
import Login from '../Login/Login'
import AboutUsHome from '../AboutUsPage/AboutUsHome/AboutUsHome'
import ChildStudyHome from '../ChildStudyPage/ChildStudyHome/ChildStudyHome'
import ContactUsHome from '../ContactUsPage/ContactUsHome/ContactUsHome'
import DonateChildHome from '../DonateChildPage/DonateChildHome/DonateChildHome'
import DonatorUpdate from '../AdminPage/DonatorUpdate/DonatorUpdate'



const MainRouting = () => {
  return (
    <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/aboutUs' element={<AboutUsHome />} />
        <Route path='/services' element={<ChildStudyHome /> } />
        <Route path='/contactUs' element={<ContactUsHome /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/donateInfo' element={<DonateChildHome />} />
        <Route path='/admin/:pageName' element={<AdminPage />} />
        <Route path='/admin/:pageName/:childId' element={<AdminPage />} />
        <Route path='/admin/donatorsListUpdate/:donatorId' element={<DonatorUpdate />} />
    </Routes>
  )
}

export default MainRouting