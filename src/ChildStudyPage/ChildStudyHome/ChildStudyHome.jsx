import React from 'react'

import cStudyBg from "../../assets/children-syria-earthquake-2023 1.jpg"

import MainNavbar from '../../components/MainNavbar/MainNavbar'
import BackgroundSection from '../../components/BackroundSection/BackgroundSection'
import ChildCard from '../../components/ChildCard/ChildCard'

const ChildStudyHome = () => {
  return (
    <div className='childStudy-wrapper'>
    <header>
        <MainNavbar />
    </header>

    <BackgroundSection image={cStudyBg} contentName="Child Study" />

    <section className='container'>
    <h2 className='fw-bolder fs-2 text-center text-danger my-5'>Loves Grows by Giving</h2>

    <ChildCard />
    </section>
    </div>
  )
}

export default ChildStudyHome