import React from "react";
import { useState, useRef } from "react";

import { apiBaseUrl } from "../../../BaseUrl";

import { FiUpload } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const AddChild = () => {
  const [childDetails, setChildDetails] = useState({
    name: "",
    addBy: "64a6b4f9ce2e1705901eed29",
    age: "",
    description: "",
    type: "",
    imageUrl: "",
  });

  const handlePostChildData = async () => {
    await axios
      .post(
        `${apiBaseUrl}/neethimaan/createChildrenList?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjRhNmI0ZjljZTJlMTcwNTkwMWVlZDI5IiwiaWF0IjoxNjg4NjQ3MDYzfQ.kfwPj9B43M7MIGfxCtdJY5R7UjmW0aF0Jq5Qs3aBKfI`,
        childDetails
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        res.status === 200
          ? toast.success("Successfully added!", {
              position: toast.POSITION.TOP_RIGHT,
            })
          : toast.error("Something went wrong!", {
              position: toast.POSITION.TOP_RIGHT,
            });
      });

    // navigate("/admin/childrenList");
  };
  return (
    <div className="d-flex container flex-column border rounded p-4">
      <h4 className="text-danger fw-bold">Add Children Details</h4>
      <hr />

      <ToastContainer />

      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePostChildData();
        }}
      >
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
                required
                onChange={(e) =>
                  setChildDetails({
                    ...childDetails,
                    name: e.target.value,
                  })
                }
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
              <label for="age" className="fw-bold pb-2">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Age"
                aria-label="Age"
                id="age"
                pattern="[0-9]{1,2}"
                required
                onChange={(e) =>
                  setChildDetails({ ...childDetails, age: e.target.value })
                }
              />
            </div>
            <div className="col">
              <label for="category" className="fw-bold pb-2">
                Category
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="category"
                required
                onChange={(e) =>
                  setChildDetails({ ...childDetails, type: e.target.value })
                }
              >
                <option selected>Select </option>
                <option value="Child study">Child Study</option>
                <option value="Child health">Child Health</option>
                <option value="Free Legal">Free Legal</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row3 pb-4">
          <label for="imgUpload" className="fw-bold pb-2 d-block">
            Image Upload
          </label>
          <button
            id="imgUpload"
            className="btn border bg-dark text-white fw-bold d-flex flex-row"
          >
            <span className="mt-2 me-2">
              <FiUpload />
            </span>
            <input
              className="form-control"
              type="file"
              onChange={(e) =>
                setChildDetails({ ...childDetails, imageUrl: e.target.value })
              }
            />
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
            required
            onChange={(e) =>
              setChildDetails({ ...childDetails, description: e.target.value })
            }
          ></textarea>
        </div>

        <div className="row5">
          <button className="btn btn-outline-danger me-3" type="button">
            Cancel
          </button>
          <button className="btn btn-danger" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddChild;
