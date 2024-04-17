import styled from "styled-components";
import landingPageImg from "../assets/landingPage.jpg";
import Navbar from "../components/navbar/Navbar";
import { Divider } from "@mui/material";

import CardsList from "../components/CardsList";
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

        <div className="cards">
          <CardsList />
        </div>
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;

export const LandingPageContainer = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (min-width: 300px) {
    .container {
      width: 100%;
      .text-container {
        text-align: center;
        margin: 10vh auto;

        .text1 {
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
          color: #ffffff;
          margin-bottom: 1vh;
          font-size: 130%;
        }
        .text2 {
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          color: #ffffff;
          margin-bottom: 1.5vh;
          font-size: 160%;
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
      .cards {
      }
    }
  }

  @media only screen and (min-width: 750px) {
    .container {
      width: 100%;
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
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          color: #ffffff;
          margin-bottom: 1.5vh;
          font-size: 240%;
        }
        .dvider {
          background-color: white;
          margin: 0 45% 1vh 45%;
          height: 2px;
        }
        .text3 {
          color: #ffffff;
          font-size: 160%;
        }
      }
      .cards {
      }
    }
  }
`;
