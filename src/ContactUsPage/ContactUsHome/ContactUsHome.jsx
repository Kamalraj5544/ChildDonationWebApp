import React, { useState, useEffect } from "react";

import "./ContactUSHome.css";

import AOS from "aos";
import "aos/dist/aos.css";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import BackgroundSection from "../../components/BackroundSection/BackgroundSection";
import Footer from "../../components/Footer/Footer";

import contactUsBg from "../../assets/people-stacking-hands-together-park 1.jpg";

import { apiBaseUrl } from "../../BaseUrl.js";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsHome = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    number: "",
    emailId: "",
    subject: "",
    description: "",
  });
  // const [status, setStatus] = useState(false);
  const handlePostContactData = () => {
    axios
      .post(`${apiBaseUrl}/neethimaan/createContactUs`, contactInfo)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        res.status === 200
          ? toast.success("Success Notification !", {
              position: toast.POSITION.TOP_RIGHT,
            })
          : toast.error("Error Notification !", {
              position: toast.POSITION.TOP_RIGHT,
            });
      })
      .catch((err) => console.error(err));

    setContactInfo({
      name: "",
      number: "",
      emailId: "",
      subject: "",
      description: "",
    });
  };

  useEffect(() => {
    AOS.init();
    window.scroll(0, 0);
  }, []);

  return (
    <div className="contactUs-wrapper">
      <header>
        <MainNavbar />
      </header>

      <BackgroundSection image={contactUsBg} contentName="Contact Us" />

      <section className="container">
        <ToastContainer />
        <div className="row m-0 p-0">
          <div
            className="col-md-6 mb-5"
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
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

          <div
            className="col-md-6"
            data-aos="zoom-in-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <form
              className="d-flex container flex-column"
              onSubmit={(e) => {
                e.preventDefault();
                handlePostContactData();
              }}
            >
              <h4 className="fw-bold">Contact Us</h4>
              <div className="py-3 row1">
                <div className="row">
                  <div className="col">
                    <label for="name" className="fw-bold pb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      aria-label="name"
                      id="name"
                      value={contactInfo.name}
                      pattern="/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/"
                      required
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="col">
                    <label for="e-mail" className="fw-bold pb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your Email"
                      aria-label="Email"
                      id="Email"
                      value={contactInfo.emailId.toLocaleLowerCase()}
                      required
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          emailId: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="pb-4 row2">
                <div className="row">
                  <div className="col">
                    <label for="m-number" className="fw-bold pb-2">
                      Mobile Number(only 10 digit)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                      aria-label="m-number"
                      id="m-number"
                      value={contactInfo.number}
                      required
                      pattern="^[6-9]\d{9}$"
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          number: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col">
                    <label for="subject" className="fw-bold pb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="form-control"
                      placeholder="Enter subject"
                      value={contactInfo.subject}
                      required
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          subject: e.target.value,
                        })
                      }
                    />
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
                  value={contactInfo.description}
                  onChange={(e) =>
                    setContactInfo({
                      ...contactInfo,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              <div className="row5">
                <button className="btn btn-danger w-100" type="submit">
                  Send Us A Message
                </button>
              </div>
            </form>
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
