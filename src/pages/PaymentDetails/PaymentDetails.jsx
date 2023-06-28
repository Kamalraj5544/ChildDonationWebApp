import React from "react";
import PaymentTable from "./PaymentTable";

const PaymentDetails = () => {
  return (
    <div className="container d-flex flex-column">
      <span className="text-danger fw-bold">Payments List</span>
      <PaymentTable />
    </div>
  );
};

export default PaymentDetails;
