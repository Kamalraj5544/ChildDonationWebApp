import React from "react";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import DonatorCard from "../../components/DonatorCard/DonatorCard";

const DonatorSlider = () => {
  const donatorsArray = [<DonatorCard />, <DonatorCard />, <DonatorCard />];
  return (
    <div className="row mx-3">
      <div className="col-md-4">
        <section>
          <h3 className="fs-2 fw-bolder text-danger mb-4">Our Donators</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </section>
      </div>
      <div className="col-md-8 d-flex flex-row">
        <span className="fs-2 text-danger p-2  d-flex justify-content-center align-items-center">
          <BsFillArrowLeftSquareFill />
        </span>
        <div className="row g-2">
        {donatorsArray.map((element) => (
          <div className="col">{element}</div>
        ))}
        </div>
        <span className="fs-2 text-danger p-2  d-flex justify-content-center align-items-center">
          <BsFillArrowRightSquareFill />
        </span>
      </div>
    </div>
  );
};

export default DonatorSlider;
