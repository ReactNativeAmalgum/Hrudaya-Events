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
  FaFacebookF,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="contact-body-cont">
        <video autoPlay muted loop id="background-video">
          <source
            src="https://video.wixstatic.com/video/11062b_bd1eae3377b542c1b87ad07f04e66757/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <section>
          <div className="contact-banner">
            <div className="contact-p">
              <h1>Contact us</h1>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <div className="container">
            <div className="section section-padding">
              <div className="container">
                <div className=" contact-custom-row row d-flex align-items-stretch">
                  <div className="col-lg-6 col-md-6 custom-col d-flex align-items-stretch">
                    <div className="contact-info-wrap">
                      <div className="single-contact-info-wrap">
                        <div className="info-icon">
                          <i className="dlicon ui-1_home-51" />
                        </div>
                        <div className="info-content">
                          <h3 className="title">Address</h3>
                          <p className="width">
                          Office no. G-40, Haware Fantasia Business park, Sector - 30A, Vashi, Navi Mumbai
                          </p>
                        </div>
                      </div>
                      <div className="single-contact-info-wrap">
                        <div className="info-icon">
                          <i className="dlicon ui-2_phone" />
                        </div>
                        <div className="info-content">
                          <h3 className="title">Phone</h3>
                          <p>
                            {" "}
                            Mobile: <span>(+91)90824 89772</span>
                          </p>
                        </div>
                      </div>
                      <div className="single-contact-info-wrap">
                        <div className="info-icon">
                          <i className="dlicon ui-1_email-85" />
                        </div>
                        <div className="info-content">
                          <h3 className="title">Email</h3>
                          <p>pgroominmumbai@gmail.com
                          </p>
                        </div>
                        <div className="info-content">
                          <h3 className="title">Follow Us</h3>
                          <div className="social-icons-container">
                            <a className="twitter" href="https://www.facebook.com/hrudayaevent">
                            <FaFacebookF/>

                            </a>
                            <a className="instagram" href="https://www.instagram.com/hrudaya_events/">
                              <FaInstagram />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-5 mb-5 d-flex align-items-stretch">
                    <div className="contact-from-wrap">
                      <form
                        id="contact-form"
                        action="https://whizthemes.com/mail-php/tasnim/mail.php"
                        method="post"
                      >
                        <input name="name" type="text" placeholder="Name" />
                        <input name="email" type="email" placeholder="Email" />
                        <input
                          name="subject"
                          type="text"
                          placeholder="Subject"
                        />
                        <textarea
                          name="message"
                          placeholder="Your message"
                          defaultValue={""}
                        />
                        <input
                          className="submit"
                          type="submit"
                          defaultValue="Send Message"
                        />
                      </form>
                      <p className="form-messege" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="map mt-md-12">
        <iframe
          className="gmap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.195818201747!2d73.00273967505258!3d19.09906358211026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1986b04f999%3A0xc22bd6f28bfe8438!2sHrudaya%20Events%20%7C%20Wedding%20Planner%20in%20Navi%20Mumbai%20%7C%20Birthday%20Planner%20%7C%20Baby%20Shower%20%7C%20Catering%20%7C%20Corporate%20Events!5e0!3m2!1sen!2sin!4v1721477071925!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          style={{ backgroundColor: "black", borderColor: "black" }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <BottomBar />
    </>
  );
}
