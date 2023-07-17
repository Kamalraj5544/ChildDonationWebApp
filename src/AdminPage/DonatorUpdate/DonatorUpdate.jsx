import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavBar from "../../components/NavBar/NavBar";
import { useParams, useNavigate } from "react-router-dom";
import AddDonator from "../../pages/DonatorsList/AddDonator/AddDonator";

const DonatorUpdate = () => {
  const { donatorId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("isLoggedIn") !== "true" && navigate("/login");
  }, []);

  return (
    <div className="d-flex flex-column flex-md-row vh-100 w-100">
      <Sidebar />
      <div className="col">
        <NavBar />
        <AddDonator add={false} donatorId={donatorId} />
      </div>
    </div>
  );
};

export default DonatorUpdate;
