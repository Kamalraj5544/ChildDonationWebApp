import React from "react";

import "./MainHome.css";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import PartnerLogos from "../../components/PartnerLogos/PartnerLogos";
import Description from "../Description/Description";
import DonatorSlider from "../DonatorSlider/DonatorSlider";
import DonateArea from "../DonateArea/DonateArea";

const MainHome = () => {
  return (
    <div className="home-wrapper">
      <header>
        <MainNavbar />
      </header>
      <div className="bg-home"></div>
      <section className="home-container ps-3 d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="col-8 d-flex flex-column justify-content-center align-items-center">
            <section>
              <p className="fw-bold display-5">
                Give Food And Medical Care To Abandoned Elderly Parents
              </p>
              <p className="fs-5 fw-normal pb-4">
                Help Carmel Save Her From Malnutrition And Illness
              </p>
              <button className="btn bg-red text-white fs-5 fw-bold">
                Donate Now
              </button>
            </section>
          </div>
          <div className="col-4"></div>
        </div>
      </section>

      <div className="partner-box row p-5">
        <div className="col-4">
          <div className="card text-bg-dark mb-3 p-3">
            <div className="card-header fs-2 fw-bold">Partners</div>
            <div className="card-body">
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <a
                href="/"
                className="card-link fw-bold text-danger border-bottom border-4 border-danger pb-1"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row w-100 h-50"></div>
          <div className="row">
            <PartnerLogos />
          </div>
        </div>
      </div>
      <section className="des-wrapper">
        <Description />
      </section>

      <section className="my-5 px-3">
        <DonatorSlider />
      </section>

      <section className="my-5">
        <DonateArea />
      </section>
    </div>
  );
};

export default MainHome;
