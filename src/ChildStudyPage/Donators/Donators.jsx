import React from "react";

import DonatorCard from "../../components/DonatorCard/DonatorCard";

import backStoryImage2 from "../../assets/pexels-rdne-stock-project-6647119 1.jpg";

const Donators = () => {
  const donatorsListArray = [
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
  ];
  return (
    <div className="mt-5">
      <section className="container">
        <div className="row row-col-2 row-col-md-3 g-2 mb-5">
          {donatorsListArray.map((ele) => (
            <div className="col">{ele}</div>
          ))}
        </div>
        <div className="row row-col-2 row-col-md-3 g-2">
          {donatorsListArray.map((ele) => (
            <div className="col">{ele}</div>
          ))}
        </div>
      </section>

      <br />
      <br />

      <section>
        <h1 className="fw-bolder fs-1 text-center text-danger my-5">
          Our Recent Story
        </h1>

        <div className="row">
          <div className="col-6 d-flex justify-content-center flex-column">
            <h4 className="fw-bold my-5">Heart Broken Story</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus
              accumsan tristique nibh orci pharetra elit felis. Imperdiet in
              ipsum massa aenean. Lorem ipsum dolor sit amet consectetur.
              Ullamcorper phasellus accumsan tristique Lorem ipsum dolor sit
              amet consectetur. Ullamcorper phasellus accumsan tristique nibh
              orci pharetra elit felis. Imperdiet in ipsum massa aenean. Lorem
              ipsum dolor sit amet consectetur. Ullamcorper phasellus accumsan
              tristique Lorem ipsum dolor sit amet consectetur. Ullamcorper
              phasellus accumsan tristique nibh orci pharetra elit felis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus
              accumsan tristique nibh orci pharetra elit felis. Imperdiet in
              ipsum massa aenean. Lorem ipsum dolor sit amet consectetur.
              Ullamcorper phasellus accumsan tristique Lorem ipsum dolor sit
              amet consectetur.
            </p>
          </div>
          <div className="col-6">
            <img
              src={backStoryImage2}
              alt="childImage"
              className="w-100 h-100 "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donators;
