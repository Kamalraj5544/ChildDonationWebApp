import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container text-white">
      <div className="bg-footer"></div>

      <div className="container p-5">
        <div className="row">
          <div className="col">
            <h2 className="pb-4 fw-bolder">Links</h2>
            <p>Home</p>
            <p>About us</p>
          </div>
          <div className="col">
            <h2 className="pb-4 fw-bolder">Services</h2>
            <p>Child Study</p>
            <p>Child Health</p>
            <p>Free Legal</p>
          </div>
          <div className="col">
            <h2 className="pb-4 fw-bolder">Contact Us</h2>
            <p>+91 9866666383</p>
            <p>+91 9866666383</p>
          </div>
          <div className="col">
            <h2 className="pb-4 fw-bolder">Address</h2>
            <p>
              P. KRISHNANANDA RAO (VICE PRISIDENT) No. 17, Velmurugan Colony,
              Vadapalani , Chennai - 600 026
            </p>
          </div>
          <div className="col">
            <h2 className="pb-4 fw-bolder">Follow Us</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
