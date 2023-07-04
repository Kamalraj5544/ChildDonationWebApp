import React from "react";

import "./ContactUSHome.css"

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import BackgroundSection from "../../components/BackroundSection/BackgroundSection";
import Footer from "../../components/Footer/Footer";

import contactUsBg from "../../assets/people-stacking-hands-together-park 1.jpg";

const ContactUsHome = () => {
  return (
    <div className="contactUs-wrapper">
      <header>
        <MainNavbar />
      </header>

      <BackgroundSection image={contactUsBg} contentName="Contact Us" />

      <section className="container">
        <div className="row m-0 p-0">
          <div className="col-md-6 mb-5">
            <h2 className="text-danger fs-4 fw-bolder mb-4">
              Get in Touch With us
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus
              accumsan tristique nibh orci pharetra elit felis. Imperdiet in
              ipsum massa aenean. Lorem ipsum dolor sit amet consectetur.
              Ullamcorper phasellus accumsan tristique Lorem ipsum dolor sit
              amet consectetur.
            </p>

            <div className="row m-0 p-0">
              <div className="col">
                <div className="d-flex flex-row">
                  <span className="me-3 mb-3">
                    <i class="bi bi-telephone-fill text-white bg-red p-2 rounded-circle"></i>
                  </span>
                  <span>
                    <p>+91 9876543210</p>
                    <p>+91 9876543210</p>
                  </span>
                </div>
                <span></span>
              </div>

              <div className="col">
                <div className="d-flex flex-row">
                  <span className="me-3 mb-3">
                    <i class="bi bi-geo-alt-fill text-white bg-red p-2 rounded-circle"></i>
                  </span>
                  <span>
                    <p>
                      P.KRISHNANANDA RAO(VICE PRISIDENT) No.17,Velmurugan
                      Colony,Vadapalani,Chennai-600026
                    </p>
                  </span>
                </div>
              </div>

              <div className="col ">
                <div className="d-flex flex-row">
                  <span className="me-3 mb-3">
                    <i class="bi bi-envelope-at-fill text-white bg-red p-2 rounded-circle"></i>
                  </span>
                  <span>
                    <div>Qwerty@gmail.com</div>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex container flex-column">
              <h4 className="fw-bold">Contact Us</h4>
              <div className="py-3 row1">
                <div className="row">
                  <div className="col">
                    <label for="Name" className="fw-bold pb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      aria-label="name"
                      id="Name"
                    />
                  </div>
                  <div className="col">
                    <label for="e-mail" className="fw-bold pb-2">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Email"
                      aria-label="Email"
                      id="Email"
                    />
                  </div>
                </div>
              </div>

              <div className="pb-4 row2">
                <div className="row">
                  <div className="col">
                    <label for="age" className="fw-bold pb-2">
                      Age
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                      aria-label="m-number"
                      id="m-number"
                    />
                  </div>
                  <div className="col">
                    <label for="category" className="fw-bold pb-2">
                      Subject
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="subject"
                    >
                      <option selected>Select </option>
                      <option value="1">Child Study</option>
                      <option value="2">Child Health</option>
                      <option value="3">Free Legal</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row3 pb-3">
                <label for="description" className="fw-bold pb-2 d-block">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="4"
                  placeholder="Type"
                ></textarea>
              </div>

              <div className="row5">
                <button className="btn btn-danger w-100" type="button">
                  Send Us A Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default ContactUsHome;
