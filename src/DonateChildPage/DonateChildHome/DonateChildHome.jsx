import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./DonateChildHome.css";

import MainNavbar from "../../components/MainNavbar/MainNavbar";
import BackroundSection from "../../components/BackroundSection/BackgroundSection";
import ChildCard from "../../components/ChildCard/ChildCard";
import DonateFormSection from "../DonateFormSection/DonateFormSection";
import Footer from "../../components/Footer/Footer";

import cStudyBg2 from "../../assets/boy-lay-flat-laying-his-hands-belly-forehead-dry-soil 1.jpg";
import cCardImage from "../../assets/medium-shot-happy-kids-posing 1.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";

import { apiBaseUrl } from "../../BaseUrl";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const DonateChildHome = () => {
  const { childId } = useParams();

  const [childObj, setChildObj] = useState({});

  const [childrenArray, setChildrenArray] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getChildDetails = async () => {
    const response = await axios.get(
      `${apiBaseUrl}/neethimaan/findOneChildrenListDetails?_id=${childId}`
    );
    console.log(response);
    setChildObj(response.data.data)
  };

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
  useEffect(() => {
    AOS.init();
    window.scroll(0, 0);
    getChildDetails();
    getColumns();
  }, []);

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
    <div className="donateChild-wrapper">
      <MainNavbar />
      <BackroundSection image={cStudyBg2} contentName="Child Study" />

      <section className="container pb-5">
        <div className="row">
          <div
            className="col-md-8"
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <DonateFormSection />
          </div>
          <div
            className="col-md-4"
            data-aos="zoom-in-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
          >
            <div className="card border-0 bg-body-secondary">
              <img
                src={childObj.imageUrl}
                className="card-img-top"
                alt="childImage"
              />
              <div className="card-body">
                <h5 className="card-title fw-bolder fs-3">{childObj.name}</h5>
                <p className="card-text ">
                  <strong>Age:</strong>
                  <span>{childObj.age}</span>
                </p>
                <p className="card-text">{childObj.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-5">
        <h1 className="fw-bolder text-danger text-center mb-5">
          Related Cases
        </h1>

        <div className="row m-0 p-0 g-3">
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
            {!isLoading ? (
              childrenArray.map((childObj) => <ChildCard childObj={childObj} />)
            ) : (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            )}
          </OwlCarousel>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default DonateChildHome;
