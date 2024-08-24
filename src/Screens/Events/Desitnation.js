import React from "react";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import "./Corporate.css";
import { EventData, WeedingData } from "../../Constant/EventData";

export default function Destination() {
  const data = WeedingData.map((a, s) => <p>{a.para1}</p>);
  return (
    <>
      <section className="section1_service_banner">
        <div className="serve_sec_bar_cont">
          <div className="service_sec_1_bar" />
          <h1>Destination Weeding</h1>
        </div>
      </section>
      <div className="corp-section2-cont">
        <div className="corp-section2-custom-cont container">
          <div className="corp-section2-custom-row row">
            <div className="col-6 about-special-col corp-section2-col-left-cont">
              <div className="corp-image-container">
                <img
                  src="https://img.freepik.com/free-photo/couple-getting-married-hot-air-balloon_23-2151158069.jpg?t=st=1724472282~exp=1724475882~hmac=c721a0f2cdadbb9a1a845515e6472cc8d58e7335509b7c4324ad47513022af7a&w=1060"
                  alt="Story Image"
                  className="card-image"
                />
                <div className="corp-content">
                <h1 className="displaywe1">We organize</h1>
                  <h1 className="displaywe2" >We</h1>
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
            src="https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481506.jpg?t=st=1724472848~exp=1724476448~hmac=65a246cfaf240a17de6d951f37a92c6ec9cb77f42902916549a558d48b874e18&w=1060"
            alt={"corporate img"}
          />
        </div>
        <div className="title-descp-cont">
          <div className="corp-heading-cont">
            <h6 className={"head"}>
              Destination Wedding Planner in Navi Mumbai: Your Dream Wedding,
              Anywhere
            </h6>
            <p>{data[1]}</p>
          </div>
          <div class="container">
            <div class="corp-custom-row row">
              <div class="order-2 order-md-1 corp-custom-col col-6">
                <h6 className={"head"}>
                  Why Choose a Destination Wedding Planner?
                </h6>
                <p className="sub-descp">{data[3]}</p>
                <p>{data[4]}</p>
                <p>{data[5]}</p>
                <p>{data[6]}</p>
                <p>{data[7]}</p>
              </div>

              <div class="order-1 order-md-2 corp-custom-col corp-right-col col-6">
                <div className="choose-cont">
                  <img
                    src="https://img.freepik.com/free-photo/romantic-dining-sunset-dinner-ocean_1203-5255.jpg?t=st=1724435563~exp=1724439163~hmac=7c4922dd44602ae74c14c4e844b1dc7b3db3383abf0b213e7722099990746e34&w=1060"
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
                <h6 className={"head"}>Our Services:</h6>
                <p className="sub-descp">{data[9]}</p>
                <p>{data[10]}</p>
                <p>{data[11]}</p>
                <p>{data[12]}</p>
                <p>{data[13]}</p>
              </div>

              <div class="corp-custom-col corp-right-col col-6">
                <div className="choose-cont">
                  <img
                    src="https://img.freepik.com/free-photo/romantic-dining-sunset-dinner-ocean_1203-5255.jpg?t=st=1724435563~exp=1724439163~hmac=7c4922dd44602ae74c14c4e844b1dc7b3db3383abf0b213e7722099990746e34&w=1060"
                    alt="Description of image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="corp-heading-bottom">
            <h6 className={"head"}>Let's Create Your Dream Wedding Together</h6>
            <p>{data[15]}</p>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
}
