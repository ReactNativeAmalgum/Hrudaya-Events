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

export default function Service() {
  return (
    <>
      <NavBar />
      <div className="heading-cont">
        <h1>OUR SERVICES</h1>
        <h3>Provide Everything You Need</h3>
      </div>
      <section className="section3-body-cont">
        <div className="h1-cont">
          <h1>OUR SERVICES</h1>
        </div>
        <div className="swiper-card-cont">
          <Swiper
            className="swiper"
            spaceBetween={50}
            slidesPerView={4}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="swiper-card">
                <img src={catering} alt="catering" className="slide-image" />
                <span className="slide-text">CATERING</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-card">
                <div className="slide-content">
                  <img
                    src={decoration}
                    alt="decoration"
                    className="slide-image"
                  />
                  <span className="slide-text">DECORATION</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-card">
                <div className="slide-content">
                  <img src={venue} alt="venuw" className="slide-image" />
                  <span className="slide-text">VENUE SELECTION</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-card">
                <div className="slide-content">
                  <img src={video} alt="video" className="slide-image" />
                  <span style={{ fontSize: 14 }} className="slide-text">
                    PHOTO & VIDEO (GRAPHY)
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-card">
                <div className="slide-content">
                  <img
                    src={celebrity}
                    alt="celebrity"
                    className="slide-image"
                  />
                  <span className="slide-text">CELEBRITY MANAGEMENT</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-card">
                <div className="slide-content">
                  <img
                    src={sangeet}
                    alt="sangeet"
                    className="slide-image"
                    style={{ height: 215, marginTop: 10, marginBottom: 15 }}
                  />
                  <span className="slide-text">
                    SANGEET & DANCE CHOREOGRAPHY
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-card">
                <div className="slide-content">
                  <img
                    src={live_band}
                    alt="live_band"
                    className="slide-image"
                    style={{ height: 215, marginTop: 10, marginBottom: 15 }}
                  />
                  <span className="slide-text">LIVE BAND & MUSIC SHOW</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-card">
                <div className="slide-content">
                  <img
                    src={theme_deco}
                    alt="theme_deco"
                    className="slide-image"
                  />
                  <span className="slide-text">THEME DECORATION</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-card">
                <div className="slide-content">
                  <img
                    src={make_up}
                    alt="make_up"
                    className="slide-image"
                    style={{ height: 215, marginTop: 10, marginBottom: 15 }}
                  />
                  <span className="slide-text">MAKEUP & MEHNDI ARTIST</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <BottomBar />
    </>
  );
}
