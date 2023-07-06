import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import DonatorCard from "../../components/DonatorCard/DonatorCard";

import backStoryImage2 from "../../assets/pexels-rdne-stock-project-6647119 1.jpg";

const Donators = () => {
  useEffect(() => {
    AOS.init();
    window.scroll(0, 0);
  }, []);
  const donatorsListArray = [
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
  ];
  return (
    <div className="mt-5">
      <section className="container">
        <div className="row row-cols-2 row-cols-md-5 g-4">
          {donatorsListArray.map((ele) => (
            <div
              className="col"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1300"
            >
              {ele}
            </div>
          ))}
        </div>
      </section>

      <br />

      <section>
        <h1
          className="fw-bolder fs-1 text-center text-danger my-5"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1300"
        >
          Our Recent Story
        </h1>

        <div className="row m-0 p-0">
          <div
            className="col-md-6 d-flex justify-content-center flex-column"
            data-aos="fade-down-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <h4 className="fw-bold mb-3">Heart Broken Story</h4>
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
          <div
            className="col-md-6"
            data-aos="fade-up-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
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
