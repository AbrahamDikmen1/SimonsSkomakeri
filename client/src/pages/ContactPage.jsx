import React from "react";

import Contact from "../components/Contact";
import { Typography } from "@material-tailwind/react";
import landing from "../assets/contactPage.jpg";

const ContactPage = () => {
  return (
    <>
      <header className="relative min-h-screen w-full">
        <div
          className="grid !min-h-[49rem] px-2"
          style={{
            backgroundImage: `url(${landing}`,
            backgroundPosition: "contain",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto grid max-w-8xl grid-cols-1 gap-9 gap-y-16 md:grid-cols-1 justify-center text-center ">
            <section className="py-28 ">
              <div className="container mx-auto  text-center bg-[#2c2a2ae1] p-10 w-fit rounded-lg ">
                <Typography
                  color="blue-gray"
                  className="block antialiased tracking-normal font-sans font-semibold leading-tight text-white mb-4 "
                >
                  <p className="text-4xl">Välkommen att kontakta oss</p>
                </Typography>
              </div>
            </section>
            <Contact />
          </div>
        </div>
      </header>
    </>
  );
};

export default ContactPage;

// export const ContactPageContainer = styled.div`
//   width: 100%;
//   display: flex;
//   background-color: #ffffff;
//   color: #ece2e2;

//   @media only screen and (min-width: 300px) {
//     .container {
//       justify-content: center;
//       text-align: center;
//       width: 100%;
//       .text-container {
//         text-align: center;
//         margin: 10vh auto;
//         padding: 1vw;

//         .text2 {
//           font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
//             sans-serif;
//           color: #000000;
//           margin-bottom: 1.5vh;
//           font-size: 150%;
//         }
//         .dvider {
//           color: #000000;
//           margin: 0 40% 0 40%;
//           height: 2px;
//         }
//       }

//       .text-section {
//         text-align: center;
//         margin: 10vh auto;
//         padding: 1vw;
//         .top-text {
//           font-size: 140%;
//           color: #000000;
//           line-height: 1.9rem;
//           display: block;
//           letter-spacing: 1px;
//           margin-block-start: 1em;
//           margin-block-end: 1em;
//           margin-inline-start: 0em;
//           margin-inline-end: 0em;
//         }
//         .boxes {
//           padding: 2vh;

//           justify-content: center;

//           .phone {
//             line-height: 3vh;
//             display: flex;
//             padding: 20px;
//             color: #000000;
//             border: 2px solid black;
//             justify-content: left;
//             text-align: left;
//             margin-bottom: 2vw;
//           }

//           .time {
//             line-height: 3vh;
//             display: flex;
//             padding: 20px;
//             color: #000000;
//             border: 2px solid black;
//             justify-content: left;
//             text-align: left;
//             margin-bottom: 2vw;
//           }
//           .mail {
//             line-height: 3vh;
//             display: flex;
//             padding: 20px;
//             color: #000000;
//             border: 2px solid black;
//             justify-content: left;
//             text-align: left;
//             margin-bottom: 2vw;
//           }
//           .location {
//             line-height: 3vh;
//             display: flex;
//             padding: 20px;
//             color: #000000;
//             border: 2px solid black;
//             justify-content: left;
//             text-align: left;
//             margin-bottom: 2vw;
//           }
//         }

//         .bottom-text {
//           font-size: 140%;
//           color: #000000;
//           line-height: 1.9rem;
//           display: block;
//           letter-spacing: 1px;
//           margin-block-start: 1em;
//           margin-block-end: 1em;
//           margin-inline-start: 0em;
//           margin-inline-end: 0em;
//         }
//       }
//     }
//   }

//   @media only screen and (min-width: 750px) {
//     .container {
//       justify-content: center;
//       text-align: center;

//       .text-container {
//         text-align: center;
//         margin: 10vh auto;
//         padding: 1vw;

//         .text2 {
//           font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
//             sans-serif;
//           color: #000000;
//           margin-bottom: 1.5vh;
//           font-size: 300%;
//         }
//         .dvider {
//           background-color: #000000;
//           margin: 0 45% 0 45%;
//           height: 2px;
//         }
//       }
//       .text-section {
//         text-align: center;
//         margin: 10vh auto;
//         padding: 1vw;
//         margin: 0 30% 0 30%;
//         .top-text {
//           font-size: 140%;
//           color: #000000;
//           line-height: 1.9rem;
//           display: block;
//           letter-spacing: 1px;
//           margin-block-start: 1em;
//           margin-block-end: 1em;
//           margin-inline-start: 0em;
//           margin-inline-end: 0em;
//         }
//         .boxes {
//           padding: 2vh;
//           justify-content: center;

//           .phone {
//             line-height: 3vh;
//             display: flex;
//             padding: 20px;
//             color: #000000;
//             border: 2px solid black;
//             justify-content: left;
//             text-align: left;
//             margin-bottom: 2vw;
//           }

//           .time {
//             line-height: 3vh;
//             display: flex;
//             padding: 20px;
//             color: #000000;
//             border: 2px solid black;
//             justify-content: left;
//             text-align: left;
//             margin-bottom: 2vw;
//           }
//           .mail {
//             line-height: 3vh;
//             display: flex;
//             padding: 20px;
//             color: #000000;
//             border: 2px solid black;
//             justify-content: left;
//             text-align: left;
//             margin-bottom: 2vw;
//           }
//           .location {
//             line-height: 3vh;
//             display: flex;
//             padding: 20px;
//             color: #000000;
//             border: 2px solid black;
//             justify-content: left;
//             text-align: left;
//             margin-bottom: 2vw;
//           }
//         }

//         .bottom-text {
//           font-size: 140%;
//           color: #000000;
//           line-height: 1.9rem;
//           display: block;
//           letter-spacing: 1px;
//           margin-block-start: 1em;
//           margin-block-end: 1em;
//           margin-inline-start: 0em;
//           margin-inline-end: 0em;
//         }
//       }
//     }
//   }
// `;
