import React from "react";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container text-white">
      <div className="bg-footer"></div>

      <div className="container py-5">
        <div className="row row-cols-sm-5 row-cols-2 m-0 p-0">
          <div
            className="col pb-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="row pb-4 fw-bolder">Links</h2>
            <div className="mb-3">
              <Link to="/" className="row fw-bolder text-white">
                Home
              </Link>
            </div>
            <div>
              <Link to="/aboutUs" className="row fw-bolder text-white">
                About us
              </Link>
            </div>
          </div>
          <div
            className="col pb-4"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="row pb-4 fw-bolder">Services</h2>
            <div className="mb-3">
              <Link to="/services" className="row fw-bolder text-white">
                Child Study
              </Link>
            </div>
            <div className="mb-3">
              <Link to="/" className="row fw-bolder text-white">
                Child Health
              </Link>
            </div>
            <div>
              <Link to="/" className="row fw-bolder text-white">
                Free Legal
              </Link>
            </div>
          </div>
          <div
            className="col pb-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="pb-4 fw-bolder">Contact Us</h2>
            <p>+91 9866666383</p>
            <p>+91 9866666383</p>
          </div>
          <div
            className="col"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="pb-4 fw-bolder">Address</h2>
            <p>
              P. KRISHNANANDA RAO (VICE PRISIDENT) No. 17, Velmurugan Colony,
              Vadapalani , Chennai - 600 026
            </p>
          </div>
          <div
            className="col pb-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="pb-4 fw-bolder">Follow Us</h2>
            <div className="row">
              <span className="col">
                <Link
                  className="bi bi-facebook"
                  style={{ fontSize: "2rem", color: "#3b5998 " }}
                ></Link>
              </span>
              <span className="col">
                <Link
                  className="bi bi-instagram"
                  style={{ fontSize: "2rem", color: "red" }}
                ></Link>
              </span>
              <span className="col">
                <Link
                  className="bi bi-twitter"
                  style={{ fontSize: "2rem", color: "#00acee " }}
                ></Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
