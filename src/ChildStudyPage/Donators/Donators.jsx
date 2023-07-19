import React, { useEffect, useState } from "react";

import DonatorCard from "../../components/DonatorCard/DonatorCard";

import backStoryImage2 from "../../assets/pexels-rdne-stock-project-6647119 1.jpg";
import axios from "axios";

import { apiBaseUrl } from "../../BaseUrl";

import MoonLoader from "react-spinners/MoonLoader";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const Donators = ({ children }) => {
  const [donatorsArray, setDonatorsArray] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    getColumns();
  }, [children]);

  const getColumns = async function () {
    await axios
      .get(`${apiBaseUrl}/neethimaan/findDonatorListDetails`)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.statusCode === 200) setisLoading(false);
        const arr = [...res.data.data].map((obj, i) => {
          return { ...obj, id: i + 1 };
        });
        setDonatorsArray(arr);
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
    992: {
      items: 5,
    },
  };

  return (
    <div className="mt-5">
      <section className="container">
        {!isLoading ? (
          <OwlCarousel
            className="owl-theme"
            responsive={resObj}
            nav
            loop
            autoplay
            autoplaySpeed="1000"
            autoplayHoverPause
            margin={20}
          >
            {
              donatorsArray.map((donator) => (
              <DonatorCard donator={donator} />
            ))
            }
          </OwlCarousel>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <MoonLoader color="red" />
            </div>
        )}
      </section>

      <br />

      <section>
        <h1
          className="fw-bolder fs-1 text-center text-danger my-5"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1300"
        >
          Our Recent Story
        </h1>

        <div className="row m-0 p-0">
          <div
            className="col-md-6 d-flex justify-content-center flex-column"
            data-aos="fade-down-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <h4 className="fw-bold mb-3">Heart Broken Story</h4>
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
          <div
            className="col-md-6"
            data-aos="fade-up-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <img
              src={backStoryImage2}
              alt="childImage"
              className="w-100 h-100 "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donators;
