import { React, useState } from "react";

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
  return (
    <div className="childStudy-wrapper">
      <header>
        <MainNavbar />
      </header>

      <BackgroundSection
        image={children ? cStudyBg2 : cStudyBg1 }
        contentName="Child Study"
      />

      <section className="container my-5">
        <h2 className="fw-bolder fs-2 text-center text-danger my-5">
          {children ? "People who love changes" : "Loves Grows by Giving"}
        </h2>
      </section>

      <ul
        className="nav nav-pills mb-3 d-flex align-items-center justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <div className="d-flex flex-row bg-body-secondary rounded">
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
              onClick={() => setChildren(false)}
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
              onClick={() => setChildren(true)}
            >
              Love Who Donates
            </button>
          </li>
        </div>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <Needers />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <Donators />
        </div>
      </div>

      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default ChildStudyHome;
