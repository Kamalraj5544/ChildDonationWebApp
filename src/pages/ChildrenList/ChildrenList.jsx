import React from "react";

import { red } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";

import ChildrenTable from "./ChildrenTable";

import { Link } from "react-router-dom";

const ChildrenList = () => {
  return (
    <div className="container d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-danger fw-bold">Children List</span>
        <Link className="border text-black" to="/admin/childrenListAdd">
          <Button
            variant="Outline"
            startIcon={<Icon sx={{ color: red[500] }}>add_circle </Icon>}
          >
            Add
          </Button>
        </Link>
      </div>
      <ChildrenTable />
    </div>
  );
};

export default ChildrenList;
