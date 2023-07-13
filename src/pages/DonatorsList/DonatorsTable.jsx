import React from "react";

import { useState, useEffect } from "react";

import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

import { DataGrid } from "@mui/x-data-grid";

import { Link, useNavigate } from "react-router-dom";

import { apiBaseUrl } from "../../BaseUrl";
import axios from "axios";

// const rows = [
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
//   { id: 1, name: "Leo Grace", amount: 5000 },
// ];

const DonatorsTable = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState({});
  const [deleteId, setDeleteId] = useState("");

  const handleDeleteClick = async (id) => {
    await axios.delete(
      `${apiBaseUrl}/neethimaan/deleteDonatorListDetails?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjRhNmI0ZjljZTJlMTcwNTkwMWVlZDI5IiwiaWF0IjoxNjg4NjQ3MDYzfQ.kfwPj9B43M7MIGfxCtdJY5R7UjmW0aF0Jq5Qs3aBKfI`,
      {
        data: {
          _id: id,
        },
      }
    );
  };

  useEffect(() => {
    getColumns();
  }, []);

  const columns = [
    { field: "id", headerName: "S.No", width: 70 },
    { field: "name", headerName: "Name", width: 70 },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      width: 90,
    },
    {
      field: "role",
      headerName: "Role",
      width: 90,
    },
    {
      field: "company",
      headerName: "Comapny",
      width: 90,
    },
    {
      field: "description",
      headerName: "Description",
      width: 140,
    },
    {
      field: "paymentType",
      headerName: "Payment Type",
      width: 140,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <button
            className="fs-4 btn text-primary cursor-pointer me-3"
            onClick={() => {
              rows.map((item) => {
                if (item.id === id) {
                  navigate("/admin/donatorsListUpdate/" + item._id);
                }
                return item;
              });
            }}
          >
            <BiEdit />
          </button>,
          <div
            className="fs-4 text-danger cursor-pointer"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              rows.map((item) => {
                if (item.id === id) setDeleteId(item._id);
                return item;
              });
            }}
          >
            <MdDelete />
            {/* <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 1100, borderRadius: "15px" }}>
                <div className="container d-flex p-3">
                  <div className="row">
                    <div className="col-3 w-25">
                      <img
                        src={oneChild.imageUrl}
                        alt="childImage"
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <div className="ms-4 col-8">
                      <div className="row pb-4">
                        <div className="col fw-bold">Name:</div>
                        <p className="col">{oneChild.name}</p>
                      </div>
                      <div className="row pb-4">
                        <div className="col fw-bold">Category:</div>
                        <p className="col">{oneChild.type}</p>
                      </div>
                      <div className="row pb-4">
                        <div className="col fw-bold">Age:</div>
                        <div className="col">{oneChild.age}</div>
                      </div>
                      <div className="row pb-4">
                        <div className="col fw-bold">Descrpition:</div>
                        <p className="col">{oneChild.descrpition}</p>
                      </div>
                      <div className="row d-flex justify-content-center align-items-center w-100">
                        <button
                          className="col-2 btn btn-outline-danger me-3 fw-bold text-black"
                          onClick={() => handleClose()}
                        >
                          Cancel
                        </button>
                        <ChildModal deleteId={deleteId} />
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal> */}
          </div>,
        ];
      },
    },
  ];

  const getColumns = async function () {
    await axios
      .get(
        `${apiBaseUrl}/neethimaan/findDonatorListDetails`
      )
      .then((res) => {
        console.log(res.data.data);
        const arr = [...res.data.data].map((obj, i) => {
          return { ...obj, id: i + 1 };
        });
        setRows(arr);
      });
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

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column justify-content-center align-items-center">
              <div className="fs-1 text-danger">
                <GiCancel />
              </div>
              <h4>Are You Sure ?</h4>
              <p>This action will delete permanently!</p>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center align-items-center w-100">
                <button
                  className="col-2 btn btn-outline-danger me-3 fw-bold"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <Link
                  reloadDocument
                  className="col-2 btn btn-danger fw-bold"
                  onClick={() => handleDeleteClick(deleteId)}
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatorsTable;
