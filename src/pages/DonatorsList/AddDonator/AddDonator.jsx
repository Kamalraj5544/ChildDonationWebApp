import React, { useState, useEffect } from "react";

import { apiBaseUrl } from "../../../BaseUrl";

import { FiUpload } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const AddDonator = ({ add, donatorId }) => {
  const [donatorDetails, setDonatorDetails] = useState({
    name: "",
    lastName: "",
    amount: "",
    role: "",
    company: "",
    paymentType: "",
    description: "",
    imageUrl: "dfdfsd",
  });

  const handlePostDonatorData = async () => {
    await axios
      .post(`${apiBaseUrl}/neethimaan/createDonatorList`, donatorDetails)
      .then((res) => {
        console.log(res)
        res.status === 200
          ? toast.success("Successfully added!", {
              position: toast.POSITION.TOP_RIGHT,
            })
          : toast.error("Something went wrong!", {
              position: toast.POSITION.TOP_RIGHT,
            });
      });

    setDonatorDetails({
      name: "",
      lastName: "",
      amount: "",
      role: "",
      company: "",
      paymentType: "",
      description: "",
      imageUrl: "dfdfsd",
    });
  };

  const handleUpdateDonatorData = async (id) => {
    await axios
      .put(
        `${apiBaseUrl}/neethimaan/updateDonatorListDetails?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjRhNmI0ZjljZTJlMTcwNTkwMWVlZDI5IiwiaWF0IjoxNjg4NjQ3MDYzfQ.kfwPj9B43M7MIGfxCtdJY5R7UjmW0aF0Jq5Qs3aBKfI`,
        { ...donatorDetails, _id: id }
      )
      .then((res) => {
        res.status === 200
          ? toast.success("Successfully Updated!", {
              position: toast.POSITION.TOP_RIGHT,
            })
          : toast.error("Something went wrong!", {
              position: toast.POSITION.TOP_RIGHT,
            });
      });

    setDonatorDetails({
      name: "",
      lastName: "",
      amount: "",
      role: "",
      company: "",
      paymentType: "",
      description: "",
      imageUrl: "dfdfsd",
    });
  };

  useEffect(() => {
    console.log(donatorId)
    donatorId !== undefined &&
      axios
        .get(
          `${apiBaseUrl}/neethimaan/findOneDonatorListDetails?_id=${donatorId}`
        )
        .then((res) => {
          console.log(res);
          setDonatorDetails({
            name: res.data.data.name,
            lastName: res.data.data.lastName,
            amount: res.data.data.amount,
            role: res.data.data.role,
            company: res.data.data.company,
            description: res.data.data.description,
            imageUrl: "dfdfsd",
            paymentType: res.data.data.paymentType,
          });
        });
  }, []);

  return (
    <div className="d-flex container flex-column border rounded p-4">
      <h4 className="text-danger fw-bold">
        {add ? "Add Donator Details" : "Update Donator details"}
      </h4>
      <hr />

      <ToastContainer />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          add ? handlePostDonatorData() : handleUpdateDonatorData(donatorId);
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
                value={donatorDetails.name}
                required
                onChange={(e) =>
                  setDonatorDetails({ ...donatorDetails, name: e.target.value })
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
                value={donatorDetails.lastName}
                required
                onChange={(e) =>
                  setDonatorDetails({
                    ...donatorDetails,
                    lastName: e.target.value,
                  })
                }
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
                value={donatorDetails.amount}
                required
                onChange={(e) =>
                  setDonatorDetails({
                    ...donatorDetails,
                    amount: +e.target.value,
                  })
                }
              />
            </div>
            <div className="col">
              <label for="imgUpload" className="fw-bold pb-2 d-block">
                Image Upload
              </label>
              <input
                className="form-control mb-3"
                type="file"
                onChange={(e) =>
                  setDonatorDetails({
                    ...donatorDetails,
                    imageUrl: e.target.value,
                  })
                }
              />
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

        <div className="py-3 row3">
          <div className="row">
            <div className="col">
              <label for="role" className="fw-bold pb-2">
                Role
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter role"
                aria-label="role"
                id="role"
                required
                value={donatorDetails.role}
                company
                onChange={(e) =>
                  setDonatorDetails({ ...donatorDetails, role: e.target.value })
                }
              />
            </div>
            <div className="col">
              <label for="company" className="fw-bold pb-2">
                Company
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter company"
                aria-label="company"
                id="company"
                required
                value={donatorDetails.company}
                onChange={(e) =>
                  setDonatorDetails({
                    ...donatorDetails,
                    company: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="py-3 row4">
          <div className="row">
            <div className="col">
              <label for="paymentType" className="fw-bold pb-2">
                Payment Type
              </label>
              <select
                type="text"
                className="form-select"
                id="paymentType"
                value={donatorDetails.name}
                aria-label="Default select example"
                required
                defaultValue={donatorDetails.paymentType}
                onChange={(e) =>
                  setDonatorDetails({
                    ...donatorDetails,
                    paymentType: e.target.value,
                  })
                }
              >
                <option selected={donatorDetails.paymentType}>
                  Select payment type{" "}
                </option>
                <option value="razorpay">Razor pay</option>
                <option value="Card">Card</option>
                <option value="Cash">Cash</option>
              </select>
            </div>
            <div className="col">
              <label for="description" className="fw-bold pb-2">
                Description
              </label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter description"
                id="description"
                required
                value={donatorDetails.description}
                onChange={(e) =>
                  setDonatorDetails({
                    ...donatorDetails,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="row5">
          <button className="btn btn-outline-danger me-3" type="button">
            Cancel
          </button>
          <button className="btn btn-danger" type="submit">
            {add ? "Add" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDonator;
