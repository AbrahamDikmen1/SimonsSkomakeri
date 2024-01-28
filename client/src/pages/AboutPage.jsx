import React from "react";
import { Divider } from "@mui/material";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import contactPage from "../assets/servicePage.jpg";
const AboutPage = () => {
  return (
    <AboutPageContainer>
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
          <div className="text-container"></div>
          <Divider style={{ backgroundColor: "white" }} />
        </div>

        <div>
          <div className="text-section">
            <div id="about">
              <h2> Vår Historia </h2>

              <p>
                Simons Sko & Nyckelservice har en stolt historia med över 20 år
                inom branschen för skoreparationer och nyckelkopiering. Sedan
                starten har vi engagerat oss i att leverera högkvalitativa
                tjänster med fokus på professionalism och kundnöjdhet.
              </p>

              <h2> Vår Expertis </h2>
              <p>
                Med över två decennier av erfarenhet är vi stolta över att vara
                experter inom skoreparationer och nyckelkopiering. Vår skickliga
                personal har en djup förståelse för olika skotyper och
                låstekniker, vilket gör oss till din pålitliga partner för att
                hålla dina skor och nycklar i toppskick.
              </p>

              <h2> Vårt Åtagande </h2>
              <p>
                Vi är dedikerade till att erbjuda snabb, pålitlig och kvalitativ
                service till våra kunder. Varje reparation och nyckelkopiering
                behandlas med precision och omsorg, vilket ger dig trygghet och
                tillfredsställelse.
              </p>

              <h2> Varför Välja Oss? </h2>
              <p>
                - Erfarenhet: Med över 20 års erfarenhet kan du lita på vår
                expertis och professionalism.
                <br />
                - Kvalitetsservice: Vi strävar alltid efter att leverera
                högkvalitativa reparationer och nyckelkopieringstjänster.
                <br />- Kundfokus: Din tillfredsställelse är vår högsta
                prioritet. Vi arbetar för att överträffa dina förväntningar.
                <br />- Snabb och Effektiv: Vi förstår vikten av snabba
                lösningar. Vår service är snabb och effektiv för att minimera
                ditt besvär.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutPageContainer>
  );
};

export default AboutPage;

export const AboutPageContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #131111;
  color: white;

  @media only screen and (min-width: 300px) {
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
          font-size: 150%;
        }
        .dvider {
          background-color: white;
          margin: 0 40% 0 40%;
          height: 2px;
        }
      }

      .text-section {
        text-align: left;
        padding: 1vw;
        color: white;

        h2 {
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 17px;
          line-height: 4px;
          margin-top: 2vw;
        }
        h1 {
          text-decoration: underline;
        }
        h4 {
          font-size: 100%;
        }
      }
      #about {
        justify-content: center;
        margin: 0 5% 0 5%;
        text-align: center;
        border: solid 2px #ffffff;
        padding: 2vw;
        margin-bottom: 2vw;
      }

      p {
        color: #ffffff;
        font-family: "Space Mono", Sans-serif;
        font-size: 16px;
        line-height: 28px;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }
  }

  @media only screen and (min-width: 750px) {
    .container {
      justify-content: center;
      text-align: center;
      width: 100%;
      .text-container {
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
        text-align: left;
        padding: 1vw;
        color: white;

        h2 {
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 28px;
          line-height: 4px;
          margin-top: 2vw;
        }
        h1 {
          text-decoration: underline;
        }
        h4 {
          font-size: 100%;
        }
      }
      #about {
        justify-content: center;
        margin: 0 30% 0 30%;
        text-align: center;
        border: solid 2px #ffffff;
        padding: 2vw;
        margin-bottom: 2vw;
      }

      p {
        color: #ffffff;
        font-family: "Space Mono", Sans-serif;
        font-size: 15px;
        line-height: 28px;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }
  }
`;
