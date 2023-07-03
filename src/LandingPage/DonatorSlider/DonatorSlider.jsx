import React from "react";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import DonatorCard from "../../components/DonatorCard/DonatorCard";

const DonatorSlider = () => {
  const donatorsArray = [<DonatorCard />, <DonatorCard />, <DonatorCard />];
  return (
    <div className="row mx-5 container-fluid">
      <div className="col-4">
        <section>
          <h3 className="fs-2 fw-bolder text-danger mb-4">Our Donators</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>

          <div className="text-end">
            <span className="fs-2 text-danger p-2">
              <BsFillArrowLeftSquareFill />
            </span>
            <span className="fs-2 text-danger p-2">
              <BsFillArrowRightSquareFill />
            </span>
          </div>
        </section>
      </div>
      <div className="col-8">
        <div className="d-flex flex-row ">
        {donatorsArray.map((element) => element)}
        </div>
      </div>
    </div>
  );
};

export default DonatorSlider;
