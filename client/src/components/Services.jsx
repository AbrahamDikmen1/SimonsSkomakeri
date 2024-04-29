import React from "react";
import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    id: "#keys",
    title: "Nyckelkopiering",
    des: "Nyckelkopiering till hus, bil m.m",
    img: "/assets/keys.jpg",
  },
  {
    id: "#shoes",
    title: "Skoreparationer",
    des: "Lagning av skor, sulor, klackar m.m",
    img: "/assets/shoes.jpg",
  },
  {
    id: "#batteries",
    title: "Batteribyten",
    des: "Batteribyten till klockor m.m",
    img: "/assets/watch.jpg",
  },
  {
    id: "#riding",
    title: "Ridsport-lagning",
    des: "Lagning av utrustning, stövlar m.m",
    img: "/assets/sadel.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto grid max-w-8xl grid-cols-1 gap-9 gap-y-16 md:grid-cols-4 justify-center text-center  ">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
};
export default Services;
