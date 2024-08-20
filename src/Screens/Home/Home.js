import React from "react";
import "./Home.css";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";

import Banner from "../../Component/Comp Pages/Banner";
import HomeAbout from "../../Component/Comp Pages/HomeAbout";
import Service from "../../Component/Comp Pages/Service";
import HomeGallery from '../../Component/Comp Pages/HomeGallery.jsx'
export default function Home() {
  return (
    <>
      {/*Banner */}
      <Banner />
      
      {/*Home about*/}
      <HomeAbout />

      {/*Services*/}
      <Service />

      {/*Gallery*/}
      <HomeGallery />
      <BottomBar />
    </>
  );
}
