import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import logo from "./Images/logo.png";
import logo2 from './Images/logo2.png'
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
                        <img style={{
                          backgroundColor: 'white'
                        }} src={logo2} alt="logo" />
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
                        pgroominmumbai@gmail.com <br />
                        </span>
                      </li>
                      <li>
                        <span className="titl">A:</span>
                        <span className="desc">
                          Office no. G-40, Haware Fantasia Business park, Sector-30A, Vashi,Navi Mumbai
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col mb-8">
                  <div className="footer-widget footer-list">
                    <h3 className="footer-title">Social media</h3>
                    <div style={{ width: 120, paddingLeft: 20 }} className="social-cont">
                      <ul className="soical-ul">
                        <a className="google-plus" href="https://www.instagram.com/hrudaya_events/">
                          <i className="fa fa-google-plus">
                            <FaInstagram />
                          </i>
                        </a>
                        <a  className="google-plus" href="https://www.facebook.com/hrudayaevent">
                          <i className="fa fa-facebook">
                            <FaFacebookF />
                          </i>
                        </a>
                        {/* <Link className="google-plus" to="">
                          <i className="fa fa-facebook">
                            <CiTwitter />
                          </i>
                        </Link> */}
                      </ul>
                    </div>
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
