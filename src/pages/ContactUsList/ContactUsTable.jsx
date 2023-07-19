import React, { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import Moment from "moment";

import { apiBaseUrl } from "../../BaseUrl";
import axios from "axios";

const columns = [
  { field: "id", headerName: "S.No", width: 70 },
  { field: "name", headerName: "Name", width: 70 },
  {
    field: "number",
    headerName: "Number",
    type: "number",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 120,
  },

  { field: "emailId", headerName: "Email Id", width: 230 },
  { field: "subject", headerName: "Subject", width: 190 },
  { field: "description", headerName: "description", width: 130 },
];

const ContactUsTable = () => {
  const [rows, setRows] = useState({});

  useEffect(() => {
    getColumns();
  }, []);

  const getColumns = async function () {
    await axios
      .get(
        `${apiBaseUrl}/neethimaan/findContactUsDetails?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjRhNmI0ZjljZTJlMTcwNTkwMWVlZDI5IiwiaWF0IjoxNjg4NjQ3MDYzfQ.kfwPj9B43M7MIGfxCtdJY5R7UjmW0aF0Jq5Qs3aBKfI`
      )
      .then((res) => {
        console.log(res.data.data);
        const arr = [...res.data.data].map((obj, i) => {
          let tempdate = Moment(obj.createdAt).format("DD-MM-YYYY");
          return { ...obj, id: i + 1, date: tempdate };
        });
        setRows(arr);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ContactUsTable;
