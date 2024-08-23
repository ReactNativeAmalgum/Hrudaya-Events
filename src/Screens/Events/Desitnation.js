import React from "react";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import "./Corporate.css";
import { EventData } from "../../Constant/EventData";

export default function Destination() {
  return (
    <>
      <section className="corporate-body-cont">
        <h1 className="corp-heading">Destination Weedings</h1>

        <img
          className="corp-img"
          src="https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481506.jpg?t=st=1724394461~exp=1724398061~hmac=12edd12a4c36006df03c8afec184bb2e048355927912a10aadf6089bce16e301&w=996"
          alt={"corporate img"}
        />
        <div className="title-descp-cont">
          {EventData.map((s, i) => (
            <div key={i}>
              <p
                style={{
                  textAlign: "left",
                  marginBottom: i !== 1 && i !== 3 && i !== 9 && i !== 16 && i !== 22 ? 40 : 10,
                  textDecoration: i === 1 || i === 3 || i === 9 || i === 16 || i ===22 ? "underline" : "none", // Underline for 3rd, 11th, and 16th
                  textUnderlineOffset: 4,
                }}
              >
                {s.para}
              </p>{" "}
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
