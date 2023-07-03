import React from "react";

import "./MainNavbar.css";

import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-red">
      <div className="container-fluid bg-red">
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
        <div
          className="collapse navbar-collapse d-flex justify-content-end align-items-center"
          id="navbarTogglerDemo01"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 me-5">
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/aboutUs">
                About Us
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="/contactUs">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <Link to="/login" type="submit">
                <button className="btn bg-white text-danger fw-bolder py-2 display-3">
                  Log In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
