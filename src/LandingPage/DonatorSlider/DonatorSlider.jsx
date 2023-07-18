import React, { useEffect, useState } from "react";

import { apiBaseUrl } from "../../BaseUrl";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import DonatorCard from "../../components/DonatorCard/DonatorCard";

import "./DonatorSlider.css";

import axios from "axios";

const DonatorSlider = () => {
  const [donatorsArray, setDonatorsArray] = useState([]);

  useEffect(() => {
    getColumns();
  }, []);

  const getColumns = async function () {
    await axios
      .get(`${apiBaseUrl}/neethimaan/findDonatorListDetails`)
      .then((res) => {
        console.log(res.data.data);
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
    370: {
      items: 2,
    },
    550: {
      items: 3,
    },
    978: {
      items: 4,
    },
  };

  return (
    <div className="row mx-3">
      <div className="col-md-4">
        <section data-aos="fade-right" data-aos-duration="3000">
          <h3 className="fs-2 fw-bolder text-danger mb-4">Our Donators</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </section>
      </div>
      <div className="col-md-8">
        <div className="row g-4" data-aos="fade-left" data-aos-duration="3000">
          <OwlCarousel
            className="owl-theme"
            responsive={resObj}
            nav
            dots={false}
            autoplay
            autoplaySpeed={2000}
            autoplayHoverPause
            margin={8}
          >
            {donatorsArray.map((donator) => (
              <DonatorCard donator={donator} />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default DonatorSlider;
