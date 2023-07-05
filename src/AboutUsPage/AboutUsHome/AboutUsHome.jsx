import React from "react";

import "./AboutUsHome.css";

import aboutBg from "../../assets/voluteer-group-people-charity-donation-park 1.jpg";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Footer from "../../components/Footer/Footer";
import BackgroundSection from "../../components/BackroundSection/BackgroundSection";

const AboutUsHome = () => {
  return (
    <div className="about-wrapper">
      <header>
        <MainNavbar />
      </header>

      <BackgroundSection image={aboutBg} contentName="About Us" />

      <section className="row container-fluid my-5">
        <div className="col-md-6 px-5">
          <div className="volunteer-image d-flex justify-content-center align-items-center w-100">
            <div className="bg-black-rotated"></div>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-danger display-5 fw-bolder mb-5">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus
            accumsan tristique nibh orci pharetra elit felis. Imperdiet in ipsum
            massa aenean. Lorem ipsum dolor sit amet consectetur. Ullamcorper
            phasellus accumsan tristique Lorem ipsum dolor sit amet consectetur.
            Ullamcorper phasellus accumsan tristique nibh orci pharetra elit
            felis. Imperdiet in ipsum massa aenean. Lorem ipsum dolor sit amet
            consectetur. Ullamcorper phasellus accumsan tristique Lorem ipsum
            dolor sit amet consectetur. Ullamcorper phasellus accumsan tristique
            nibh orci pharetra elit felis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus
            accumsan tristique nibh orci pharetra elit felis. Imperdiet in ipsum
            massa aenean. Lorem ipsum dolor sit amet consectetur.{" "}
          </p>
        </div>
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default AboutUsHome;
