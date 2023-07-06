import React from "react";

import "./BackgroundSection.css";

const BackgroundSection = ({ image, contentName }) => {
  return (
    <div className="bg-container">
      <div
        className="bg-content"
        data-aos="fade-down-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1300"
      >
        <img src={image} className="w-100 h-100" alt="contentImage" />
      </div>
      <div
        className="content fw-bolder container d-flex align-items-center"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1300"
      >
        {contentName}
      </div>
    </div>
  );
};

export default BackgroundSection;
