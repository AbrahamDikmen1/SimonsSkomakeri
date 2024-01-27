import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Data from "../data.json";
import CardContent from "@mui/material/CardContent";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { HashLink } from "react-router-hash-link";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
const CardsList = () => {
  return (
    <CardsContainer maxWidth="lg">
      <Grid container spacing={3}>
        {Data.map((result, index) => (
          <Grid item xs={12} md={3} sm={4} key={index}>
            <HashLink smooth to={`/services/${result.id}`}>
              <Card sx={{ maxWidth: 400 }} className="card">
                <CardActionArea>
                  <CardMedia
                    className="img"
                    component="img"
                    image={result.img}
                    alt=""
                    height={250}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {result.des}
                    </Typography>
                    <div className="desc">
                      Läs mer
                      <ArrowForwardIosIcon sx={{ ml: 42 }} fontSize="medium" />
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </HashLink>
          </Grid>
        ))}
      </Grid>
    </CardsContainer>
  );
};

export default CardsList;

export const CardsContainer = styled.div`
  margin: 5vh auto;
  display: flex;

  * {
    text-decoration: none;
  }
  .card {
    /* background-color: transparent; */
    box-shadow: 0 0 10px rgb(69, 101, 126);
    background-color: #d6d1d1;
    backdrop-filter: blur(70px);
    margin: auto;
    display: flex;
    cursor: pointer;

    .img {
      transition: 1s;

      &:hover {
        transform: scale(1.1, 1.1);
      }
    }

    .desc {
      font-size: 20px;
    }
  }
`;
