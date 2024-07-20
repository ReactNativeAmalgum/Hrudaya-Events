import React from "react";
import BgImg from "../../Component/Images/background.webp";
import "./Home.css";
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

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="home-body-container">
      <video autoPlay muted loop id="background-video">
          <source
            src="https://video.wixstatic.com/video/11062b_bae67404e0ff4b328ad6a95dab4d00db/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <h1>HRUDAYA</h1>
        <h2>EVENTS</h2>
        {/* <div className="home-heading-bar" /> */}
        <h4>EVENT MANAGEMENT COMPNAY</h4>
        <h5>"One Heart, One Love, One Team"</h5>
        <h5>For All Your Dream</h5>
      </section>
      <section className="section2-body-cont">
        <div className="card">
          <h2 className="abt-head">About Us</h2>
          <p>
            <div className="abt-para-cont">
              <p className="paragraph">
                Hrudaya Events started with a purpose to provide ‘ONE STOP
                SOLUTIONS’ for all your Events in such a way that you won’t have
                to look anywhere else for anything at all. We assure you to
                handle every part of your event. We are blessed with an
                abundance of internal experience in Event management from
                birthday parties to weddings not just that we are in the
                corporate segment as well with our own c atering setup,
                decoration set up, photography and videography. Over the years,
                we have developed a sound reputation within our industry for
                creativity, effeciency, ability to meet deadlines and fawless
                execution of events and for providing superior association
                services.
              </p>
            </div>
          </p>
        </div>
      </section>
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
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 100,
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
                  <span className="slide-text">PHOTO & VIDEO (GRAPHY)</span>
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
                  <img src={sangeet}  alt="sangeet" className="slide-image" />
                  <span style={{fontSize:14, fontWeight:"bolder"}} className="slide-text">
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
                  <img src={make_up} alt="make_up" className="slide-image" />
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
