import React from "react";

import { FiUpload } from "react-icons/fi";

const AddDonator = () => {
  return (
    <div className="d-flex container flex-column border rounded p-4">
      <h4 className="text-danger fw-bold">Add Donators Information</h4>
      <hr />

      <div className="py-3 row1">
        <div className="row">
          <div className="col">
            <label for="firstName" className="fw-bold pb-2">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your First name"
              aria-label="First name"
              id="firstName"
            />
          </div>
          <div className="col">
            <label for="lastName" className="fw-bold pb-2">
              Last Name
            </label>
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
            <label for="amount" className="fw-bold pb-2">
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter amount"
              aria-label="amount"
              id="amount"
            />
          </div>
          <div className="col">
            <label for="imgUpload" className="fw-bold pb-2 d-block">
              Image Upload
            </label>
            <button
              id="imgUpload"
              className="btn border bg-dark text-white fw-bold"
            >
              <span className="me-3">
                <FiUpload />
              </span>
              <span>Upload</span>
            </button>
          </div>
        </div>
      </div>

      <div className="row3">
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

export default AddDonator;
