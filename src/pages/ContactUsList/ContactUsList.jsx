import React from "react";
import ContactUsTable from "./ContactUsTable";


const ContactUsList = () => {
  return (
    <div className="container d-flex flex-column">
      <span className="text-danger fw-bold">Contact Us List</span>
      <ContactUsTable />
    </div>
  );
};

export default ContactUsList;