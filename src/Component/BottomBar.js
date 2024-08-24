import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import logo from "./Images/logo.png";
import { Link } from "react-router-dom";
import "./BottomBar.css";
function BottomBar() {
  return (
    <>
      <div className="footer-color">
        <footer className="section  footer-color">
          <div className="footer-top section-padding">
            <div className="container">
              <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n8">
                <div className="col mb-8">
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                      <Link to="/">
                        <img src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col mb-8 bottom-link">
                  <div className="footer-widget footer-list">
                    <h3 className="footer-title">Useful Link</h3>
                    <ul onClick={() => window.scrollTo(0, 0)}>
                      <li>
                        <Link to="/">Home</Link>
                      </li>

                      <li>
                        <Link to="/service/1">Service</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About</Link>
                      </li>
                      <li>
                        <Link to="/events/family">Event</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col mb-8">
                  <div className="footer-widget footer-list">
                    <h3 className="footer-title">Contact Us</h3>
                    <ul className="footer-link-li">
                      <li>
                        <span className="titl">T:</span>
                        <span className="desc">086690 16952</span>
                      </li>
                      <li>
                        <span className="titl">E:</span>
                        <span className="desc">
                        info@hrudayaevents.com <br />
                        </span>
                      </li>
                      <li>
                        <span className="titl">A:</span>
                        <span className="desc">
                        7/D/17, Chandralok Soc, Sector 10, Kopar Khairane, Navi Mumbai, Maharashtra 400709
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col mb-8">
                  <div className="footer-widget footer-list">
                    <h3 className="footer-title">Social media</h3>
                    <ul className="soical-ul">
                      <Link className="google-plus" to="">
                        <i className="fa fa-google-plus">
                          <FaInstagram />
                        </i>
                      </Link>
                      <Link className="google-plus" to="">
                        <i className="fa fa-facebook">
                          <FaFacebookF />
                        </i>
                      </Link>
                      <Link className="google-plus" to="">
                        <i className="fa fa-facebook">
                          <CiTwitter />
                        </i>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="copyright text-center">
                <p>
                  Copyright ©2024 All rights reserved | Hrundaya Events{" "}
                  <i className="fa fa-heart" /> by{" "}
                  <Link
                    className="skdm"
                    to="https://skdm.in/contact-us-digital-marketing"
                  >
                    {" "}
                    shree krishna digital marketing{" "}
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default BottomBar;
