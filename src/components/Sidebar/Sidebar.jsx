import React from "react";

import { useState } from "react";

import { BiSolidDashboard } from "react-icons/bi";
import { MdChildCare, MdOutlinePayment } from "react-icons/md";
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
        <Link to="/admin/dashboard">
          <li
            className={active === 1 ? "active nav-item" : "nav-item"}
            onClick={() => setactive(1)}
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
            className={active === 2 ? "active nav-item" : "nav-item"}
            onClick={() => setactive(2)}
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
            className={active === 3 ? "active nav-item" : "nav-item"}
            onClick={() => setactive(3)}
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
            className={active === 4 ? "active nav-item" : "nav-item"}
            onClick={() => setactive(4)}
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
          <li
            className={active === 5 ? "active nav-item" : "nav-item"}
            onClick={() => setactive(5)}
          >
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
  );
};

export default Sidebar;
