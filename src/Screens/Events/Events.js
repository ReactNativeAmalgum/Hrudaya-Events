import React from "react";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import "./Events.css";

export default function Events() {
  return (
    <>
      <NavBar />
      <div className="heading-cont">
        <h1>OUR EVENTS</h1>
        <h3>Provide Everything You Need</h3>
      </div>
      <section className="service-body-cont">
        <div className="service-container">
          <div className="service-row">
            <div className="service-col-6">
              <img
                className="service-bgimg"
                src={
                  "https://plus.unsplash.com/premium_photo-1661497675847-2075003562fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ycG9yYXRlfGVufDB8fDB8fHww"
                }
                alt={"corporate img"}
              />
            </div>
            <div className="service-col-6">
              <div className="topbar" />

                <div className="event-corp-heading">
                  <h1>CORPORATE </h1>
                  <h1>EVENTS</h1>
                </div>
                <p>
                  Be it confrences, meeting, seminars, workshops, or awards,
                  uour corporate event speaks a lot about your credibility in
                  the market as a company serious about having the perfect
                  evening. Let us at We & You take care of your corporate event
                  management needs.
                </p>
              </div>

          </div>
          <div className="service-row">
            <div className="service-col-6">
              <div className="topbar" />

              <h1>FAMILY EVENTS</h1>
              <p>
                We are committed to delivering the best services on these
                special occasions with unique family day event ideas. We offer
                our services as a corporate family event organizer.
              </p>
            </div>
            <div className="service-col-6">
              <img
                className="service-bgimg"
                src={
                  "https://img.freepik.com/premium-photo/family-celebrating-birthday-party-backyard_670382-21521.jpg"
                }
                alt={"corporate img"}
              />
            </div>
          </div>
        </div>
      </section>
      <BottomBar />
    </>
  );
}
