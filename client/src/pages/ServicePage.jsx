import React from "react";
import { Button, Divider } from "@mui/material";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import servicePage from "../assets/servicePage.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

const ServicePage = () => {
  return (
    <ServicePageContainer>
      <div className="container">
        <div
          className="imgAbout"
          style={{
            backgroundImage: `url(${servicePage}`,
            backgroundPosition: "contain",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />

          <Divider style={{ backgroundColor: "white" }} />
          <div className="text-welcome">
            <div className="text2">Lagningar & priser!</div>
            <div className="dvider">
              <Divider />
            </div>
          </div>
        </div>
        <Divider />
        <div className="text-container">
          <div className="advertising">
            <div>icon</div>
            <p>text </p>
          </div>
          <hr className="shareHr" />
          <div className="advertising">
            <div>icon</div>
            <p>text </p>
          </div>
          <hr className="shareHr" />
          <div className="advertising">
            <div>icon</div>
            <p>text </p>
          </div>
          <hr className="shareHr" />
          <div className="advertising">
            <div>icon</div>
            <p>text </p>
          </div>
          <hr className="shareHr" />
          <div className="advertising">
            <div>icon</div>
            <p>text </p>
          </div>
          <hr className="shareHr" />
          <div className="advertising">
            <div>icon</div>
            <p>text </p>
          </div>
          <hr className="shareHr" />
          <div className="advertising">
            <p>text </p>
          </div>
        </div>
      </div>
    </ServicePageContainer>
  );
};

export default ServicePage;

export const ServicePageContainer = styled.div`
  width: 100%;
  display: flex;

  .container {
    width: 100%;
    justify-content: center;

    text-align: center;
  }

  @media only screen and (min-width: 1536px) {
    .imgAbout {
      .text-welcome {
        padding: 5vw;

        .text2 {
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          color: #ffffff;
          margin-bottom: 1.5vh;
          font-size: 300%;
        }
        .dvider {
          background-color: white;
          margin: 0 70vh 1vh 70vh;
          height: 2px;
        }
      }
    }

    .text-container {
      text-align: center;

      background-color: black;
      .text3 {
        color: white;
        font-size: 100%;
      }
    }
  }

  @media only screen and (min-width: 1920px) {
    .imgAbout {
      .text-welcome {
        padding: 5vw;

        .text2 {
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          color: #ffffff;
          margin-bottom: 1.5vh;
          font-size: 300%;
        }
        .dvider {
          background-color: white;
          margin: 0 70vh 1vh 70vh;
          height: 2px;
        }
      }
    }

    .text-container {
      background-color: #131111;
      padding: 100px;
      .top-text {
        margin: 0 30vh 1vh 30vh;
        font-size: 140%;
        color: white;
        line-height: 1.9rem;
        display: block;
        letter-spacing: 1px;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0em;
        margin-inline-end: 0em;
      }
      .boxes {
        display: flex;
        padding: 2vh;
        justify-content: center;
        .left-text {
          display: flex;
          padding: 20px;
          margin-right: 2vh;
          color: white;
          border: 2px solid white;
          justify-content: left;
        }

        .right-text {
          display: flex;
          padding: 20px;
          margin-left: 2vh;
          color: white;
          border: 2px solid white;
          justify-content: right;
        }
      }

      .bottom-text {
        font-size: 140%;
        color: white;
        line-height: 1.9rem;
        display: block;
        letter-spacing: 1px;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0em;
        margin-inline-end: 0em;
      }
    }
  }
`;
