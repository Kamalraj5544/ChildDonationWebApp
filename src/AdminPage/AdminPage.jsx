import React from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import NavBar from "../components/NavBar/NavBar";
import AdminRouting from "../AdminRouting";

const AdminPage = () => {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="col">
          <NavBar />
          <AdminRouting />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
