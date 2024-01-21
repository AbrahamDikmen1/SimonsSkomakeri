import React from "react";
import { Button, Divider } from "@mui/material";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import contactPage from "../assets/contactPage.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <div className="container">
        <div
          className="imgAbout"
          style={{
            backgroundImage: `url(${contactPage}`,
            backgroundPosition: "contain",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />

          <Divider style={{ backgroundColor: "white" }} />
          <div className="text-welcome">
            <div className="text2">Välkommen till vår kontaktsida!</div>
            <div className="dvider">
              <Divider />
            </div>
          </div>
        </div>
        <Divider />
        <div className="text-container">
          <div className="top-text">
            Vi är glada att du har hittat till oss och ser fram emot att höra
            från dig. Om du har frågor, förfrågningar eller bara vill säga hej,
            är du mer än välkommen att kontakta oss.{" "}
          </div>

          <div className="boxes">
            <div className="left-text">
              <PhoneIcon sx={{ mr: "17px", fontSize: "2.7rem" }} />
              <p> [Ditt telefonnummer här] </p>
            </div>

            <div className="right-text">
              <LocalPostOfficeIcon sx={{ mr: "17px", fontSize: "2.7rem" }} />
              <p> Öppettider: Måndag - Fredag: 9:00 - 17:00 </p>
            </div>
          </div>

          <div className="bottom-text">
            Vi strävar alltid efter att ge snabba och tillförlitliga svar. Om du
            når oss utanför våra öppettider, återkommer vi så snart vi är
            tillgängliga. Tveka inte att ringa oss om du behöver hjälp, har
            specifika förfrågningar eller bara vill ha en pratstund. Vi
            värdesätter varje interaktion med våra kunder och partners. Tack för
            att du valde att kontakta oss. Vi ser fram emot att höra från dig
            och att erbjuda den bästa möjliga servicen!
          </div>
        </div>
      </div>
    </ContactPageContainer>
  );
};

export default ContactPage;

export const ContactPageContainer = styled.div`
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
