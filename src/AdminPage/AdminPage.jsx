import React from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import NavBar from "../components/NavBar/NavBar";

import { useParams } from "react-router-dom";
import Home from "../pages/Home/Home";
import ChildrenList from "../pages/ChildrenList/ChildrenList";
import DonatorsList from "../pages/DonatorsList/DonatorsList";
import PaymentDetails from "../pages/PaymentDetails/PaymentDetails";
import AddChild from "../pages/ChildrenList/AddChild/AddChild";
import AddDonator from "../pages/DonatorsList/AddDonator/AddDonator";

const AdminPage = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="col">
          <NavBar />
          {id === "dashboard" && <Home />}
          {id === "childrenList" && <ChildrenList />}
          {id === "donatorsList" && <DonatorsList />}
          {id === "paymentDetails" && <PaymentDetails />}
          {id === "childrenListAdd" && <AddChild />}
          {id === "donatorsListAdd" && <AddDonator />}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
