import React from "react";

import ChildCard from "../../components/ChildCard/ChildCard";

import backStroryChild from "../../assets/pexels-abhay-pratap-14108494 1.jpg";

const Needers = () => {
  const childCardArray = [
    <ChildCard />,
    <ChildCard />,
    <ChildCard />,
    <ChildCard />,
    <ChildCard />,
    <ChildCard />,
  ];
  return (
    <>
      <section className="container mt-5">
        <div className="row row-cols-3 g-5">
          {childCardArray.map((ele) => (
            <div className="col">{ele}</div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="fw-bolder fs-2 text-center text-danger my-5">
          Our Back Story
        </h2>

        <div className="row">
          <div className="col-6">
            <img
              src={backStroryChild}
              alt="childImage"
              className="w-100 h-100 "
            />
          </div>
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
        </div>
      </section>
    </>
  );
};

export default Needers;
