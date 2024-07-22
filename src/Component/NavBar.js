import React, { useState } from "react";
import "./NavBar.css"; // Make sure this path is correct relative to your component location
import logo from "./Images/logo.jpg"; // Adjust the path as per your project structure
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {

  return (
    <div className="body-container">
      <div className="image-slogan-cont">
        <img src={logo} alt="logo" className="navbar-logo" />
      
      </div>

      <ul className="navbar-routes">
        <div>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
        </div>

        <div>
          <NavLink to={"/about-us"}>
            <li>About Us</li>
          </NavLink>
        </div>
        <div className="nav-dropdown">
          <NavLink to="/events">
            <li>Events</li>
          </NavLink>
          <ul className="dropdown-menu">
            <li className="dropdown-link">
              <Link to="/events/corporate">Corporate Events</Link>
            </li>
            <li className="dropdown-link">
              <Link to="/events/family">Family Events</Link>
            </li>
          </ul>
        </div>
        <div>

        <NavLink to={"/service"}>
          <li>Our Services</li>
        </NavLink>
        </div>
        <div>
        <NavLink to={"/contact"}>
          <li>Contact Us</li>
        </NavLink>
        </div>
      </ul>
    </div>
  );
}


/**
 *   <div className="slogan-cont">
          <span className="slogan">"One Heart, One Love, One Team"</span>
          <br />
          <span className="slogan">For All Your Dreams</span>
        </div>
 */