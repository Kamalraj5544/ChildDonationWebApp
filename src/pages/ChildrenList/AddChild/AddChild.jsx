import React from "react";

import { FiUpload } from "react-icons/fi";

const AddChild = () => {
  return (
    <div className="d-flex container flex-column border rounded p-4">
      <h4 className="text-danger fw-bold">Add Children Details</h4>
      <hr />

      <div className="py-3 row1">
        <div className="row">
          <div className="col">
            <label for="firstName" className="fw-bold pb-2">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your First name"
              aria-label="First name"
              id="firstName"
            />
          </div>
          <div className="col">
            <label for="lastName" className="fw-bold pb-2">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Last name"
              aria-label="Last name"
              id="LastName"
            />
          </div>
        </div>
      </div>

      <div className="pb-4 row2">
        <div className="row">
          <div className="col">
            <label for="age" className="fw-bold pb-2">Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Age"
              aria-label="Age"
              id="age"
            />
          </div>
          <div className="col">
            <label for="category" className="fw-bold pb-2">Category</label>
            <select className="form-select" aria-label="Default select example" id="category">
              <option selected>Select </option>
              <option value="1">Child Study</option>
              <option value="2">Child Health</option>
              <option value="3">Free Legal</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row3 pb-4">
        <label for="imgUpload" className="fw-bold pb-2 d-block">Image Upload</label>
        <button id="imgUpload" className="btn border bg-dark text-white fw-bold">
          <span className="me-3">
            <FiUpload />
          </span>
          <span>Upload</span>
        </button>
      </div>

      <div className="row4 pb-3">
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
          <button className="btn btn-outline-danger me-3" type="button">
            Cancel
          </button>
          <button className="btn btn-danger" type="button">
            Update
          </button>
        </div>
    </div>
  );
};

export default AddChild;
