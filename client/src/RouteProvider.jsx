import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import { HelmetProvider } from "react-helmet-async";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const RouteProvider = () => {
  return (
    <HelmetProvider>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default RouteProvider;
