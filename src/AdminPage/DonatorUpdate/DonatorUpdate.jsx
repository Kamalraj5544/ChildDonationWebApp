import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavBar from '../../components/NavBar/NavBar'
import AddChild from '../../pages/ChildrenList/AddChild/AddChild'
import { useParams } from 'react-router-dom'
import AddDonator from '../../pages/DonatorsList/AddDonator/AddDonator'

const DonatorUpdate = () => {
    const {donatorId} = useParams();
  return (
    <div>
        <div className='d-flex'>
        <Sidebar />
        <div className='col'>
            <NavBar />
            <AddDonator  add={false} donatorId={donatorId}/>
        </div>
        </div>
    </div>
  )
}

export default DonatorUpdate