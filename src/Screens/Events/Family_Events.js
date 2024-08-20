import React from "react";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import familyImg from "../../Component/Images/family_events.jpg";
import "./Family.css";
export default function Family_Events() {
  return (
    <>
      <section className="family-body-cont">
        <h1 className="family-heading">FAMILY EVENTS</h1>

        <img className="family-img" src={familyImg} alt={"Family img"} />
        <div>
          <p>
            Hrudaya Corporate Event Planners and one of the Best Event
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
            Family event speaks a lot about your credibility in the market as a
            company serious about having the perfect evening. Let us at We & You
            take care of your Family event management needs.
          </p>
        </div>
      </section>
      <section className="card-family-body-cont">
        <div className="family-card-cont">
          <div className="family-inner-card-cont">
            {/* <div> */}
            <h1>We Organise:</h1>
            <div>
              <ul>
                <li>Birthdays</li>
                <li>Engagements</li>
                <li>Weddings</li>
                <li>Weeding Reception</li>
                <li>Baby Showers</li>
                <li>House Party</li>
                <li>Cocktail Party</li>
                <li>Naming Ceremonies</li>
                <li>Theme Party</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <BottomBar />
    </>
  );
}
