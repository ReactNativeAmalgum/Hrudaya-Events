import React from "react";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import "./Corporate.css";

export default function Corporate_Events() {
  return (
    <>
      <NavBar />
      {/* <div className="corp-heading-cont">
      </div> */}

      <section className="corporate-body-cont">
      <h1 className="corp-heading">CORPORATE EVENTS</h1>

        <img
          className="corp-img"
          src="https://static.wixstatic.com/media/11062b_38f7e95dd64a4de1ba0b2583a56f651c~mv2.jpg/v1/fill/w_1225,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Startup.jpg"
          alt={"corporate img"}
        />

          <p>
            We & You Corporate Event Planners and one of the Best Event
            Management Company with our services available. Our forte lies in
            delivering cutting edge, innovative and professional event
            management services. We are a bunch of fun loving, energetic and
            passionate people working towards the common goal of providing
            exceptional services. From inspirational ideas to stunning
            productions, strong themes and creative programs, we do everything
            to create memorable experiences and branding opportunities that
            exceed customer expectations.
          </p>
          <p>
            Be it conferences, meetings, seminars, workshops, or awards, your
            corporate event speaks a lot about your credibility in the market as
            a company serious about having the perfect evening. Let us at We &
            You take care of your corporate event management needs.
          </p>

      </section>
      <section className="card-corporate-body-cont">
        <div className="corp-card-cont">
          <div className="corp-inner-card-cont">
            {/* <div> */}
            <h1>We Organise:</h1>
            <div>
              <ul>
                <li>Annual day / Foundation day</li>
                <li>Confrence</li>
                <li>Exhibitions</li>
                <li>Team Meet</li>
                <li>Branch Launch</li>
                <li>Product Launch</li>
                <li>Seminars</li>
                <li>Board Metting</li>
                <li>Trade Shows</li>
                <li>Exectutive Retreats</li>
                <li>Incentive Programmes</li>
                <li>Appreciation Events</li>
                <li>Workshops</li>
                <li>Year End Functions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <BottomBar />
    </>
  );
}
