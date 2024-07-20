import React from "react";
import NavBar from "../../Component/NavBar";
import BottomBar from "../../Component/BottomBar";
import "./contact.css";
import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="contact-body-cont">
        <video autoPlay muted loop id="background-video">
          <source
            src="https://video.wixstatic.com/video/11062b_bd1eae3377b542c1b87ad07f04e66757/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="contact-row">
          <div className="contact-col-6">
            <h1>GET IN TOUCH</h1>
            <h6>Any in quiries?</h6>
            <h6>Feel free to contact us anytime.</h6>
            <div className="left-col-row">
              <div className="left-col-6">
                <div className="left-phone-social-cont">
                  <h5>PHONE</h5>
                  <span>(+91) 8669016952</span>
                </div>
                <div className="left-phone-social-cont">
                  <h5>
                    SOCIAL MEDIA
                    <div className="social-logo-cont">
                      <FaFacebook className="social-logo" color="blue" />
                      <FaInstagram className="social-logo" color="pink" />
                      <FaTwitter className="social-logo" />
                      <FaWhatsapp className="social-logo" color="green" />
                    </div>
                  </h5>
                </div>
              </div>
              <div className="left-col-6">
                <div className="left-col-6-email">
                  <h5>EMAIL</h5>
                  <span>info@hrudayaevents.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-col-6">
            <div className="form-cont">
              <div className="form-first-last-cont">
                <div className="form-first-span">
                  <span>First Name</span>
                  <input placeholder="Enter your first name" />
                </div>
                <div className="form-first-span">
                  <span>Last Name</span>
                  <input placeholder="Enter your first name" />
                </div>
              </div>
              <div className="form-cont">
                <span>Email</span>
                <input className="email" placeholder="Enter your email..." />
              </div>
              <div className="form-cont">
                <span>Phone number</span>
                <input
                  className="phone"
                  placeholder="Enter your phone number..."
                />
              </div>
              <div className="form-cont">
                <span>Message</span>
                <textarea
                  rows={2} // Specifies the number of visible text lines
                  maxLength={150}
                  className="message"
                  placeholder="Enter your message..."
                />
              </div>
              <touchableHilight className="form-send">
                <span className="form-btn-span">Send</span>
              </touchableHilight>
            </div>
          </div>
        </div>
       
      </div>
      <div className="gmap">
          <iframe
            className="gmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.195818201747!2d73.00273967505258!3d19.09906358211026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1986b04f999%3A0xc22bd6f28bfe8438!2sHrudaya%20Events%20%7C%20Wedding%20Planner%20in%20Navi%20Mumbai%20%7C%20Birthday%20Planner%20%7C%20Baby%20Shower%20%7C%20Catering%20%7C%20Corporate%20Events!5e0!3m2!1sen!2sin!4v1721477071925!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            style={{backgroundColor:'black', borderColor:'black'}}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      <BottomBar />
    </>
  );
}
