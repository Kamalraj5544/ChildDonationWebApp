import React from "react";
import "./Home.css";

import { BiSolidBookReader } from "react-icons/bi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiBreakingChain } from "react-icons/gi";
import { FaDonate } from "react-icons/fa";
// import LineChart from "../../components/LineChart/LineChart";

const Home = () => {
  return (
    <div className="p-2 border rounded container-fluid m-3 w-75">
      <div className="container-fluid d-flex justify-content-between align-items-center ">
        <div className="d-flex flex-column justify-content-around align-items-center p-2 border bg-lightBlue box-size">
          <div className="home-icon">
            <BiSolidBookReader />
          </div>
          <div className="content-name">Child Study</div>
          <div className="content-number">05</div>
        </div>
        <div className="d-flex flex-column justify-content-around align-items-center p-2 border bg-lightRed box-size">
          <div className="home-icon">
            <FaHandHoldingMedical />
          </div>
          <div className="content-name">Child Health</div>
          <div className="content-number">05</div>
        </div>
        <div className="d-flex flex-column justify-content-around align-items-center p-2 border bg-yellow box-size ">
          <div className="home-icon">
            <GiBreakingChain />
          </div>
          <div className="content-name">Free Legal</div>
          <div className="content-number">05</div>
        </div>
        <div className="d-flex flex-column justify-content-around align-items-center p-2 border bg-blue box-size ">
          <div className="home-icon">
            <FaDonate />
          </div>
          <div className="content-name">Donator</div>
          <div className="content-number">05</div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <LineChart />
      </div> */}
    </div>
  );
};

export default Home;
