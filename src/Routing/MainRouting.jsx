import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainHome from '../LandingPage/MainHome/MainHome'
import AdminPage from '../AdminPage/AdminPage'
import Login from '../Login/Login'
import AboutUsHome from '../AboutUsPage/AboutUsHome/AboutUsHome'
import ChildStudyHome from '../ChildStudyPage/ChildStudyHome/ChildStudyHome'
import ContactUsHome from '../ContactUsPage/ContactUsHome/ContactUsHome'
import DonateChildHome from '../DonateChildPage/DonateChildHome/DonateChildHome'
import OurDonatorsHome from '../OurDonatorsPage/OurDonatorsHome/OurDonatorsHome'


const MainRouting = () => {
  return (
    <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/admin/:id' element={<AdminPage />} />
        <Route path='/aboutUs' element={<AboutUsHome />} />
        <Route path='/services' element={<ChildStudyHome /> } />
        <Route path='/contactUs' element={<ContactUsHome /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/donateInfo' element={<DonateChildHome />} />
        <Route path='/ourDonators' element={<OurDonatorsHome />} />
    </Routes>
  )
}

export default MainRouting