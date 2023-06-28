import React from "react";
import MainNavbar from "../../components/MainNavbar/MainNavbar";

const MainHome = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <section className="container-fluid vh-100">
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-start align-items-center">
            <p>Give Food And Medical Care To Abandoned Elderly Parents</p>
            <p>Help Carmel Save Her From Malnutrition And Illness</p>
            <button className="btn bg-red text-white">Donate Now</button>
          </div>
          <div className="col-6"></div>
        </div>
      </section>
    </>
  );
};

export default MainHome;
