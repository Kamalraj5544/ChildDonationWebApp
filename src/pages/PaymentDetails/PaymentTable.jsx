import React, { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import { apiBaseUrl } from "../../BaseUrl";
import axios from "axios";

const columns = [
  { field: "id", headerName: "S.No", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 90,
  },
  {
    field: "createdAt",
    headerName: "Payment Date",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 230,
  },

  { field: "role", headerName: "Role", width: 130 },
  { field: "company", headerName: "Company", width: 130 },
  { field: "company", headerName: "Company", width: 130 },
  { field: "description", headerName: "description", width: 130 },
  { field: "paymentId", headerName: "Payment ID", width: 130 },
];

const PaymentTable = () => {

  const [rows, setRows] = useState({});

  useEffect(() => {
    getColumns();
  }, []);

  const getColumns = async function () {
    await axios
      .get(
        `${apiBaseUrl}/neethimaan/findDonatorListDetails?paymentType=razorpay`
      )
      .then((res) => {
        console.log(res.data.data);
        const arr = [...res.data.data].map((obj, i) => {
          return { ...obj, id: i + 1 };
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

export default PaymentTable;
