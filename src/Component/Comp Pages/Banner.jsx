import React from "react";
import './Banner.css'
import '../../Screens/Home/Home.css'
export default function Banner() {
  return (
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
  );
}
