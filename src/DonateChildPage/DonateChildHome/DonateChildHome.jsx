import React from "react";

import MainNavbar from "../../components/MainNavbar/MainNavbar";

import BackroundSection from "../../components/BackroundSection/BackgroundSection";

import cStudyBg2 from "../../assets/boy-lay-flat-laying-his-hands-belly-forehead-dry-soil 1.jpg";
import cCardImage from "../../assets/medium-shot-happy-kids-posing 1.jpg";

import DonateFormSection from "../DonateFormSection/DonateFormSection";
import Footer from "../../components/Footer/Footer";
import ChildCard from "../../components/ChildCard/ChildCard";

const DonateChildHome = () => {
  return (
    <div>
      <header>
        <MainNavbar />
      </header>

      <BackroundSection image={cStudyBg2} contentName="Child Study" />

      <br />
      <br />

      <section className="container my-5">
        <div className="row">
          <div className="col-8">
            <DonateFormSection />
          </div>
          <div className="col-4">
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

      <section className="container py-5">
        <h1 className="fw-bolder text-danger text-center mb-5">Related Cases</h1>
        <div className="d-flex flex-row align-items-center">
          <span className="fs-1 text-danger p-2">
            <i class="bi bi-arrow-left-square-fill fw-bolder"></i>
          </span>
          <div className="row px-5">
            <div className="col">
              <ChildCard />
            </div>
            <div className="col">
              <ChildCard />
            </div>
            <div className="col">
              <ChildCard />
            </div>
          </div>
          <span className="fs-1 text-danger p-2">
            <i class="bi bi-arrow-right-square-fill fw-bolder"></i>
          </span>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default DonateChildHome;
