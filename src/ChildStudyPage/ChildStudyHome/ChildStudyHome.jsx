import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./ChildStudyHome.css";

import cStudyBg1 from "../../assets/children-syria-earthquake-2023 1.jpg";
import cStudyBg2 from "../../assets/volunteers-holding-box-containing-donations-charity 1 (1).jpg";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import BackgroundSection from "../../components/BackroundSection/BackgroundSection";
import Footer from "../../components/Footer/Footer";
import Needers from "../Needers/Needers";
import Donators from "../Donators/Donators";

const ChildStudyHome = () => {
  const [children, setChildren] = useState(true);
  useEffect(() => {
    AOS.init();
    window.scroll(0, 0);
  }, []);
  return (
    <div className="childStudy-wrapper">
      <header>
        <MainNavbar />
      </header>

      <BackgroundSection
        image={children ? cStudyBg2 : cStudyBg1}
        contentName="Child Study"
      />

      <section
        className="container my-5"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1300"
      >
        <h2 className="fw-bolder fs-2 text-center text-danger my-5">
          {children ? "People who love changes" : "Loves Grows by Giving"}
        </h2>
      </section>

      <ul
        className="nav nav-pills mb-3 d-flex align-items-center justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <div
          className="d-flex flex-row bg-body-secondary rounded"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1300"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active text-black"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => setChildren(true)}
            >
              Love Who Need
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link text-black"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => setChildren(false)}
            >
              Love Who Donates
            </button>
          </li>
        </div>
      </ul>
      {/* <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <Needers children={children} />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <Donators children={children} />
        </div>
      </div> */}

      <section className="container-fluid">
        {children ? (
          <Needers children={children} />
        ) : (
          <Donators children={children} />
        )}
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default ChildStudyHome;
