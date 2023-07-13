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
  const { pageName,childId,donatorId } = useParams();

  return (
    <div>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="col">
          <NavBar />
          {pageName === "dashboard" && <Home />}
          {pageName === "childrenList" && <ChildrenList />}
          {pageName === "donatorsList" && <DonatorsList />}
          {pageName === "paymentDetails" && <PaymentDetails />}
          {pageName === "childrenListAdd" && <AddChild add={true} />}
          {pageName === "childrenListUpdate" && <AddChild add={false} childId={childId} />}
          {pageName === "donatorsListAdd" && <AddDonator add={true} />}
          {pageName === "donatorsListUpdate" && <AddDonator add={false} donatorId={donatorId} />}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
