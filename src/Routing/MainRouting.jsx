import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainHome from '../LandingPage/MainHome/MainHome'
import AdminPage from '../AdminPage/AdminPage'
import Login from '../Login/Login'
import AboutUsHome from '../AboutUsPage/AboutUsHome/AboutUsHome'
import ChildStudyHome from '../ChildStudyPage/ChildStudyHome/ChildStudyHome'

const MainRouting = () => {
  return (
    <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/aboutUs' element={<AboutUsHome />} />
        <Route path='/services' element={<ChildStudyHome /> } />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default MainRouting