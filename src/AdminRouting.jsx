import React from "react";

import { Routes, Route } from "react-router-dom";

import ChildrenList from "./pages/ChildrenList/ChildrenList";
import Home from "./pages/Home/Home";
import DonatorsList from "./pages/DonatorsList/DonatorsList";
import PaymentDetails from "./pages/PaymentDetails/PaymentDetails";
import AddChild from "./pages/ChildrenList/AddChild/AddChild";
import AddDonator from "./pages/DonatorsList/AddDonator/AddDonator";

const AdminRouting = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin/dashboard" element={<Home />}></Route>
        <Route path="/admin/childrenList" element={<ChildrenList />}></Route>
        <Route path="/admin/donatorsList" element={<DonatorsList />}></Route>
        <Route path="/admin/paymentDetails" element={<PaymentDetails />}></Route>
        <Route path="/childrenList/add" element={<AddChild />}></Route>
        <Route path="/donatorsList/add" element={<AddDonator />}></Route>
      </Routes>
    </div>
  );
};

export default AdminRouting;
