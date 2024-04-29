import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import TodayIcon from "@mui/icons-material/Today";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Divider } from "@mui/material";
const NewsLatterBox = () => {
  return (
    <div
      className=" items-center mx-auto mb-52 text-center bg-[#2c2a2ae1] p-10 w-fit rounded-lg  "
      data-wow-delay=".2s"
    >
      <p className="text-3xl transparent justify-center text-center text-white mb-10">
        Kontakta oss
      </p>

      <div className="transparent justify-center text-start text-white ">
        Vi är glada att du har hittat till oss och ser fram emot att höra från
        dig. Om du har frågor, förfrågningar eller bara vill säga hej, är du mer
        än välkommen att kontakta oss.{" "}
      </div>
      <Divider
        style={{
          backgroundColor: "#ffffff47",
          marginTop: 15,
        }}
      />
      <div className="mt-10">
        <div className="flex text-center jusify-center mb-10 items-center text-white">
          <div className="rounded-full border-2 border-5px p-2 mr-5">
            <PhoneIcon
              sx={{ fontSize: "2.7rem", backgroundColor: "transparent" }}
              className="rounded-full"
            />
          </div>
          <a
            className="flex text-center items-center "
            style={{ color: "white", backgroundColor: "transparent" }}
            href="tel:+46768134818"
          >
            <p> 076 - 813 48 18</p>
          </a>
        </div>

        <div className="mt-10">
          <div className="flex text-center jusify-between mb-10 items-center text-white ">
            <div className="rounded-full border-2 border-5px p-2 mr-5">
              {" "}
              <TodayIcon
                sx={{ fontSize: "2.7rem", backgroundColor: "transparent" }}
                className="rounded-full"
              />
            </div>

            <p className="text-start ">
              Öppettider: Måndag - Fredag: 10:00 - 18:00
              <br />
              Öppettider: Lör: 10:00 - 14:00
              <br />
              Öppettider: Sön: Stängt
            </p>
          </div>
        </div>

        <div className="flex text-center jusify-center mb-10 items-center text-white">
          <div className="rounded-full border-2 border-5px p-2 mr-5">
            <LocalPostOfficeIcon
              sx={{ fontSize: "2.7rem", backgroundColor: "transparent" }}
              className="rounded-full"
            />{" "}
          </div>
          <a
            className="flex text-center items-center "
            style={{ color: "white", backgroundColor: "transparent" }}
            href={`mailto:Simonmelkedeli@icloud.com`}
          >
            <p> Simonmelkedeli@icloud.com </p>
          </a>{" "}
        </div>

        <div className="flex text-center jusify-center mb-10 items-center text-white">
          <div className="rounded-full border-2 border-5px p-2 mr-5">
            <LocationOnIcon
              sx={{ fontSize: "2.7rem", backgroundColor: "transparent" }}
              className="rounded-full"
            />{" "}
          </div>

          <p> Torggatan 2 | Åstorp </p>
        </div>
      </div>
      <Divider
        style={{
          backgroundColor: "#ffffff47",
          marginBottom: 15,
        }}
      />
      <div className="text-white">
        Vi strävar alltid efter att ge snabba och tillförlitliga svar. Om du når
        oss utanför våra öppettider, återkommer vi så snart vi är tillgängliga.
        Tveka inte att ringa oss om du behöver hjälp, har specifika
        förfrågningar eller bara vill ha en pratstund. Vi värdesätter varje
        interaktion med våra kunder och partners. Tack för att du valde att
        kontakta oss. Vi ser fram emot att höra från dig och att erbjuda den
        bästa möjliga servicen!
      </div>
    </div>
  );
};

export default NewsLatterBox;
