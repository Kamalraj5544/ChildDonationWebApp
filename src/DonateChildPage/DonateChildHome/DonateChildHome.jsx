import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./DonateChildHome.css";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import BackroundSection from "../../components/BackroundSection/BackgroundSection";
import ChildCard from "../../components/ChildCard/ChildCard";
import DonateFormSection from "../DonateFormSection/DonateFormSection";
import Footer from "../../components/Footer/Footer";

import cStudyBg2 from "../../assets/boy-lay-flat-laying-his-hands-belly-forehead-dry-soil 1.jpg";
import cCardImage from "../../assets/medium-shot-happy-kids-posing 1.jpg";
const DonateChildHome = () => {
  useEffect(() => {
    AOS.init();
    window.scroll(0, 0);
  }, []);
  return (
    <div className="donateChild-wrapper">
      <MainNavbar />
      <BackroundSection image={cStudyBg2} contentName="Child Study" />

      <section className="container pb-5">
        <div className="row">
          <div className="col-md-8" data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1300">
            <DonateFormSection />
          </div>
          <div className="col-md-4" data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1300">
            <div className="card border-0 bg-body-secondary">
              <img src={cCardImage} className="card-img-top" alt="childImage" />
              <div className="card-body">
                <h5 className="card-title fw-bolder fs-3">Frank Stephan</h5>
                <p className="card-text ">
                  <strong>Age:</strong>
                  <span>15</span>
                </p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur.Ullamcorper phasellus
                  accumsan tristique nibh orci pharetra elit felis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-5">
        <h1 className="fw-bolder text-danger text-center mb-5">
          Related Cases
        </h1>

        <div className="row m-0 p-0 g-3">
          <div
            className="col"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <ChildCard />
          </div>
          <div
            className="col"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <ChildCard />
          </div>
          <div
            className="col"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <ChildCard />
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-center justify-content-center mt-4"
          data-aos="zoom-out"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1300"
        >
          <button className="btn btn-danger me-3">
            <i class="bi bi-arrow-left-square-fill fw-bolder fs-1"></i>
          </button>
          <button className="btn btn-danger">
            <i class="bi bi-arrow-right-square-fill fw-bolder fs-1"></i>
          </button>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default DonateChildHome;
