import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import logo from "./Images/logo.jpg";
import { Link } from "react-router-dom";
import './BottomBar.css'
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
                <div className="col mb-8">
                  <div className="footer-widget footer-list">
                    <h3 className="footer-title">Useful Link</h3>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>

                      <li>
                        <Link to="/interior-designing">Service</Link>
                      </li>
                      <li>
                        <Link to="/workpage">Work</Link>
                      </li>
                      <li>
                        <Link to="/contactpage">Contact Us </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col mb-8">
                  <div className="footer-widget footer-list">
                    <h3 className="footer-title">Contact Us</h3>
                    <ul>
                      <li>
                        <span className="titl">T:</span>
                        <span className="desc">90824 89772</span>
                      </li>
                      <li>
                        <span className="titl">E:</span>
                        <span className="desc">
                          hnymumbai@gmail.com <br />
                        </span>
                      </li>
                      <li>
                        <span className="titl">A:</span>
                        <span className="desc">
                          A220, Business complex, LODHA AMARA, Kolshet Rd,
                          Thane, Maharashtra 400607
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col mb-8">
                  <div className="footer-widget footer-list">
                    <h3 className="footer-title">Social media</h3>
                    <ul>
                      <Link className="google-plus" to="">
                        <i className="fa fa-google-plus">
                          <FaInstagram />
                        </i>
                      </Link>
                      <Link className="facebook" to="">
                        <i className="fa fa-facebook">
                          <FaFacebookF />
                        </i>
                      </Link>
                      <Link className="facebook" to="">
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
                  Copyright ©2024 All rights reserved | HNY Interiors{" "}
                  <i className="fa fa-heart" /> by{" "}
                  <Link className="skdm" to="https://skdm.in/contact-us-digital-marketing">
                    {" "}
                    shree krishns digital marketing{" "}
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
