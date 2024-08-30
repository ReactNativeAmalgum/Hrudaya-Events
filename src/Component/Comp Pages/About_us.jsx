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
                  Welcome to Hrudaya Events, the Best Event Management Company
                  in Navi Mumbai. Since our inception on April 10, 2020, we've
                  been dedicated to crafting unforgettable experiences tailored
                  to your unique needs. With a passion for perfection and a keen
                  eye for detail, we have swiftly become a trusted name in the
                  event management industry.
                </p>
                <p className="paragraph">
                  In just a few short years, we have successfully managed over
                  50 destination weddings, ensuring that each celebration is as
                  unique and memorable as the love stories they represent. Our
                  expertise extends beyond weddings, as we have also
                  orchestrated more than 100 social events, from intimate
                  gatherings to grand celebrations, each one meticulously
                  planned and flawlessly executed.
                </p>
                <p className="paragraph">
                  Our reputation as the Best Event Management Company in Navi
                  Mumbai is built on our commitment to excellence and our
                  ability to transform visions into reality. We understand that
                  every event is special and demands a personalized approach.
                  That's why we work closely with our clients, offering bespoke
                  solutions that cater to their specific needs and preferences.
                </p>
                <p className="paragraph">
                  Corporate events are another area where we excel. We have
                  successfully organized numerous corporate events, ranging from
                  product launches to conferences, ensuring that each event not
                  only meets but exceeds expectations. Our professional and
                  innovative approach has made us the go-to choice for
                  businesses looking to make a lasting impression.
                </p>
                <p className="paragraph">
                  At Hrudaya Events , our goal is simple: to deliver the best
                  outcomes for our clients. We believe that every event, whether
                  it's a wedding, a social gathering, or a corporate function,
                  should be an extraordinary experience. That's why we are
                  committed to being the Best Event Management Company in Navi
                  Mumbai, continuously striving to raise the bar in the
                  industry.
                </p>
                <p className="paragraph">
                  We invite you to explore our services and discover how we can
                  bring your vision to life. Whether you're planning a
                  destination wedding, a social event, or a corporate gathering,
                  trust Hrudaya Events to create an event that will be
                  remembered for years to come.
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
