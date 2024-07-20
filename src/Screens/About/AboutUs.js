import React from "react";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import "./About.css";
export default function AboutUs() {
  return (
    <>
      <NavBar />
      <section className="about-body-container">
        <div className="about-content">
          <h1>O U R</h1>
          <h1>S T O R Y</h1>
        </div>
        <div className="para-cont">
          <p className="paragraph">
            Hrudaya Events started with a purpose to provide ‘ONE STOP
            SOLUTIONS’ for all your Events in such a way that you won’t have to
            look anywhere else for anything at all. We assure you to handle
            every part of your event. We are blessed with an abundance of
            internal experience in Event management from birthday parties to
            weddings not just that we are in the corporate segment as well with
            our own catering setup, decoration set up, photography and
            videography. Over the years, we have developed a sound reputation
            within our industry for creativity, effciency, ability to meet
            deadlines and fawless execution of events and for providing superior
            association services.
          </p>
        </div>
      </section>
      <section className="section2-body-cont">
        <div className="card-cont">
          <div className="card">
            <h1>OUR  VISION</h1>
            <p>
              To be a leading event management organization that provides high-quality services while concentrating on the relevance and uniqueness of our client's projects.
            </p>
          </div>
          <div className="card">
            <h1>OUR MISSION</h1>
            <p>
              Our mission is planning and executing your vision with innovation, creativity and originality to leave a never ending impression on your guests heart.
            </p>
          </div>
        </div>
      </section>
      <BottomBar />
    </>
  );
}
