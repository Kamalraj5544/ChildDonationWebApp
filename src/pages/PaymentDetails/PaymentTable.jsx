import React from "react";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "S.No", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "transferId", headerName: "Transfer ID", width: 130 },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 90,
  },
  {
    field: "date",
    headerName: "Date",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 230,
  },
  { field: "status", headerName: "Status", width: 130 },
];

const rows = [
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
  {
    id: 1,
    transferId: "Child Study",
    name: "Leo Grace",
    amount: 5000,
    date: "21 March 2018 at 8.00pm",
    status: "Transferred",
  },
];

const PaymentTable = () => {
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
