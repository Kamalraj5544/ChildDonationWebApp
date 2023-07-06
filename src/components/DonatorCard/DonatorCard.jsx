import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import donatorIcon from "../../assets/user-icon-person-symbol-human-avatar-3d-render 1.jpg";

const DonatorCard = () => {
  return (
    <Card
      sx={{ width:"100%"}}
      style={{
        backgroundColor: "black",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={donatorIcon}
          alt="donator icon"
        />
        <CardContent style={{ height: "5rem", padding: ".5rem" }}>
          <Typography gutterBottom component="div">
            <div className="w-100 text-center">
              <span className="fw-normal text-white">Jude's Immanual</span>
            </div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className="text-danger fw-bold w-100 text-center">
              <span>&#8377;</span>
              <span>5000</span>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DonatorCard;
