import React from "react";

import cCardImage from "../../assets/medium-shot-happy-kids-posing 1.jpg";

const ChildCard = () => {
  return (
    <div className="card border-0 bg-body-secondary">
      <img src={cCardImage} className="card-img-top" alt="childImage" />
      <div className="card-body">
        <h5 className="card-title fw-bolder fs-3">Frank Stephan</h5>
        <p className="card-text ">
          <strong>Age:</strong>
          <span>15</span>
        </p>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur.Ullamcorper phasellus accumsan
          tristique nibh orci pharetra elit felis.
        </p>
      </div>
      <div className="card-body">
        <button className="btn btn-danger fw-bolder">Donate Now</button>
        <button className="btn border text-primary ms-3 bg-white">
          <i class="bi bi-share"></i>
        </button>
      </div>
    </div>
  );
};

export default ChildCard;
