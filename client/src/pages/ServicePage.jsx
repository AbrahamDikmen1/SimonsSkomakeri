import React from "react";
import { Divider } from "@mui/material";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import servicePage from "../assets/servicePage.jpg";
import { Button, Typography } from "@material-tailwind/react";
import landingPageImg from "../assets/servicePage.jpg";
import { KeyIcon } from "@heroicons/react/24/solid";
import { GiChelseaBoot } from "react-icons/gi";

import { GiSteeltoeBoots } from "react-icons/gi";
import { PiWatchBold } from "react-icons/pi";
const ServicePage = () => {
  return (
    <header className="relative min-h-screen w-full">
      <div
        className="grid !min-h-[49rem] px-2"
        style={{
          backgroundImage: `url(${landingPageImg}`,
          backgroundPosition: "contain",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto grid max-w-8xl grid-cols-1 gap-9 gap-y-16 md:grid-cols-1 justify-center text-center ">
          <section className="py-28">
            <div className="items-center mx-auto mb-52 text-center bg-[#2c2a2ae1] p-10 w-fit rounded-lg ">
              <Typography
                color="blue-gray"
                className="block antialiased tracking-normal font-sans font-semibold leading-tight text-white "
              >
                <p className="text-4xl"> Sortiment</p>
                <Divider
                  style={{ backgroundColor: "white", margin: "2% 40% 0 40%" }}
                />
                <p className="text-2xl mt-3">
                  Nyckel kopiering, Skoreperationer, Batteribyten &
                  Ridsportslagning
                </p>
              </Typography>
            </div>

            <div className="transparent justify-center text-start text-white ">
              <Typography
                id="keys"
                className=" bg-[#2c2a2ae1] p-10 rounded-lg mb-20 "
              >
                <div>
                  <div className="flex justify-between text-center mb-10  items-center">
                    <p className="text-5xl">Nyckel kopiering </p>
                    <KeyIcon className="size-20 " />
                  </div>
                  <Divider
                    style={{
                      backgroundColor: "#ffffff47",
                    }}
                  />
                  <div>
                    <p className="text-4xl mb-4 mt-5"> Hemnycklar </p>{" "}
                    <p className="text-2xl mb-20">
                      Vi erbjuder professionell nyckelkopiering för ditt hem,
                      vilket inkluderar nycklar till dörrar, fönster och andra
                      lås.
                      <br /> Vårt erfarna team kan skapa kopior för olika
                      låstyper för att säkerställa din trygghet.
                    </p>{" "}
                    <Divider
                      style={{
                        backgroundColor: "#ffffff47",
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-4xl mb-4 mt-5">Bilnycklar </p>
                    <p className="text-2xl mb-20">
                      Har du endast en bilnyckel och behöver en reserv? Vi gör
                      det enkelt för dig att få en extra kopia av din bilnyckel
                      utan att behöva besöka en fysisk butik. Vår smidiga
                      online-tjänst ger dig möjlighet att kopiera din bilnyckel
                      med några enkla steg.
                    </p>{" "}
                    <Divider
                      style={{
                        backgroundColor: "#ffffff47",
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-4xl mb-4 mt-5">Kodade bilnycklar</p>
                    <p className="text-2xl ">
                      Vår expertis sträcker sig bortom vanlig nyckelkopiering -
                      vi erbjuder också avancerad kodning för att skapa kopior
                      av dina kodade bilnycklar.
                    </p>
                  </div>
                </div>
              </Typography>
              <Typography
                id="shoes"
                className=" bg-[#2c2a2ae1] p-10 rounded-lg mb-20 "
              >
                <div>
                  <div className="flex justify-between text-center mb-10 items-center">
                    <p className="text-5xl"> Reparationer </p>
                    <GiChelseaBoot className="size-20" />
                  </div>
                  <Divider
                    style={{
                      backgroundColor: "#ffffff47",
                    }}
                  />
                  <div>
                    <p className="text-4xl mb-4 mt-5"> Skoreparationer </p>{" "}
                    <p className="text-2xl mb-20">
                      Vi erbjuder omfattande skoreparationer för att förlänga
                      livslängden på dina favoritskor. Våra skickliga skomakare
                      tar hand om allt från sula till häl, och vi använder en
                      mängd olika material för att matcha dina skors
                      ursprungliga utseende.
                    </p>{" "}
                    <Divider
                      style={{
                        backgroundColor: "#ffffff47",
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-4xl mb-4 mt-5">Klackbyten </p>
                    <p className="text-2xl mb-20">
                      Behöver dina klackar bytas ut? Vi är specialiserade på
                      klackbyten för olika skotyper, inklusive högklackade skor,
                      stövlar och sportskor. Få dina skor redo för alla
                      tillfällen.
                    </p>{" "}
                    <Divider
                      style={{
                        backgroundColor: "#ffffff47",
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-4xl mb-4 mt-5">
                      Skinn- och Mockareparationer
                    </p>
                    <p className="text-2xl mb-20">
                      Vårt team är skickligt på att reparera och återställa
                      skinn- och mockaskor. Vi arbetar med noggrannhet för att
                      bibehålla skornas ursprungliga skönhet och struktur.
                    </p>
                    <Divider
                      style={{
                        backgroundColor: "#ffffff47",
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-4xl mb-4 mt-5">Dragkedjebyten </p>
                    <p className="text-2xl">
                      För skor med dragkedjor erbjuder vi dragkedjebyten och
                      reparationer. Vi ser till att dina dragkedjor fungerar
                      smidigt och håller längre.
                    </p>{" "}
                  </div>
                </div>
              </Typography>{" "}
              <Typography
                id="batteries"
                className=" bg-[#2c2a2ae1] p-10 rounded-lg mb-20 "
              >
                <div>
                  <div className="flex justify-between text-center mb-10  items-center">
                    <p className="text-5xl">Batteribyten </p>
                    <PiWatchBold className="size-20 " />
                  </div>
                  <Divider
                    style={{
                      backgroundColor: "#ffffff47",
                    }}
                  />
                  <div>
                    <p className="text-4xl mb-4 mt-5"> Klockbatteribyte </p>{" "}
                    <p className="text-2xl mb-20">
                      Behöver din klocka ett nytt batteri? Vi erbjuder snabba
                      och pålitliga batteribyten för olika klocktyper och
                      märken. Din klocka kommer att vara redo att hålla tiden
                      igen.
                    </p>{" "}
                    <Divider
                      style={{
                        backgroundColor: "#ffffff47",
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-4xl mb-4 mt-5">Bilnyckelbatteribyte</p>
                    <p className="text-2xl ">
                      Har du problem med din bilnyckel? Våra experter utför
                      snabba och effektiva batteribyten för bilnycklar, vilket
                      säkerställer att du inte hamnar i en situation där du inte
                      kan komma åt din bil.
                    </p>
                  </div>
                </div>
              </Typography>{" "}
              <Typography
                id="riding"
                className=" bg-[#2c2a2ae1] p-10 rounded-lg mb-20"
              >
                <div>
                  <div className="flex justify-between text-center mb-10 items-center">
                    <p className="text-5xl">Ridsport-lagning </p>
                    <GiSteeltoeBoots className="size-20 " />
                  </div>
                  <Divider
                    style={{
                      backgroundColor: "#ffffff47",
                    }}
                  />
                  <div>
                    <p className="text-4xl mb-4 mt-5"> Stövelreparation </p>{" "}
                    <p className="text-2xl mb-20">
                      Vi specialiserar oss på reparation av ridstövlar. Vårt
                      erfarna team kan hantera allt från sömnad och
                      dragkedjereparation till sula och hälreparation. Vi
                      återställer dina stövlar till perfekt skick för en bekväm
                      och säker ridupplevelse.
                    </p>{" "}
                    <Divider
                      style={{
                        backgroundColor: "#ffffff47",
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-4xl mb-4 mt-5">Sadelservice </p>
                    <p className="text-2xl mb-20">
                      Behöver din sadel underhåll eller reparation? Vi erbjuder
                      professionell service för sadlar, inklusive sömnad,
                      stoppning och läderunderhåll. Vårt mål är att säkerställa
                      att både ryttare och häst får den bästa möjliga
                      upplevelsen.
                    </p>{" "}
                    <Divider
                      style={{
                        backgroundColor: "#ffffff47",
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-4xl mb-4 mt-5">Läderunderhåll</p>
                    <p className="text-2xl ">
                      Förutom reparationer erbjuder vi också
                      läderunderhållstjänster för all din ridutrustning. Vi
                      behandlar och återställer läder till dess optimala skick
                      för att öka hållbarheten och estetiken.
                    </p>
                  </div>
                </div>
              </Typography>{" "}
            </div>
          </section>
        </div>
      </div>
    </header>
  );
};

export default ServicePage;
