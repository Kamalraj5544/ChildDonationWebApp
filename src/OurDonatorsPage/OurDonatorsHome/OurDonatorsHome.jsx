import React from "react";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import BackgroundSection from "../../components/BackroundSection/BackgroundSection";
import Footer from "../../components/Footer/Footer";
import DonatorCard from "../../components/DonatorCard/DonatorCard";

import cStudyBg3 from "../../assets/volunteers-holding-box-containing-donations-charity 1 (1).jpg";
import backStoryImage2 from "../../assets/pexels-rdne-stock-project-6647119 1.jpg";

const OurDonatorsHome = () => {
  const donatorsListArray = [
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
    <DonatorCard />,
  ];
  return (
    <div>
      <header>
        <MainNavbar />
      </header>

      <BackgroundSection image={cStudyBg3} contentName="Child Study" />

      <br />
      <br />

      <section className="container">
        <h2 className="fw-bolder fs-2 text-center text-danger my-5">
          People who love changes
        </h2>

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

      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default OurDonatorsHome;
