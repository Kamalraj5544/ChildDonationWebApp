import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "S.No", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
  { id: 1, name: "Leo Grace", amount: 5000 },
];

const DonatorsTable = () => {
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

export default DonatorsTable;
