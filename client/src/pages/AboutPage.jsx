import React from "react";

import servicePage from "../assets/servicePage.jpg";
import { Typography } from "@material-tailwind/react";
import { Divider } from "@mui/material";
const AboutPage = () => {
  return (
    <>
      <header className="relative min-h-screen w-full">
        <div
          className="grid !min-h-[49rem] px-2"
          style={{
            backgroundImage: `url(${servicePage}`,
            backgroundPosition: "contain",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto h-full w-full grid-cols-1 place-items-center lg:mt-5 lg:grid-cols-1 ">
            <section className="py-28 ">
              <div className="container mx-auto mb-20 text-center bg-[#2c2a2ae1] p-10 w-fit rounded-lg ">
                <Typography
                  color="blue-gray"
                  className="block antialiased tracking-normal font-sans font-semibold leading-tight text-white mb-4 "
                >
                  <p className="text-4xl">Om Simons sko & nyckelservice</p>
                </Typography>
              </div>
            </section>
            <div className="transparent mx-auto  justify-center  text-start text-white mb-20 ">
              <Typography className="bg-[#2c2a2ae1] p-10 rounded-lg text-center  ">
                <div id="about">
                  <p className="text-4xl mb-6"> Vår Historia </p>

                  <p className="text-2xl mb-12 ">
                    Simons Sko & Nyckelservice har en stolt historia med över 20
                    år inom branschen för skoreparationer och nyckelkopiering.
                    Sedan starten har vi engagerat oss i att leverera
                    högkvalitativa tjänster med fokus på professionalism och
                    kundnöjdhet.
                  </p>
                  <Divider
                    style={{
                      backgroundColor: "#ffffff47",
                      margin: "2% 20% 2% 20%",
                    }}
                  />
                  <p className="text-4xl mb-6"> Vår Expertis </p>
                  <p className="text-2xl mb-12 ">
                    Med över två decennier av erfarenhet är vi stolta över att
                    vara experter inom skoreparationer och nyckelkopiering. Vår
                    skickliga personal har en djup förståelse för olika skotyper
                    och låstekniker, vilket gör oss till din pålitliga partner
                    för att hålla dina skor och nycklar i toppskick.
                  </p>
                  <Divider
                    style={{
                      backgroundColor: "#ffffff47",
                      margin: "2% 20% 2% 20%",
                    }}
                  />
                  <p className="text-4xl mb-6"> Vårt Åtagande </p>

                  <p className="text-2xl mb-12">
                    Vi är dedikerade till att erbjuda snabb, pålitlig och
                    kvalitativ service till våra kunder. Varje reparation och
                    nyckelkopiering behandlas med precision och omsorg, vilket
                    ger dig trygghet och tillfredsställelse.
                  </p>
                  <Divider
                    style={{
                      backgroundColor: "#ffffff47",
                      margin: "2% 20% 2% 20%",
                    }}
                  />
                  <p className="text-4xl mb-6 "> Varför Välja Oss? </p>
                  <p className="text-2xl mb-12">
                    <p>
                      - Erfarenhet: Med över 20 års erfarenhet kan du lita på
                      vår expertis och professionalism.
                    </p>
                    <br />
                    <p>
                      - Kvalitetsservice: Vi strävar alltid efter att leverera
                      högkvalitativa reparationer och nyckelkopieringstjänster.
                    </p>
                    <p>
                      <br />- Kundfokus: Din tillfredsställelse är vår högsta
                      prioritet. Vi arbetar för att överträffa dina
                      förväntningar.
                    </p>
                    <p>
                      <br />- Snabb och Effektiv: Vi förstår vikten av snabba
                      lösningar. Vår service är snabb och effektiv för att
                      minimera ditt besvär.
                    </p>
                  </p>
                </div>
              </Typography>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AboutPage;
