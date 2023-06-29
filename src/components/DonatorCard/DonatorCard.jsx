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
      sx={{ maxWidth: 220 }}
      style={{
        backgroundColor: "black",
        marginLeft: "2rem"
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={donatorIcon}
          alt="donator icon"
        />
        <CardContent style={{ height: "85px" }}>
          <Typography gutterBottom variant="h5" component="div">
            <span className="fw-bolder fs-5 text-white">Judes's Immanual</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className="text-danger fw-bolder fs-5 w-100 text-center">
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
