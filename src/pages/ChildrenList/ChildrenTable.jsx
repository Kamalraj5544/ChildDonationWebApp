import React from "react";

import { useState } from "react";

import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Link } from "react-router-dom";

function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        className="col-2 btn btn-danger fw-bold"
        type="button"
        onClick={handleOpen}
      >
        Delete
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{ ...style, width: 500, borderRadius: "15px", border: "none" }}
        >
          <div className="container d-flex flex-column justify-content-center align-items-center gap-3">
            <div className="fs-1 text-danger">
              <GiCancel />
            </div>
            <h4>Are You Sure ?</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="d-flex justify-content-center align-items-center w-100">
              <button
                className="col-2 btn btn-outline-danger me-3 fw-bold"
                type="button"
                onClick={handleClose}
              >
                Cancel
              </button>
              <Link
                to="/childrenList"
                className="col-2 btn btn-danger fw-bold"
                reloadDocument
              >
                Delete
              </Link>
            </div>
          </div>

          {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ChildrenTable = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "S.No", width: 70 },
    { field: "childName", headerName: "Child Name", width: 130 },
    { field: "Category", headerName: "Category", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "description",
      headerName: "Description",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 500,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: () => {
        return [
          <div className="fs-5 text-primary cursor-pointer">
            <BiEdit />
          </div>,
          <div className="fs-5 text-danger cursor-pointer" onClick={handleOpen}>
            <MdDelete />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 1100, borderRadius: "15px" }}>
                <div className="container d-flex p-3">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src="https://st2.depositphotos.com/1189140/45343/i/600/depositphotos_453431896-stock-photo-full-body-excited-little-african.jpg"
                        alt="childImage"
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <div className="ms-4 col-8">
                      <div className="row pb-4">
                        <div className="col fw-bold">Name:</div>
                        <p className="col">Leo Grace</p>
                      </div>
                      <div className="row pb-4">
                        <div className="col fw-bold">Category:</div>
                        <p className="col">child study</p>
                      </div>
                      <div className="row pb-4">
                        <div className="col fw-bold">Age:</div>
                        <div className="col">15</div>
                      </div>
                      <div className="row pb-4">
                        <div className="col fw-bold">Descrpition:</div>
                        <p className="col">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>
                      </div>
                      <div className="row d-flex justify-content-center align-items-center w-100">
                        <Link
                          className="col-2 btn btn-outline-danger me-3 fw-bold text-black"
                          reloadDocument
                        >
                          Cancel
                        </Link>
                        <ChildModal />
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>,
        ];
      },
    },
  ];

  const rows = [
    {
      id: 1,
      Category: "Child Study",
      childName: "Leo Grace",
      age: 15,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      Category: "Child Study",
      childName: "Leo Grace",
      age: 15,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      Category: "Child Study",
      childName: "Leo Grace",
      age: 15,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      Category: "Child Study",
      childName: "Leo Grace",
      age: 15,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      Category: "Child Study",
      childName: "Leo Grace",
      age: 15,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      Category: "Child Study",
      childName: "Leo Grace",
      age: 15,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 7,
      Category: "Child Study",
      childName: "Leo Grace",
      age: 15,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 8,
      Category: "Child Study",
      childName: "Leo Grace",
      age: 15,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 9,
      Category: "Child Study",
      childName: "Leo Grace",
      age: 15,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 10,
      Category: "Child Study",
      childName: "Leo Grace",
      age: 15,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

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

export default ChildrenTable;
