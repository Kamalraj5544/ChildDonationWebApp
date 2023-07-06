import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import ChildCard from "../../components/ChildCard/ChildCard";

import backStroryChild from "../../assets/pexels-abhay-pratap-14108494 1.jpg";

const Needers = () => {
  useEffect(() => {
    AOS.init();
    window.scroll(0, 0);
  }, []);
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
        <div className="row row-cols-1 row-cols-sm-3 g-3">
          {childCardArray.map((ele) => (
            <div
              className="col"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              {ele}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2
          className="fw-bolder fs-2 text-center text-danger my-5"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          Our Back Story
        </h2>

        <div className="row m-0 p-0">
          <div
            className="col-md-6"
            data-aos="fade-down-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <img
              src={backStroryChild}
              alt="childImage"
              className="w-100 h-100"
            />
          </div>
          <div
            className="col-md-6 d-flex justify-content-center flex-column"
            data-aos="fade-up-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <h4 className="fw-bold my-5 text-center">Heart Broken Story</h4>
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
