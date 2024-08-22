import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import "./Service_sec_2_.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ServiceData } from "../../Constant/ServiceData";

function Secrvice_sec_2({ service }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const navigation = useNavigate();
  return (
    <section className="service_section_container">
      <div className="container">
        <div className="service_sec2_row row">
          <div className="col-8 service_sec2_custom-col">
            <div className="service2_img_cont">
              <img src={service.img[0]} />
            </div>

            <div className="title-descp-cont">
              <div className="bar_heading_cont">
                <div className="service_sec_2_bar" />
                <h5>
                  {service.title.charAt(0).toUpperCase() +
                    service.title.slice(1).toLowerCase()}
                </h5>
              </div>
              <p style={{ paddingBottom: 10 }}>{service.description1}</p>
              {showMore && <p>{service.description2}</p>}
              <touchableHilight
                className={"NewAboutUs-ReadMore"}
                onClick={toggleShowMore}
              >
                {showMore ? "read less" : "...read more"}
              </touchableHilight>
            </div>

            <div style={{ marginTop: 30 }} className="bar_heading_cont">
              <div className="service_sec_2_bar" />

              <h5>Event Images:</h5>
            </div>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                425: {
                  slidesPerView: 1,
                },
                375: {
                  slidesPerView: 1,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
            >
              {service.img.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="service-swiper-img-cont">
                    <img src={image} alt={`Img${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-4 second-column service2_custom_col">
            <div class="container">
              <div class="row service-second-column-row">
                <div class="col-md-6 getintouch service-second-column-col">
                  <h2>Get In Touch With Us!</h2>
                  <p>
                    Ask questions, schedule a meeting or request a proposal
                    Let's Get Started
                  </p>
                  <Link to={"/contact"} className={"service-contact-btn"}>
                    <p>CONTACT US NOW</p>
                  </Link>
                </div>
                <div class="col-md-6 service-second-column-col">
                  <div className="bar_heading_cont">
                    <div className="service_sec_2_bar" />
                    <h3>Hundrya Event Services</h3>
                  </div>
                  <ul className="widget-list list list-mark-5">
                    {ServiceData.map((s, i) => (
                      <li className="widget-list__item" key={i}>
                        <Link
                          to={`/service/${s.id}`} // Fallback for empty slugs
                          className="widget-list__link text-primary_h"
                        >
                          <span>
                            {s.title.charAt(0).toUpperCase() +
                              s.title.slice(1).toLowerCase()}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Secrvice_sec_2;
