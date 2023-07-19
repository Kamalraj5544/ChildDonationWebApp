import React from "react";

import "./ChildCard.css";

import cCardImage from "../../assets/user-icon-person-symbol-human-avatar-3d-render 1.jpg";
import { Link } from "react-router-dom";

const ChildCard = ({ childObj }) => {
  return (
    <div className="card border-0 bg-body-secondary w-100 h-100">
      <img
        src={childObj.imageUrl !== undefined ? childObj.imageUrl : cCardImage}
        className="card-img-top card-image"
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
      <div className="card-body d-flex justify-content-center align-items-center">
        <Link
          to={`/donateInfo/${childObj._id}`}
          className="btn btn-danger fw-bolder"
        >
          Donate Now
        </Link>
        <button className="btn border text-primary ms-3 bg-white">
          <i class="bi bi-share"></i>
        </button>
      </div>
    </div>
  );
};

export default ChildCard;
