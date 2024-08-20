import React from "react";
import "../Home/Home.css";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import { Swiper, SwiperSlide } from "swiper/react";
import catering from "../../Component/Images/catering.jpg";
import decoration from "../../Component/Images/decoration.jpg";
import venue from "../../Component/Images/venue.jpg";
import video from "../../Component/Images/photography.jpg";
import celebrity from "../../Component/Images/celebrity.jpg";
import sangeet from "../../Component/Images/sangeet.jpg";
import live_band from "../../Component/Images/live_band.jpg";
import theme_deco from "../../Component/Images/theme.jpg";
import make_up from "../../Component/Images/mehndi.jpeg";
// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper/modules";
import Service_sec_1 from "../../Component/Comp Pages/Service_sec_1";
import Secrvice_sec_2 from "../../Component/Comp Pages/Secrvice_sec_2";
import { useParams } from "react-router-dom";
import { ServiceData } from "../../Constant/ServiceData";

export default function Service() {

  const {id} = useParams();
  const serviceF = ServiceData.find((service) => service.id == id);
  console.log(serviceF)
  return (
    <>
      <Service_sec_1 />
      <Secrvice_sec_2 service={serviceF} />

      <BottomBar />
    </>
  );
}
