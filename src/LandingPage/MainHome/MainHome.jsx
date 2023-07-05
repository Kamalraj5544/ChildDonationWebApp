import React from "react";

import "./MainHome.css";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import PartnerLogos from "../../components/PartnerLogos/PartnerLogos";
import Description from "../Description/Description";
import DonatorSlider from "../DonatorSlider/DonatorSlider";
import DonateArea from "../DonateArea/DonateArea";
import Footer from "../../components/Footer/Footer";

import groupPhoto from "../../assets/group-children-lying-reading-grass-field 1.jpg";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <>
      <MainNavbar />
      <div className="bg-home"></div>
      <section className="home-container">
        <div className="row p-0 m-0">
          <div className="col-md-8">
            <section className=" w-100 h-100 d-flex justify-content-center align-items-center">
              <div className="home-text">
                <h3 className="display-3 fw-bolder">
                  Give Food And Medical Care To Abandoned Elderly Parents
                </h3>
                <p className="fs-5 fw-normal pb-4 m-0 p-0">
                  Help Carmel Save Her From Malnutrition And Illness
                </p>
                <Link
                  to="/donateInfo"
                  className="btn btn-danger text-white fs-5 fw-bold mb-4"
                >
                  Donate Now
                </Link>
              </div>
            </section>
          </div>
          <div className="col-md-4 maskImage p-0 d-flex justify-content-center align-items-center">
            <img src={groupPhoto} alt="childPhoto" className="w-100 h-100" />
          </div>
        </div>
      </section>

      <section className="partner-box-container mb-5 pb-5">
        <div className="partner-box row m-0 p-0 ms-4 ">
          <section className="col-md-4">
            <div className="card bg-partner-box mb-3 p-3">
              <div className="card-header fs-2 fw-bold">Partners</div>
              <div className="card-body">
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
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
            <div className="row w-100 h-50 m-0 p-0"></div>
            <div className="row">
              <PartnerLogos />
            </div>
          </section>
        </div>
      </section>

      <section className="des-wrapper">
        <Description />
      </section>

      <section className="my-5 px-3">
        <DonatorSlider />
      </section>

      <section>
        <DonateArea />
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </>
  );
};

export default MainHome;
