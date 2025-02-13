// routes.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/Home";
import AboutPage from "../pages/about/About";
import ServicesPage from "../pages/prices/Price";
import GalleryPage from "../pages/gallery/Gallery";
import RegisterPage from "../pages/Authentication/Register";
import LoginPage from "../pages/Authentication/Login";
import ContactPage from "../pages/contact/Contact";
import { LocationPage } from "../pages/contact/Location";
import WeddingPackages from "../pages/services/Wedding";
import SpaServices from "../pages/services/Spa";
import SkincareServices from "../pages/services/SkinCare";
import NailCareServices from "../pages/services/NailCare";
import BookingForm from "../pages/booking/Booking";
import HairCareServices from "../pages/services/HairCare";
import HairRemovalServices from "../pages/services/HairRemoval";
import EyelashServices from "../pages/services/EyeLash";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/price" element={<ServicesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/wedding" element={<WeddingPackages />} />
      <Route path="/spa" element={<SpaServices />} />
      <Route path="/skincare" element={<SkincareServices />} />
      <Route path="/booking" element={<BookingForm />} />
      <Route path="/haircare" element={<HairCareServices />} />
      <Route path="/hair-removal" element={<HairRemovalServices />} />
      <Route path="/eyelashes" element={<EyelashServices />} />
      <Route path="/nailcare" element={<NailCareServices />} />
    </Routes>
  );
};

export default AppRoutes;
