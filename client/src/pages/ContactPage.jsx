import React from "react";
import { Button, Divider } from "@mui/material";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import contactPage from "../assets/contactPage.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import TodayIcon from "@mui/icons-material/Today";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
          <div className="text-container">
       
          </div>
          <Divider style={{ backgroundColor: "white" }} />
        </div>

        <Divider />
        <div className="text-section">
          <div className="top-text">
            Vi är glada att du har hittat till oss och ser fram emot att höra
            från dig. Om du har frågor, förfrågningar eller bara vill säga hej,
            är du mer än välkommen att kontakta oss.{" "}
          </div>

          <div className="boxes">
            <div className="phone">
              <Button style={{ color: "white" }} href="tel:0768134813">
                <PhoneIcon sx={{ mr: "17px", fontSize: "2.7rem" }} />
                <p> 076 813 4813</p>
              </Button>
            </div>

            <div className="time">
              <TodayIcon sx={{ mr: "17px", fontSize: "2.7rem", mt: "1.5vw" }} />
              <p>
                Öppettider: Måndag - Fredag: 10:00 - 18:00
                <br />
                Öppettider: Lör: 10:00 - 14:00
                <br />
                Öppettider: Sön: Stängt
              </p>
            </div>

            <div className="mail">
              <Button
                style={{ color: "white" }}
                href={`mailto:Simonmelkedeli@icloud.com`}
              >
                <LocalPostOfficeIcon sx={{ mr: "17px", fontSize: "2.7rem" }} />

                <p> Simonmelkedeli@icloud.com </p>
              </Button>
            </div>

            <div className="location">
              <LocationOnIcon sx={{ mr: "17px", fontSize: "2.7rem" }} />
              <p> Torggatan 2 | Åstorp </p>
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
  background-color: #131111;
  color: white;

  @media only screen and (min-width: 300px) {
    .container {
      justify-content: center;
      text-align: center;
      width: 100%;
      .text-container {
        text-align: center;
        margin: 10vh auto;
        padding: 1vw;

        .text2 {
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          color: #ffffff;
          margin-bottom: 1.5vh;
          font-size: 150%;
        }
        .dvider {
          background-color: white;
          margin: 0 40% 0 40%;
          height: 2px;
        }
      }

      .text-section {
        text-align: center;
        margin: 10vh auto;
        padding: 1vw;
        .top-text {
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
          padding: 2vh;

          justify-content: center;

          .phone {
            line-height: 3vh;
            display: flex;
            padding: 20px;
            color: white;
            border: 2px solid white;
            justify-content: left;
            text-align: left;
            margin-bottom: 2vw;
          }

          .time {
            line-height: 3vh;
            display: flex;
            padding: 20px;
            color: white;
            border: 2px solid white;
            justify-content: left;
            text-align: left;
            margin-bottom: 2vw;
          }
          .mail {
            line-height: 3vh;
            display: flex;
            padding: 20px;
            color: white;
            border: 2px solid white;
            justify-content: left;
            text-align: left;
            margin-bottom: 2vw;
          }
          .location {
            line-height: 3vh;
            display: flex;
            padding: 20px;
            color: white;
            border: 2px solid white;
            justify-content: left;
            text-align: left;
            margin-bottom: 2vw;
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
  }

  @media only screen and (min-width: 750px) {
    .container {
      justify-content: center;
      text-align: center;

      .text-container {
        text-align: center;
        margin: 10vh auto;
        padding: 1vw;

        .text2 {
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          color: #ffffff;
          margin-bottom: 1.5vh;
          font-size: 300%;
        }
        .dvider {
          background-color: white;
          margin: 0 45% 0 45%;
          height: 2px;
        }
      }
      .text-section {
        text-align: center;
        margin: 10vh auto;
        padding: 1vw;
        .top-text {
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
          padding: 2vh;
          margin: 0 30% 0 30%;
          justify-content: center;

          .phone {
            line-height: 3vh;
            display: flex;
            padding: 20px;
            color: white;
            border: 2px solid white;
            justify-content: left;
            text-align: left;
            margin-bottom: 2vw;
          }

          .time {
            line-height: 3vh;
            display: flex;
            padding: 20px;
            color: white;
            border: 2px solid white;
            justify-content: left;
            text-align: left;
            margin-bottom: 2vw;
          }
          .mail {
            line-height: 3vh;
            display: flex;
            padding: 20px;
            color: white;
            border: 2px solid white;
            justify-content: left;
            text-align: left;
            margin-bottom: 2vw;
          }
          .location {
            line-height: 3vh;
            display: flex;
            padding: 20px;
            color: white;
            border: 2px solid white;
            justify-content: left;
            text-align: left;
            margin-bottom: 2vw;
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
  }
`;
