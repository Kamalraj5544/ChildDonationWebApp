import React from "react";

import "./MainNavbar.css";

import { Link } from "react-router-dom";

import neethiLogo from "../../assets/sdsd 2.png";

const MainNavbar = () => {
  return (
    <header className="header-section">
      <nav className="navbar navbar-expand-lg bg-red">
        <div className="container-fluid bg-red">
          <div class="navbar-brand">
            <img
              className="navbar-brand ps-3"
              src={neethiLogo}
              alt="logo"
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
              <li className="nav-item item">
                <a className="nav-link text-white" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item item">
                <a className="nav-link text-white" href="/aboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item item">
                <a className="nav-link text-white" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item item">
                <a className="nav-link text-white" href="/contactUs">
                  Contact Us
                </a>
              </li>
              <li className="nav-item item">
                <Link to="/login" type="submit">
                  <button className="btn bg-white text-danger fw-bolder px-3 py-2 fs-5">
                    Log In
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavbar;
