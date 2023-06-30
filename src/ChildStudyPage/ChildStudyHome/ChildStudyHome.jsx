import React from "react";

import cStudyBg from "../../assets/children-syria-earthquake-2023 1.jpg";

import backStroryChild from "../../assets/pexels-abhay-pratap-14108494 1.jpg";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import BackgroundSection from "../../components/BackroundSection/BackgroundSection";
import ChildCard from "../../components/ChildCard/ChildCard";
import Footer from "../../components/Footer/Footer";

const ChildStudyHome = () => {
  const childCardArray = [
    <ChildCard />,
    <ChildCard />,
    <ChildCard />,
    <ChildCard />,
    <ChildCard />,
    <ChildCard />,
  ];
  return (
    <div className="childStudy-wrapper">
      <header>
        <MainNavbar />
      </header>

      <BackgroundSection image={cStudyBg} contentName="Child Study" />

      <section className="container my-5">
        <h2 className="fw-bolder fs-2 text-center text-danger my-5">
          Loves Grows by Giving
        </h2>

        <div className="row row-cols-3  g-5 container">
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

      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default ChildStudyHome;
