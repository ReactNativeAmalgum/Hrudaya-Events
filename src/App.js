import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import AboutUs from "./Screens/About/AboutUs";
import Contact from "./Screens/Contact/Contact";
import Service from "./Screens/Services/Service";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Corporate_Events from "./Screens/Events/Corporate_Events";
import Family_Events from "./Screens/Events/Family_Events";
import Events from "./Screens/Events/Events";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/family" element={<Family_Events />} />
          <Route path="/events/corporate" element={<Corporate_Events/>} />
        </Routes>
      </div>
    </Router>
  );
}
