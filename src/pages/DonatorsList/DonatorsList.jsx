import React from "react";

import { red } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import DonatorsTable from "./DonatorsTable";

const DonatorsList = () => {
  return (
    <div className="container d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <span className="text-danger fw-bold">Donators List</span>
        <Link className="border text-black" to="/admin/donatorsListAdd">
          <Button
            variant="Outline"
            startIcon={<Icon sx={{ color: red[500] }}>add_circle </Icon>}
          >
            Add
          </Button>
        </Link>
      </div>
      <DonatorsTable />
    </div>
  );
};

export default DonatorsList;
