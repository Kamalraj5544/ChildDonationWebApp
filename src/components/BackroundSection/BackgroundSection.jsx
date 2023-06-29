import React from 'react'

import "./BackgroundSection.css"

const BackgroundSection = ({image,contentName}) => {
  return (
    <div className='bg-container d-flex align-items-center'>\
    <div className="bg-content">
        <img src={image} className="w-100 h-100" alt='contentImage' />
    </div>
        <div className="content fw-bolder container">{contentName}</div>
    </div>
  )
}

export default BackgroundSection