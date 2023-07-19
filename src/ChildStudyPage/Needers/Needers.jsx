import React, { useEffect, useState } from "react";

import ChildCard from "../../components/ChildCard/ChildCard";

import backStroryChild from "../../assets/pexels-abhay-pratap-14108494 1.jpg";
import axios from "axios";

import { apiBaseUrl } from "../../BaseUrl";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import MoonLoader from "react-spinners/MoonLoader";

const Needers = ({ children }) => {
  const [childrenArray, setChildrenArray] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    getColumns();
    console.log("Loaded");
  }, [children]);

  const getColumns = async function () {
    await axios
      .get(`${apiBaseUrl}/neethimaan/findChildrenListDetails`)
      .then((res) => {
        console.log(res.data);
        if (res.data.statusCode === 200) setisLoading(false);
        console.log(res.data.data);
        const arr = [...res.data.data].map((obj, i) => {
          return { ...obj, id: i + 1 };
        });
        setChildrenArray(arr);
      })
      .catch((err) => console.log(err));
  };

  const resObj = {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
  };

  return (
    <div className="mx-3">
      <section className="container mt-5">
        <div className="row">
          {!isLoading ? (
            <OwlCarousel
              className="owl-theme"
              responsive={resObj}
              nav
              margin={20}
            >
              {childrenArray.map((childObj) => (
                <ChildCard childObj={childObj} />
              ))}
            </OwlCarousel>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
            <MoonLoader color="red" />
            </div>
          )}
        </div>
      </section>

      <section>
        <h2
          className="fw-bolder fs-2 text-center text-danger my-5"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          Our Back Story
        </h2>

        <div className="row m-0 p-0">
          <div
            className="col-md-6"
            data-aos="fade-down-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <img
              src={backStroryChild}
              alt="childImage"
              className="w-100 h-100"
            />
          </div>
          <div
            className="col-md-6 d-flex justify-content-center flex-column"
            data-aos="fade-up-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <h4 className="fw-bold my-5 text-center">Heart Broken Story</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus
              accumsan tristique nibh orci pharetra elit felis. Imperdiet in
              ipsum massa aenean. Lorem ipsum dolor sit amet consectetur.
              Ullamcorper phasellus accumsan tristique Lorem ipsum dolor sit
              amet consectetur. Ullamcorper phasellus accumsan tristique nibh
              orci pharetra elit felis. Imperdiet in ipsum massa aenean. Lorem
              ipsum dolor sit amet consectetur. Ullamcorper phasellus accumsan
              tristique Lorem ipsum dolor sit amet consectetur. Ullamcorper
              phasellus accumsan tristique nibh orci pharetra elit felis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur. Ullamcorper phasellus
              accumsan tristique nibh orci pharetra elit felis. Imperdiet in
              ipsum massa aenean. Lorem ipsum dolor sit amet consectetur.
              Ullamcorper phasellus accumsan tristique Lorem ipsum dolor sit
              amet consectetur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Needers;
