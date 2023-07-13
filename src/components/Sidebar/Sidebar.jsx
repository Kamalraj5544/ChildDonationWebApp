import React from "react";

import { useState } from "react";

import { BiSolidDashboard } from "react-icons/bi";
import { MdChildCare, MdOutlinePayment } from "react-icons/md";
import { FcDonate } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";

import { Link, useParams } from "react-router-dom";

import "./Sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  const { pageName } = useParams();
  const [activeSideBar, setActiveSideBar] = useState(null);
  return (
    <div>
      <div className="d-flex justify-content-between flex-column bg-dark text-white vh-100 pt-5">
        <ul className="nav nav-pills flex-column p-3">
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
                pageName === "childrenList"
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
                pageName === "donatorsList"
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
          <Link to="/">
            <li className="nav-item item">
              <span className="me-3">
                <FiLogOut />
              </span>
              <span>
                <strong>Logout</strong>
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
