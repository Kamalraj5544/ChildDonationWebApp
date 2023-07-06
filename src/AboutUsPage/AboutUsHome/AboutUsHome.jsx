import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./AboutUsHome.css";

import aboutBg from "../../assets/voluteer-group-people-charity-donation-park 1.jpg";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Footer from "../../components/Footer/Footer";
import BackgroundSection from "../../components/BackroundSection/BackgroundSection";

const AboutUsHome = () => {
  useEffect(() => {
    AOS.init();
    window.scroll(0, 0);
  }, []);
  return (
    <div className="about-wrapper">
      <header>
        <MainNavbar />
      </header>

      <BackgroundSection image={aboutBg} contentName="About Us" />

      <section className="row container-fluid my-5">
        <div
          className="col-md-4 px-5"
          data-aos="fade-down-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1300"
        >
          <div className="volunteer-image d-flex justify-content-center align-items-center w-100">
            <div className="bg-black-rotated"></div>
          </div>
        </div>
        <div
          className="col-md-6"
          data-aos="fade-up-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1300"
        >
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
