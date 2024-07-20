import React from "react";
import "./BottomBar.css";
import logo from "./Images/logo.jpg";
import bottomImg from "./Images/bottom-img.webp"; // Make sure this path is correct

import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <section className="bottom-bar-cont">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img className="bottom-logo" src={logo} alt="logo" />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6">
                <div>
                  <h2 className="heading">HEAD OFFICE</h2>
                  <p>Hrudaya Events</p>
                  <p>7/D17, Chandralok Soc</p>
                  <p>Sector 10, Kopar Khairne,</p>
                  <p>Navi Mumbai, Maharashtra 400067</p>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <h2 className="heading">CONTACT US</h2>
                  <p>
                    Pan India{" "}
                    <span className="col-6-span">:(+91) 8669016952</span>
                  </p>
                  <p>
                    Ask Hrudaya{" "}
                    <span className="col-6-span">:(+91) 08669016952</span>
                  </p>
                  <p>
                    Hrudaya Helpline{" "}
                    <span className="col-6-span">:(+91) 086690 16952</span>
                  </p>
                  <p>
                    Hrudaya 24/7{" "}
                    <span className="col-6-span">:(+91) 8669016952</span>
                  </p>
                  <p>Email: info@hrudayaevents.com</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="quick-links">
                  <h2 className="heading">QUICK LINK</h2>
                  <p ><Link  className="quick-links-p"to={'/'} >Home</Link></p>
                  <p  ><Link className="quick-links-p" to={'/about-us'}>About Us</Link></p>
                  <p ><Link  className="quick-links-p"to={'/events'}>Events</Link></p>
                  <p ><Link  className="quick-links-p"to={'/service'}>Our Services</Link></p>
                  <p ><Link  className="quick-links-p"to={'/contact'}>Contact Us</Link></p>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <h2 className="heading">SOCIALS</h2>
                  <div className="bottom-social-logo-cont">
                    <FaFacebook className="social-logo" color="blue" />
                    <FaInstagram className="social-logo" color="pink" />
                    <FaTwitter className="social-logo" />
                    <FaWhatsapp className="social-logo" color="green" />
                  </div>
                </div>
                
              </div>
              <p>
                Hrudaya Events, confirm that we are not affiliated with any
                venue, banquet hall, or property regarding the photos, videos,
                and details displayed on our website. All images, videos, and
                descriptions are used for reference and promotional purposes
                only. We do not claim ownership or endorsement of any venue
                unless explicitly stated. It is not implied that we have any
                formal tie-up, partnership, or permission from the respective
                owners.
              </p>
              <p className="copywrite">
                "CopyRight © 2024 Hrudaya Events. All Rights Reserved."
                <span className="date">09/07/2024</span>
              </p>

            </div>
            <img className="bottomImg" src={bottomImg} alt="BottomImg" />

          </div>
        </div>
      </div>
    </section>
  );
}
