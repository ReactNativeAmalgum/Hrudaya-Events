import React from "react";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import "./Corporate.css";
import { EventData } from "../../Constant/EventData";

export default function Corporate_Events() {
  const data = EventData.map((a, s) => <p>{a.para}</p>);
  return (
    <>
      <section
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/business-partners-handshake-international-business-concept_53876-104046.jpg?t=st=1724475983~exp=1724479583~hmac=4924b4fbafee119ee2097610997f70d8a817b25f7a8e5b84a12c8e5544716128&w=1060')`,
        }}
        className="section1_service_banner"
      >
        <div className="serve_sec_bar_cont">
          <div className="service_sec_1_bar" />
          <h1>Corporate Events</h1>
        </div>
      </section>
      <div className="corp-section2-cont">
        <div className="corp-section2-custom-cont container">
          <div className="corp-section2-custom-row row">
            <div className="col-6 about-special-col corp-section2-col-left-cont">
              <div className="corp-image-container">
                <img
                  src="https://img.freepik.com/free-photo/creative-people-working-office_23-2147656715.jpg?ga=GA1.1.1082127529.1721367194&semt=ais_hybrid"
                  alt="Story Image"
                  className="card-image"
                />
                <div className="corp-content">
                  <h1 className="displaywe1">We organize</h1>
                  <h1 className="displaywe2">We</h1>
                  <h1 className="displaywe2">Organize</h1>
                </div>
              </div>
            </div>
            <div className="col-6 corp-section2-col-left-cont corp-section2-right-col">
              <div className="corp-para-cont">
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
        </div>
      </div>

      <section className="corporate-body-cont">
        <div className="corp-img-cont">
          <img
            className="corp-img"
            src="https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg?t=st=1724482721~exp=1724486321~hmac=fcb827c32cf75fefc324140549f1060eade0fc8e5c6b565342c0052ca3489be3&w=1060"
            alt={"family img"}
          />
        </div>
        <div className="title-descp-cont">
          <div className="corp-heading-cont">
            <h6 className={"head"}>
              Elevate Your Corporate Events with Expert Planning
            </h6>
            <p>{data[2]}</p>
          </div>
          <div class="container">
            <div class="corp-custom-row row">
              <div class="order-2 order-md-1 corp-custom-col col-6">
                <h6 className={"head"}>
                  Why Choose Us as Your Corporate Events Planner? ?
                </h6>
                <p className="sub-descp">{data[4]}</p>
                <p>{data[5]}</p>
                <p>{data[6]}</p>
                <p>{data[7]}</p>
                <p>{data[8]}</p>
              </div>

              <div class="order-1 order-md-2 corp-custom-col corp-right-col col-6">
                <div className="choose-cont">
                  <img
                    src="https://img.freepik.com/free-photo/colleagues-having-fun-business-event_23-2149370528.jpg?t=st=1724482679~exp=1724486279~hmac=107281657b387828e8c5e90e97ac27557041be981eda96d3b4ba30637f9aa3f6&w=1060"
                    alt="Description of image"
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="container">
            <div class="corp-custom-row row">
              <div class="corp-custom-col col-6">
                <h6 className={"head"}>
                  Our Corporate Event Planning Services:
                </h6>
                <p className="sub-descp">{data[10]}</p>
                <p>{data[10]}</p>
                <p>{data[11]}</p>
                <p>{data[12]}</p>
                <p>{data[13]}</p>

                <p>{data[14]}</p>
                <p>{data[15]}</p>
              </div>

              <div class="corp-custom-col corp-right-col col-6">
                <div className="choose-cont">
                  <img
                    src="https://img.freepik.com/free-photo/new-year-spend-with-friends-celebrating_23-2149196985.jpg?t=st=1724482604~exp=1724486204~hmac=5e1a39de22916dfefa59671260413a9ea5d4a0788321c16fa925ed74eada515f&w=1060"
                    alt="Description of image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="corp-heading-bottom">
            <h6 className={"head"}>The Navi Mumbai Advantage:</h6>
            <p>{data[17]}</p>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
}
