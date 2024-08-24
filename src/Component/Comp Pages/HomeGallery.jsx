import React, { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./Gallery.css";
import { Image } from "antd";

export default function HomeGallery() {
  return (
    <section className="gallery-section-cont">
      <h2>Gallery</h2>
      <section className="container">
        <div className="row gallery-custom-row">
          <div className="col-md-4">
            <div className="image-container">
              <Image
                src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 1"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container">
              <Image
                src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 2"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container">
              <Image
                src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 3"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="row gallery-custom-row">
          <div className="col-md-4">
            <div className="image-container">
              <Image
                src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 4"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container">
              <Image
                src="https://images.pexels.com/photos/16408/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 5"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-container">
              <Image
                src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 6"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
