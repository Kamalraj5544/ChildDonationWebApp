import React from "react";

import "./DonateArea.css";
import { Link } from "react-router-dom";

const DonateArea = () => {
  return (
    <div className="donateArea-container text-white ">
      <div className="bg-donateArea"></div>
      <section className="donateArea-text w-100 h-100 container d-flex flex-column justify-content-center align-items-center pb-5 text-center">
        <h3 className="fs-1 fw-bolder pt-4">
          Raise funds for a cause. Give Fundraisersis a free platform
        </h3>
        <p className="fw-normal py-4">
          Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus accumsan
          tristique nibh orci pharetra elit felis. Imperdiet in ipsum massa
          aenean. Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus
          accumsan tristique nibh orci pharetra elit felis. Imperdiet in ipsum
          massa aenean. Lorem ipsum dolor sit amet consectetur. Ullamcorper
          phasellus accumsan tristique nibh orci pharetra elit felis. Imperdiet
          in ipsum massa aenean.{" "}
        </p>
        <Link to="/donateInfo" className="btn btn-danger fs-5 fw-bolder">Donate Now</Link>
      </section>
    </div>
  );
};

export default DonateArea;
