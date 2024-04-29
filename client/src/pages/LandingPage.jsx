import landingPageImg from "../assets/landingPage.jpg";
import { Divider } from "@mui/material";
import { Typography } from "@material-tailwind/react";
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
