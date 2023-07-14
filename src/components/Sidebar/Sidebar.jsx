import React from "react";

import { useState } from "react";

import { BiSolidDashboard } from "react-icons/bi";
import { MdChildCare, MdOutlinePayment } from "react-icons/md";
import { FcDonate } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";

import { Link, useNavigate, useParams } from "react-router-dom";

import neethiLogo from "../../assets/sdsd 2.png";

import "./Sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  const { pageName } = useParams();

  const navigate = useNavigate();
  const [activeSideBar, setActiveSideBar] = useState(null);
  return (
    <nav className="navbar navbar-expand-md flex-column flex-md-row bg-dark text-white h-100 py-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="p-0">
            <Link to="/admin/dashboard">
              <li
                className={
                  pageName === "dashboard"
                    ? "activetab nav-item item"
                    : "nav-item item"
                }
                onClick={() => setActiveSideBar(1)}
              >
                <span className="me-3">
                  <BiSolidDashboard />
                </span>
                <span>
                  <strong>Dashborad</strong>
                </span>
              </li>
            </Link>
            <Link to="/admin/childrenList">
              <li
                className={
                  pageName === "childrenList" ||
                  pageName === "childrenListAdd" ||
                  pageName === "childrenListUpdate"
                    ? "activetab nav-item item"
                    : "nav-item item"
                }
                onClick={() => {
                  console.log(activeSideBar);
                  setActiveSideBar(2);
                }}
              >
                <span className="me-3">
                  <MdChildCare />
                </span>
                <span>
                  <strong>Children List</strong>
                </span>
              </li>
            </Link>
            <Link to="/admin/donatorsList">
              <li
                className={
                  pageName === "donatorsList" ||
                  pageName === "donatorsListAdd" ||
                  pageName === "donatorsListUpdate"
                    ? "activetab nav-item item"
                    : "nav-item item"
                }
                onClick={() => setActiveSideBar(3)}
              >
                <span className="me-3">
                  <FcDonate />
                </span>
                <span>
                  <strong>Donations</strong>
                </span>
              </li>
            </Link>
            <Link to="/admin/paymentDetails">
              <li
                className={
                  pageName === "paymentDetails"
                    ? "activetab nav-item item"
                    : "nav-item item"
                }
                onClick={() => setActiveSideBar(4)}
              >
                <span className="me-3">
                  <MdOutlinePayment />
                </span>
                <span>
                  <strong>Payment</strong>
                </span>
              </li>
            </Link>
            <div
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                console.log(localStorage.getItem("isLoggedIn"));
                navigate("/");
              }}
            >
              <li className="nav-item item">
                <span className="me-3">
                  <FiLogOut />
                </span>
                <span>
                  <strong>Logout</strong>
                </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
