import React, { useEffect } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import NavBar from "../components/NavBar/NavBar";

import { useParams,useNavigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import ChildrenList from "../pages/ChildrenList/ChildrenList";
import DonatorsList from "../pages/DonatorsList/DonatorsList";
import PaymentDetails from "../pages/PaymentDetails/PaymentDetails";
import AddChild from "../pages/ChildrenList/AddChild/AddChild";
import AddDonator from "../pages/DonatorsList/AddDonator/AddDonator";
import ContactUsList from "../pages/ContactUsList/ContactUsList";

const AdminPage = () => {

  const navigate = useNavigate();

  const { pageName, childId, donatorId } = useParams();

  useEffect(() => {
    localStorage.getItem("isLoggedIn") !== "true" && navigate("/login")
  }, []);

  return (
    <div className="d-flex flex-column flex-md-row vh-100 w-100">
      <Sidebar />
      <div className="col">
        <NavBar />
        {pageName === "dashboard" && <Home />}
        {pageName === "childrenList" && <ChildrenList />}
        {pageName === "donatorsList" && <DonatorsList />}
        {pageName === "paymentDetails" && <PaymentDetails />}
        {pageName === "contactUsList" && <ContactUsList />}
        {pageName === "childrenListAdd" && <AddChild add={true} />}
        {pageName === "childrenListUpdate" && (
          <AddChild add={false} childId={childId} />
        )}
        {pageName === "donatorsListAdd" && <AddDonator add={true} />}
        {pageName === "donatorsListUpdate" && (
          <AddDonator add={false} donatorId={donatorId} />
        )}
      </div>
    </div>
  );
};

export default AdminPage;
