import React, { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./Gallery.css";
import { Image } from "antd";
import weeding from '../Images/desti-wedding1.jpeg'
import sangeet from '../Images/sangeet1.jpeg'
import catering1 from '../Images/catering1.jpg'
import celebrity from '../Images/celebrity1.jpg'
import corporate from '../Images/coporate_meeting.jpg'
import decoration from '../Images/decoration3.jpg'
export default function HomeGallery() {
  return (
    <section className="gallery-section-cont">
      <h2>Gallery</h2>
      <section className="container">
        <div className="row gallery-custom-row">
          <div className="col-md-4 col-sm-12 gallery-custom-col">
            <div className="about-image-container">
              <Image
                src={weeding}
                width={'100%'}
                height={'100%'}
                alt="Image 1"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 gallery-custom-col">
            <div className="about-image-container">
              <Image
                width={'100%'}
                height={'100%'}
                src={corporate}
                alt="Image 2"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 gallery-custom-col">
            <div className="about-image-container">
              <Image
                width={'100%'}
                height={'100%'}
                src={celebrity}
                alt="Image 3"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="row gallery-custom-row">
          <div className="col-md-4 col-sm-12 gallery-custom-col">
            <div className="about-image-container">
              <Image
                src={sangeet}
                width={'100%'}
                height={'100%'}
                alt="Image 1"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 gallery-custom-col">
            <div className="about-image-container">
              <Image
                width={'100%'}
                height={'100%'}
                src={catering1}
                alt="Image 2"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 gallery-custom-col">
            <div className="about-image-container">
              <Image
                width={'100%'}
                height={'100%'}
                src={decoration}
                alt="Image 3"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
