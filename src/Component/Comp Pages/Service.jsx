import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "./Service.css";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../../Constant/ServiceData";
export default function Service() {
  return (
    <section className="section3-body-cont">
      <div className="container">
        <div className="row custom-row">
          <div className="col-4 custom-col">
            <div className="service-left-card">
              <h2>Our services</h2>
              <p>
                Our services are designed to make your wedding day
                unforgettable. Our services are designed to make your wedding
                day unforgettable Our services are designed to make your wedding
                day unforgettable Our services are designed to make your wedding
                day unforgettable Our services are designed to make your wedding
                day unforgettable Our services are designed to make your wedding
                day unforgettable Our services are designed to make your wedding
                day unforgettable Our services are designed to make your wedding
                day unforgettable Our services are designed to make your wedding
                day unforgettable
              </p>
            </div>
          </div>
          <div className="col-8 custom-col-right">
            <div className="swiper-card-cont">
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                speed={3000}
                autoplay={{
                  delay: 7000, // Delay between transitions (3 seconds)
                  disableOnInteraction: false, // Continue autoplay after user interactions
                }}
                breakpoints={{
                  320:{
                    slidesPerView: 1,

                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  425: {
                    slidesPerView: 2,
                    spaceBetween: 10,
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
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
              >
                {ServiceData.map((s, i) => (
                  <SwiperSlide key={i}>
                    <div className="swiper-cont">
                      <div className="swiper-img-cont">
                        <img src={s.img[0]} />
                        <p>{s.title}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
<div className="swiper-card">
                      <img
                        src={s.img}
                        alt="catering"
                        className="slide-image"
                      />
                      <span className="slide-text">{s.title}</span>
                    </div>
*/
