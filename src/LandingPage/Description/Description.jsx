import React from "react";

import "./Desription.css";

import cStudy from "../../assets/african-american-boy-getting-checkup-by-doctor 1.jpg";
import cHealth from "../../assets/baby-s-smiling-happy-when-her-see-tourists 2.jpg";
import clegal from "../../assets/kids-workers-helping-make-traditional-bricks-by-hand-brick-kiln-factory 1.jpg";

const Description = () => {
  return (
    <div className="des-container">
    <div className="bg-des"></div>
      <section className="container d-flex flex-column justify-content-start align-items-center pb-5">
        <h3 className="text-danger fw-bolder fs-1 pt-5 p-4">
          Featured Fundraisers
        </h3>
        <p className="text-white px-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section>

      <section className="container">
        <div className="row row-col-md-1 g-4">
          <div className="col-sm">
            <div className="card text-bg-dark w-100">
              <img src={cHealth} className="card-img" alt="..." />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <p className="fw-bolder fs-4">
                  <strong>Child Study</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card text-bg-dark w-100 border-0">
              <img src={cStudy} className="card-img" alt="..." />
              <div className="card-img-overlay d-flex justify-content-center align-items-end ">
                <p className="fw-bolder fs-4">
                  <strong>Child Health</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card text-bg-dark w-100">
              <img src={clegal} className="card-img" alt="..." />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <p className="fw-bolder fs-4">
                  <strong>Free Legal</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Description;
