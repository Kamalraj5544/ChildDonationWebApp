import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import ChildrenList from "./pages/ChildrenList/ChildrenList";
import DonatorsList from "./pages/DonatorsList/DonatorsList";
import PaymentDetails from "./pages/PaymentDetails/PaymentDetails";
import AddChild from "./pages/ChildrenList/AddChild/AddChild";
import AddDonator from "./pages/DonatorsList/AddDonator/AddDonator";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="col">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/childrenList" element={<ChildrenList />}></Route>
            <Route path="/donatorsList" element={<DonatorsList />}></Route>
            <Route path="/paymentDetails" element={<PaymentDetails />}></Route>
            <Route path="/childrenList/add" element={<AddChild />}></Route>
            <Route path="/donatorsList/add" element={<AddDonator />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
