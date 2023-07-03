import React from "react";

import "./DonateArea.css";

const DonateArea = () => {
  return (
    <div className="donateArea-conatiner text-white ">
      <div className="bg-donateArea"></div>
      <section className="donateArea-text text-center container">
        <h3 className="fs-1 fw-bold pt-5 ">
          Raise funds for a cause. Give Fundraisersis a free platform
        </h3>
        <p className="fw-normal pt-3">
          Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus accumsan
          tristique nibh orci pharetra elit felis. Imperdiet in ipsum massa
          aenean. Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus
          accumsan tristique nibh orci pharetra elit felis. Imperdiet in ipsum
          massa aenean. Lorem ipsum dolor sit amet consectetur. Ullamcorper
          phasellus accumsan tristique nibh orci pharetra elit felis. Imperdiet
          in ipsum massa aenean.{" "}
        </p>
        <button className="btn btn-danger fs-5 fw-bolder">Donate Now</button>
      </section>
    </div>
  );
};

export default DonateArea;
