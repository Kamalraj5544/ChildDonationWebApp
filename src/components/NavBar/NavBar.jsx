import React from "react";

import { BiSearch } from "react-icons/bi";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-red m-3 rounded">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <span className="search-icon flex-center">
            <BiSearch />
          </span>
          <input
            className="form-control me-2 search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="userImg pe-2 pb-2">
          <i
            class="bi bi-person-circle"
            style={{ fontSize: "2rem", color: "white" }}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
