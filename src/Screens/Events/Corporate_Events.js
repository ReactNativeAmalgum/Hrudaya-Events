import React from "react";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import "./Corporate.css";
import { EventData } from "../../Constant/EventData";

export default function Corporate_Events() {
  return (
    <>
      <section className="corporate-body-cont">
        <h1 className="corp-heading">CORPORATE EVENTS</h1>

        <img
          className="corp-img"
          src="https://static.wixstatic.com/media/11062b_38f7e95dd64a4de1ba0b2583a56f651c~mv2.jpg/v1/fill/w_1225,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Startup.jpg"
          alt={"corporate img"}
        />
<div className="title-descp-cont">
        {EventData.map((s, i) =>(
          <div  key={i}>
          <p style={{textAlign:"left"}}>{s.para}</p>
          </div>
        ))}
        </div>
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
