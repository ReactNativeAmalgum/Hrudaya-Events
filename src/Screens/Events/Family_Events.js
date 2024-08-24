import React from "react";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import "./Corporate.css";
import { EventData, EventData2 } from "../../Constant/EventData";
import familyImg from "../../Component/Images/family_events.jpg";

export default function family_events() {
  const data = EventData2.map((a, s) => <p>{a.para}</p>);
  return (
    <>
      <section
        style={{
    backgroundImage: `url('https://img.freepik.com/free-photo/long-shot-happy-family-looking-camera_23-2148222939.jpg?t=st=1724476224~exp=1724479824~hmac=87e7abb67779556882d1524515f05c4ecf2001010662d57071e6621967e022e4&w=1060')`,
  }}
       className="section1_service_banner">
        <div className="serve_sec_bar_cont">
          <div className="service_sec_1_bar" />
          <h1>Family Events</h1>
        </div>
      </section>
      <div className="corp-section2-cont">
        <div className="corp-section2-custom-cont container">
          <div className="corp-section2-custom-row row">
            <div className="col-6 about-special-col corp-section2-col-left-cont">
              <div className="corp-image-container">
                <img
                  src="https://img.freepik.com/free-photo/family-posing-together-christmas-tree_23-2149136345.jpg?t=st=1724473300~exp=1724476900~hmac=aa5a9c21cc8803a4dea6b4b9d103fa3f5b2cf0614efe0c7d307278d53bd88c13&w=1060"
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
        </div>
      </div>

      <section className="corporate-body-cont">
        <div className="corp-img-cont">
          <img
            className="corp-img"
            src="https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg?t=st=1724473370~exp=1724476970~hmac=61e55bf753693eb5d85244946236f5b698c4b11da701669dd4169c8c13f54018&w=1060"
            alt={"family img"}
          />
        </div>
        <div className="title-descp-cont">
          <div className="corp-heading-cont">
            <h6 className={"head"}>Creating Lasting Memories</h6>
            <p>{data[2]}</p>
          </div>
          <div class="container">
            <div class="corp-custom-row row">
              <div class="order-2 order-md-1 corp-custom-col col-6">
                <h6 className={"head"}>Why Choose Us?</h6>
                <p className="sub-descp">{data[12]}</p>
                <p>{data[13]}</p>
                <p>{data[14]}</p>
                <p>{data[15]}</p>
              </div>

              <div class="order-1 order-md-2 corp-custom-col corp-right-col col-6">
                <div className="choose-cont">
                  <img
                    src="https://img.freepik.com/free-photo/young-beautiful-couple-man-woman-sitting-table-with-cups-tea-happy-love-christmas-decorated-room-with-christmas-tree-background_141793-42547.jpg?t=st=1724473822~exp=1724477422~hmac=75b931ac1738e7686e11f71eed5fb4232f5a55f5e1a7e58a38a93d367ae95aaf&w=996"
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
                <p className="sub-descp">{data[4]}</p>
                <p>{data[5]}</p>
                <p>{data[6]}</p>
                <p>{data[7]}</p>
                <p>{data[8]}</p>

                <p>{data[9]}</p>
                <p>{data[10]}</p>
              </div>

              <div class="corp-custom-col corp-right-col col-6">
                <div className="choose-cont">
                  <img
                    src="https://img.freepik.com/free-photo/medium-shot-happy-family-birthday_23-2149203181.jpg?t=st=1724473781~exp=1724477381~hmac=48c36eaa95531ddbb88aa2f95d11e6e54e768f6324fcc5769181dbfc19b14185&w=1060"
                    alt="Description of image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="corp-heading-bottom">
            <h6 className={"head"}>Let Us Create a Memorable Family Even</h6>
            <p>{data[23]}</p>
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
}
