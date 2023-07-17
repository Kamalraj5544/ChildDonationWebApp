import React, { useState } from "react";

import displayRazorpay from "../../utils/PaymentGateway";

import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const DonateFormSection = () => {
 
  const [disableInput, setDisableInput] = useState(false);
  const [amount, setAmount] = useState();

  const handleAmountClick = (amt) => {
    setAmount(amt);
    setDisableInput(true);
  };

  const handleCustomAmount = () => {
    setAmount("");
    setDisableInput(false);
  };



  return (
    <>
      <section className="w-100 container mb-5">
        <h1 className="fw-bolder mb-2">Donation Amount</h1>
        <div
          className="row m-0 p-0 g-2 mb-4"
          role="group"
          aria-label="Basic example"
        >
          <div className="col">
            <button
              type="button"
              className="btn btn-danger fw-bolder w-100"
              onClick={() => handleAmountClick("100")}
            >
              <span>&#8377;</span> 100
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-danger fw-bolder w-100"
              onClick={() => handleAmountClick("300")}
            >
              <span>&#8377;</span> 300
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-danger fw-bolder w-100"
              onClick={() => handleAmountClick("500")}
            >
              <span>&#8377;</span> 500
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              className="btn btn-danger w-100"
              onClick={handleCustomAmount}
            >
              <span>&#8377;</span> Custom Amount
            </button>
          </div>
        </div>
      </section>

      <section className="container">
        <h3 className="fw-bolder">Personal Information</h3>

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

        <div className="row2">
          <Checkbox {...label} />
          <label>
            Make my donation anonymous <span className="text-danger">*</span>
          </label>
        </div>

        <div className="py-3 row1">
          <label for="e-mail" className="fw-bold pb-2">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Email"
            aria-label="Email"
            id="Email"
          />
        </div>

        <div className="py-3 row1">
          <label for="m-number" className="fw-bold pb-2">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile Number"
            aria-label="m-number"
            id="m-number"
          />
        </div>

        <div className="py-3 row1">
          <label for="Address" className="fw-bold pb-2">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Address"
            aria-label="address"
            id="address"
          />
        </div>

        <div className="py-3 row1">
          <label for="pin" className="fw-bold pb-2">
            Pincode
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Pincode"
            aria-label="m-number"
            id="pin"
          />
        </div>

        <div className="row2">
          <Checkbox {...label} />
          <label>Send me updates and notifications via WhatsApp </label>
        </div>

        <div className="py-3 row1">
          <button
            className="btn btn-danger fw-bolder"
            type="button"
            id="rzp-button1"
            onClick={displayRazorpay}
          >
            Proceed to Pay
          </button>
        </div>
      </section>
    </>
  );
};

export default DonateFormSection;
