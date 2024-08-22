import React from "react";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import familyImg from "../../Component/Images/family_events.jpg";
import "./Family.css";
import { EventData2 } from "../../Constant/EventData";
export default function Family_Events() {
  return (
    <>
      <section className="family-body-cont">
        <h1 className="family-heading">FAMILY EVENTS</h1>

        <img className="family-img" src={familyImg} alt={"Family img"} />
        <div className="title-descp-cont">
        {EventData2.map((s, i) =>(
          <div  key={i}>
          <p style={{textAlign:"left"}}>{s.para}</p>
          </div>
        ))}
        </div>
      </section>
      <section className="card-family-body-cont">
        <div className="family-card-cont">
          <div className="family-inner-card-cont">
            {/* <div> */}
            <h1>We Organise:</h1>
            <div>
              <ul className="event-menu">
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
