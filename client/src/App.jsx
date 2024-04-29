import React from "react";
import RouteProvider from "./RouteProvider";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <RouteProvider />
      <Footer />
    </>
  );
}

export default App;
