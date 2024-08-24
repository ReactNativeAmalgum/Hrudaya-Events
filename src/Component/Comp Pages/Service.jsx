import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "./Service.css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../../Constant/ServiceData";
import { Link } from "react-router-dom";
export default function Service() {
  const handleClick = (slug) => {
    // Implement navigation or any other action you want to perform
    console.log(slug);
    // For navigation, you might use: navigate(slug) or similar function
  };
  return (
    <section className="section3-body-cont">
      <div className="container">
        <div className="row custom-row">
          <div className="col-4 custom-col">
            <div className="service-left-card">
              <h2 >Our services</h2>
              <p>
                Our services extend beyond the ordinary. We offer a
                comprehensive range of solutions to ensure your event is a
                resounding success. From delectable catering options that
                tantalize the taste buds to stunning decorations that create a
                captivating ambiance, we have everything covered. Need help
                finding the perfect venue? Our team will assist you in selecting
                a space that aligns with your vision. To capture the memories of
                your event, our professional photography and videography
                services will immortalize every precious moment. If you're
                dreaming of a celebrity appearance, our celebrity management
                services can make it a reality. And that's just the beginning!
                Discover the endless possibilities with our diverse
                range of services.{" "}
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
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
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
                    <Link
                      to={`/service/${s.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="swiper-cont">
                        <div className="swiper-img-cont">
                          <img src={s.img[0]} />
                          <p>{s.title}</p>
                        </div>
                      </div>
                    </Link>
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
