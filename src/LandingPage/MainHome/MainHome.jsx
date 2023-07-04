import React from "react";

import "./MainHome.css";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import PartnerLogos from "../../components/PartnerLogos/PartnerLogos";
import Description from "../Description/Description";
import DonatorSlider from "../DonatorSlider/DonatorSlider";
import DonateArea from "../DonateArea/DonateArea";
import Footer from "../../components/Footer/Footer";

import groupPhoto from "../../assets/group-children-lying-reading-grass-field 1.jpg";

const MainHome = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <div className="bg-home"></div>
      <section className="home-container">
        <div className="row p-0 m-0">
          <div className="col-sm-8">
            <section className="home-text w-100 h-100 d-flex flex-column align-items-center justify-content-center ">
              <div>
              <p className="fw-bolder display-3">
                Give Food And Medical Care To Abandoned Elderly Parents
              </p>
              <p className="fs-5 fw-normal pb-4">
                Help Carmel Save Her From Malnutrition And Illness
              </p>
              <button className="btn btn-danger text-white fs-5 fw-bold">
                Donate Now
              </button>
              </div>
            </section>
          </div>
          <div className="col-sm-4 maskImage p-0">
            <img src={groupPhoto} alt="childPhoto" className="w-100" />
          </div>
        </div>
      </section>

      <div className="partner-box row m-0">
        <section className="col-md-4">
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
        </section>
        <section className="col-md-8">
          <div className="row w-100 h-50"></div>
          <div className="row">
            <PartnerLogos />
          </div>
        </section>
      </div>

      <section className="des-wrapper">
        <Description />
      </section>

      <section className="my-5 px-3">
        <DonatorSlider />
      </section>

      <section className="">
        <DonateArea />
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </>
  );
};

export default MainHome;
