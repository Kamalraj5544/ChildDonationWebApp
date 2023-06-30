import React from "react";

import cCardImage from "../../assets/medium-shot-happy-kids-posing 1.jpg";

const ChildCard = () => {
  return (
    <div className="card" style={{ width: "25rem" }}>
      <img src={cCardImage} className="card-img-top" alt="childImage" />
      <div className="card-body">
        <h5 className="card-title fw-bolder fs-3">Frank Stephan</h5>
        <p className="card-text "><strong>Age:</strong><span>15</span></p>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus accumsan
          tristique nibh orci pharetra elit felis. Imperdiet in ipsum massa
          aenean.
        </p>
      </div>
      <div className="card-body">
        <button className="btn btn-danger fs-5 fw-bolder">Donate Now</button>
        <button className="btn border text-primary ms-3">
        <i class="bi bi-share"></i>
        </button>
      </div>
    </div>
  );
};

export default ChildCard;
