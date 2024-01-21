import styled from "styled-components";
import landingPageImg from "../assets/landingPage.jpg";

import Navbar from "../components/navbar/Navbar";
import { Button, Divider } from "@mui/material";
const LandingPage = () => {
  return (
    <LandingPageContainer>
      <div
        className="container"
        style={{
          backgroundImage: `url(${landingPageImg}`,
          backgroundPosition: "contain",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Divider style={{ backgroundColor: "white" }} />
        <div className="text-container">
          <div className="text1">Simons sko & nyckelservice</div>
          <div className="text2">Expertis inom småreparationer och service</div>
          <div className="dvider">
            <Divider />
          </div>

          <div className="text3">
            Reperationer av skor, kopiering av nycklar m.m
          </div>
        </div>

        <div className="landing-btn">
          <StyledButton>Kontaka oss</StyledButton>
        </div>

        <div className="cards">
          <div className="card-1"> 1</div>
          <div className="card-1"> 1</div>
          <div className="card-1"> 1</div>
        </div>
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;

export const LandingPageContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  .container {
    width: 100%;

    .landing-btn {
      text-align: right;
      justify-content: right;
    }
  }
  .cards {
    display: flex;
  }

  @media only screen and (min-width: 380px) {
    .text-container {
      text-align: center;
      margin: 10vh auto;

      .text1 {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        color: #ffffff;
        margin-bottom: 1vh;
        font-size: 120%;
      }
      .text2 {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        color: #ffffff;
        margin-bottom: 1.5vh;
        font-size: 150%;
      }
      .dvider {
        background-color: white;
        margin: 0 40% 0 40%;
        height: 2px;
      }
      .text3 {
        color: #ffffff;
        font-size: 100%;
      }
    }
  }

  @media only screen and (min-width: 780px) {
    .text-container {
      text-align: center;
      margin: 10vh auto;

      .text1 {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        color: #ffffff;
        margin-bottom: 1vh;
        font-size: 140%;
      }
      .text2 {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        color: #ffffff;
        margin-bottom: 1.5vh;
        font-size: 190%;
      }
      .dvider {
        background-color: white;
        margin: 0 60vh 1vh 60vh;
        height: 2px;
      }
      .text3 {
        color: #ffffff;
        font-size: 120%;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    .text-container {
      text-align: center;
      margin: 10vh auto;

      .text1 {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        color: #ffffff;
        margin-bottom: 1vh;
        font-size: 180%;
      }
      .text2 {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        color: #ffffff;
        margin-bottom: 1.5vh;
        font-size: 250%;
      }
      .dvider {
        background-color: white;
        margin: 0 70vh 1vh 70vh;
        height: 2px;
      }
      .text3 {
        color: #ffffff;
        font-size: 140%;
      }
    }
  }
  @media only screen and (min-width: 1536px) {
    .text-container {
      text-align: center;
      margin: 10vh auto;

      .text1 {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        color: #ffffff;
        margin-bottom: 1vh;
        font-size: 200%;
      }
      .text2 {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        color: #ffffff;
        margin-bottom: 1.5vh;
        font-size: 300%;
      }
      .dvider {
        background-color: white;
        margin: 0 80vh 1vh 80vh;
        height: 3px;
      }
      .text3 {
        color: #ffffff;
        font-size: 160%;
      }
    }
  }
  @media only screen and (min-width: 1920px) {
    .text-container {
      text-align: center;
      margin: 10vh auto;

      .text1 {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        color: #ffffff;
        margin-bottom: 1vh;
        font-size: 200%;
      }
      .text2 {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        color: #ffffff;
        margin-bottom: 1.5vh;
        font-size: 300%;
      }
      .dvider {
        background-color: white;
        margin: 0 90vh 1vh 90vh;
        height: 3px;
      }
      .text3 {
        color: #ffffff;
        font-size: 160%;
      }
    }
  }
`;
const StyledButton = styled(Button)`
  @media only screen and (min-width: 1024px) and (max-width: 2494px) {
    && {
      background-color: #584528;
      color: white;
      border: 1px solid white;
      border-radius: 10px;
      text-transform: none;
      font-size: 2em;
      line-height: 1.4;
      position: relative;
      display: inline-flex;
      align-items: center;
      letter-spacing: 1px;
      white-space: nowrap;
      padding: 0 10.5px;
      margin-right: 10rem;
      &:hover {
        color: white;
        border: 1px solid white;
        background-color: #8d6341;
      }
    }
  }

  @media only screen and (min-width: 300px) and (max-width: 1024px) {
    && {
      background-color: #757b9c;
      color: white;
      border-radius: 7px;
      text-transform: none;
      font-size: 1.1em;
      line-height: 1.4;
      position: relative;
      display: inline-flex;
      align-items: center;
      letter-spacing: 1px;
      white-space: nowrap;
      padding: 0 22.5px;
      margin-right: 2rem;
      &:hover {
        color: white;
        background-color: #565d81;
      }
    }
  }
`;
