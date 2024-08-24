import React from "react";
import "./About_us.css";
import aboutImg from "../../Component/Images/about-event.jpg";
export default function About_us() {
  return (
    <>
      <section className="section1_service_banner">
        <div className="serve_sec_bar_cont">
          <div className="service_sec_1_bar" />
          <h1>Our Services</h1>
        </div>
      </section>
      <div className="about-body-container">
        <div className="about-custom-cont container">
          <div className="about-custom-row row">
            <div className="col-6 about-special-col about-col-left-cont">
              <div className="image-container">
                <img src={aboutImg} alt="Story Image" className="card-image" />
                <div className="about-content">
                  <h1>OUR</h1>
                  <h1>NARRATIVE</h1>
                </div>
              </div>
            </div>
            <div className="col-6 about-col-left-cont about-special-col">
              <div className="para-cont">
                <p className="paragraph">
                  Hrudaya Events started with a purpose to provide ‘ONE STOP
                  SOLUTIONS’ for all your Events in such a way that you won’t
                  have to look anywhere else for anything at all. We assure you
                  to handle every part of your event. We are blessed with an
                  abundance of internal experience in Event management from
                  birthday parties to weddings not just that we are in the
                  corporate segment as well with our own catering setup,
                  decoration set up, photography and videography. Over the
                  years, we have developed a sound reputation within our
                  industry for creativity, effciency, ability to meet deadlines
                  and fawless execution of events and for providing superior
                  association services. We are blessed with an abundance of
                  internal experience in Event management from birthday parties
                  to weddings not just that we are in the corporate segment as
                  well with our own catering setup, decoration set up,
                  photography and videography. Over the years, we have developed
                  a sound reputation within our industry for creativity,
                  effciency, ability to meet deadlines and fawless execution of
                  events and for providing superior association services. Over
                  the years, we have developed a sound reputation within our
                  industry for creativity, effciency, ability to meet deadlines
                  and fawless execution of events and for providing superior
                  association services. Over the years, we have developed a
                  sound reputation within our industry for creativity,
                  effciency, ability to meet deadlines and fawless execution of
                  events and for providing superior association services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*
    <div className="about-body-container">
      <div className="card">
        <div className="image-container">
          <img src={aboutImg} alt="Story Image" className="card-image" />
          <div className="about-content">
          <h1>O U R</h1>
          <h1>S T O R Y</h1>
        </div>
        </div>

      </div>

      <div className="para-cont">
        <p className="paragraph">
          Hrudaya Events started with a purpose to provide ‘ONE STOP SOLUTIONS’
          for all your Events in such a way that you won’t have to look anywhere
          else for anything at all. We assure you to handle every part of your
          event. We are blessed with an abundance of internal experience in
          Event management from birthday parties to weddings not just that we
          are in the corporate segment as well with our own catering setup,
          decoration set up, photography and videography. Over the years, we
          have developed a sound reputation within our industry for creativity,
          effciency, ability to meet deadlines and fawless execution of events
          and for providing superior association services. We are blessed with
          an abundance of internal experience in Event management from birthday
          parties to weddings not just that we are in the corporate segment as
          well with our own catering setup, decoration set up, photography and
          videography. Over the years, we have developed a sound reputation
          within our industry for creativity, effciency, ability to meet
          deadlines and fawless execution of events and for providing superior
          association services. Over the years, we have developed a sound
          reputation within our industry for creativity, effciency, ability to
          meet deadlines and fawless execution of events and for providing
          superior association services. Over the years, we have developed a
          sound reputation within our industry for creativity, effciency,
          ability to meet deadlines and fawless execution of events and for
          providing superior association services.
        </p>
      </div>
    </div>

*/
