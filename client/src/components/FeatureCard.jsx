import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { HashLink } from "react-router-hash-link";
import { CardActionArea } from "@mui/material";
export function FeatureCard({ id, result, des, title, img }) {
  return (
    <Card color="transparent justify-center text-center ">
      <HashLink smooth to={`/services/${id}`}>
        <Card sx={{ minwidth: 250 }} className="card ">
          <CardActionArea>
            <CardMedia
              className="img"
              component="img"
              image={img}
              alt=""
              style={{ minHeight: 300 }}
            />

            <CardContent style={{ minHeight: 110 }}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {des}
              </Typography>
              <div className="desc">Läs mer</div>
            </CardContent>
          </CardActionArea>
        </Card>
      </HashLink>
    </Card>
  );
}

export default FeatureCard;
