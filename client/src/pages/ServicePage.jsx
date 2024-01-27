import React from "react";
import { Divider } from "@mui/material";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import servicePage from "../assets/servicePage.jpg";

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
          <div className="text-container">
            <div className="text2">Simons sko & nyckelservice</div>
            <div className="dvider">
              <Divider />
            </div>
          </div>
          <Divider style={{ backgroundColor: "white" }} />
        </div>

        <div>
          <div className="text-section">
            <div id="keys">
              <h1> Nyckel kopiering </h1>
              <h2>- Hemnycklar </h2>

              <p>
                Vi erbjuder professionell nyckelkopiering för ditt hem, vilket
                inkluderar nycklar till dörrar, fönster och andra lås.
                <br /> Vårt erfarna team kan skapa kopior för olika låstyper för
                att säkerställa din trygghet.
              </p>

              <h2>- Bilnycklar </h2>
              <p>
                Har du förlorat din bilnyckel eller behöver en reservnyckel? Vi
                är specialiserade på kopiering av bilnycklar för olika bilmärken
                och modeller. Snabbt och kostnadseffektivt.
              </p>

              <h2>- Båtnycklar </h2>
              <p>
                Förlorat båtens nycklar? Vi kan hjälpa dig att skapa exakta
                kopior för att du snabbt ska kunna njuta av ditt båtägande igen.
                Våra tjänster omfattar olika båttyper och modeller.
              </p>

              <h2>- Företagsnycklar </h2>
              <p>
                För företag erbjuder vi skräddarsydda lösningar för
                nyckelhantering. Oavsett om det är nycklar till kontor, lager
                eller andra affärslokaler, kan vi tillgodose dina behov.
              </p>
            </div>

            <div id="shoes">
              {" "}
              <h1> Skoreparationer </h1>
              <h2> - Skoreparationer </h2>
              <p>
                Vi erbjuder omfattande skoreparationer för att förlänga
                livslängden på dina favoritskor. Våra skickliga skomakare tar
                hand om allt från sula till häl, och vi använder en mängd olika
                material för att matcha dina skors ursprungliga utseende.
              </p>
              <h2>- Klackbyten </h2>
              <p>
                Behöver dina klackar bytas ut? Vi är specialiserade på
                klackbyten för olika skotyper, inklusive högklackade skor,
                stövlar och sportskor. Få dina skor redo för alla tillfällen.
              </p>
              <h2> - Skinn- och Mockareparationer </h2>
              <p>
                Vårt team är skickligt på att reparera och återställa skinn- och
                mockaskor. Vi arbetar med noggrannhet för att bibehålla skornas
                ursprungliga skönhet och struktur.
              </p>
              <h2>- Dragkedjebyten </h2>
              <p>
                För skor med dragkedjor erbjuder vi dragkedjebyten och
                reparationer. Vi ser till att dina dragkedjor fungerar smidigt
                och håller längre.
              </p>
            </div>

            <div id="batteries">
              {" "}
              <h1> Batteribyten </h1>
              <h2> - Klockbatteribyte </h2>
              <p>
                Behöver din klocka ett nytt batteri? Vi erbjuder snabba och
                pålitliga batteribyten för olika klocktyper och märken. Din
                klocka kommer att vara redo att hålla tiden igen.
              </p>
              <h2>- Bilnyckelbatteribyte </h2>
              <p>
                Har du problem med din bilnyckel? Våra experter utför snabba och
                effektiva batteribyten för bilnycklar, vilket säkerställer att
                du inte hamnar i en situation där du inte kan komma åt din bil.
              </p>
              <h2> - Båtbatteribyte </h2>
              <p>
                För båtägare erbjuder vi batteribyten för olika båttyper. Vi ser
                till att ditt båtbatteri är i toppskick, vilket är avgörande för
                en smidig och pålitlig båtupplevelse.
              </p>
            </div>

            <div id="riding">
              <h1> Ridsport-lagning </h1>
              <h2> - Stövelreparation </h2>
              <p>
                Vi specialiserar oss på reparation av ridstövlar. Vårt erfarna
                team kan hantera allt från sömnad och dragkedjereparation till
                sula och hälreparation. Vi återställer dina stövlar till perfekt
                skick för en bekväm och säker ridupplevelse.
              </p>
              <h2>- Sadelservice </h2>
              <p>
                Behöver din sadel underhåll eller reparation? Vi erbjuder
                professionell service för sadlar, inklusive sömnad, stoppning
                och läderunderhåll. Vårt mål är att säkerställa att både ryttare
                och häst får den bästa möjliga upplevelsen.
              </p>
              <h2> - Läderunderhåll </h2>
              <p>
                Förutom reparationer erbjuder vi också läderunderhållstjänster
                för all din ridutrustning. Vi behandlar och återställer läder
                till dess optimala skick för att öka hållbarheten och estetiken.
              </p>
            </div>
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
        text-align: left;
        padding: 1vw;
        color: white;
        h1 {
          text-decoration: underline;
          font-size: 100%;
        }
        h2 {
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 100%;
          line-height: 4px;
          margin-top: 2vw;
        }

        #keys {
          border: solid 2px #ffffff;
          padding: 2vw;
          margin-bottom: 2vw;
        }
        #shoes {
          border: solid 2px #ffffff;
          padding: 2vw;
          margin-bottom: 2vw;
        }
        #batteries {
          border: solid 2px #ffffff;
          padding: 2vw;
          margin-bottom: 2vw;
        }

        #riding {
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
  }

  @media only screen and (min-width: 750px) {
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
        h1 {
          text-decoration: underline;
          font-size: 200%;
        }
        h2 {
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 150%;
          line-height: 4px;
          margin-top: 2vw;
        }

        #keys {
          border: solid 2px #ffffff;
          padding: 2vw;
          margin-bottom: 2vw;
        }
        #shoes {
          border: solid 2px #ffffff;
          padding: 2vw;
          margin-bottom: 2vw;
        }
        #batteries {
          border: solid 2px #ffffff;
          padding: 2vw;
          margin-bottom: 2vw;
        }

        #riding {
          border: solid 2px #ffffff;
          padding: 2vw;
          margin-bottom: 2vw;
        }
        p {
          color: #ffffff;
          font-family: "Space Mono", Sans-serif;
          font-size: 120%;
          line-height: 28px;
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
      }
    }
  }
`;
