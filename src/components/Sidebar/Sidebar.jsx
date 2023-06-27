import React from "react";

import { useState } from "react";

import { BiSolidDashboard } from "react-icons/bi";
import { MdChildCare } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { FcDonate } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./Sidebar.css";

import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  const [active, setactive] = useState(1);

  return (
    <div className="d-flex justify-content-between flex-column bg-dark text-white vh-100 pt-5">
      <ul className="nav nav-pills flex-column p-3">
        <li
          className={active === 1 ? "active nav-item" : "nav-item"}
          onClick={() => setactive(1)}
        >
          <Link to="/">
            <span className="me-3">
              <BiSolidDashboard />
            </span>
            <span>
              <strong>Dashborad</strong>
            </span>
          </Link>
        </li>
        <li
          className={active === 2 ? "active nav-item" : "nav-item"}
          onClick={() => setactive(2)}
        >
          <Link to="/childrenList">
            <span className="me-3">
              <MdChildCare />
            </span>
            <span>
              <strong>Children List</strong>
            </span>
          </Link>
        </li>
        <li
          className={active === 3 ? "active nav-item" : "nav-item"}
          onClick={() => setactive(3)}
        >
          <Link to="/donatorsList">
            <span className="me-3">
              <FcDonate />
            </span>
            <span>
              <strong>Donations</strong>
            </span>
          </Link>
        </li>
        <li
          className={active === 4 ? "active nav-item" : "nav-item"}
          onClick={() => setactive(4)}
        >
          <Link to="/paymentDetails">
            <span className="me-3">
              <MdOutlinePayment />
            </span>
            <span>
              <strong>Payment</strong>
            </span>
          </Link>
        </li>
        <li
          className={active === 5 ? "active nav-item" : "nav-item"}
          onClick={() => setactive(5)}
        >
          <Link to="/">
            <span className="me-3">
              <FiLogOut />
            </span>
            <span>
              <strong>Logout</strong>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
