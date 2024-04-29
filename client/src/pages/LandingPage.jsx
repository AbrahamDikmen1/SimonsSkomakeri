import styled from "styled-components";
import landingPageImg from "../assets/landingPage.jpg";
import Navbar from "../components/navbar/Navbar";
import { Divider } from "@mui/material";
import { Button, Typography } from "@material-tailwind/react";

import Services from "../components/Services";
const LandingPage = () => {
  return (
    <>
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
          <div className="container mx-auto  h-full w-full grid-cols-1 place-items-center lg:mt-5 lg:grid-cols-2 ">
            <section className="py-28 ">
              <div className="container mx-auto mb-20 text-center bg-[#2c2a2ae1] p-10 w-fit rounded-lg ">
                <Typography
                  color="blue-gray"
                  className="block antialiased tracking-normal font-sans font-semibold leading-tight text-white mb-4 "
                >
                  <p className="text-3xl mb-5">
                    Simons sko & nyckelservice <br />
                  </p>
                  <p className="text-4xl">
                    {" "}
                    Expertis inom småreparationer och service{" "}
                  </p>
                  <Divider
                    style={{ backgroundColor: "white", margin: "4% 40% 0 40%" }}
                  />
                  <p className="text-2xl mt-3">
                    {" "}
                    Reperationer av skor, kopiering av nycklar m.m
                  </p>
                </Typography>
              </div>
              <div>
                <Services />
              </div>
            </section>
          </div>
        </div>
      </header>
    </>
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
        background-color: #46424252;
        padding: 15px;
        width: 40%;
        border-radius: 8px;
        .text1 {
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
          color: black;
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
