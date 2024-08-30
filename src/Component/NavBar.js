import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./Images/logo.png";
import logo2 from './Images/logo2.png'
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { ServiceData } from "../Constant/ServiceData";

function NavBar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      className="custom-header"
      expanded={expanded}
      onToggle={handleToggle}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            style={{ width: 100, height: "auto", borderColor:"white", borderWidth:1,borderRadius: "50%" }}
            alt="logo"
            src={logo2}
            className="logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link
              className={location.pathname === "/" ? "link active" : "link"}
              href="/"
              onClick={closeNavbar}
            >
              Home
              {location.pathname === "/" && (
                <div className="underline mx-auto" />
              )}
            </Nav.Link>

            <Nav.Link
              className={
                location.pathname === "/about-us" ? "link active" : "link"
              }
              href="/about-us"
              onClick={closeNavbar}
            >
              About
              {location.pathname === "/about-us" && (
                <div className="underline mx-auto" />
              )}
            </Nav.Link>
            <Nav.Link
              className={
                location.pathname === "/gallery" ? "link active" : "link"
              }
              href="/gallery"
              onClick={closeNavbar}
            >
              Gallery
              {location.pathname === "/gallery" && (
                <div className="underline mx-auto" />
              )}
            </Nav.Link>

            <NavDropdown
              title={
                <span
                  className={
                    location.pathname.startsWith("/service")
                      ? "link active "
                      : "link"
                  }
                >
                  Services
                </span>
              }
              className={
                location.pathname.startsWith("/service")
                  ? "link active"
                  : "link"
              }
              id="basic-nav-dropdown"
            >
              {ServiceData.map((s, i) => (
                <NavDropdown.Item
                  key={i}
                  className={
                    location.pathname === `/service/${s.id}`
                      ? "link active"
                      : "link"
                  }
                  onClick={closeNavbar}
                >
                  <Link className="linkdeco" to={`/service/${s.id}`}>
                    {s.title.charAt(0).toUpperCase() +
                      s.title.slice(1).toLowerCase()}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <NavDropdown
              title="Events"
              id="basic-nav-dropdown"
              className={
                location.pathname === "/events" ? "link active" : "link"
              }
            >
              <NavDropdown.Item
                className={
                  location.pathname === "/events/destination"
                    ? "link active"
                    : "link"
                }
                href="/events/destination"
                onClick={closeNavbar}
              >
                Destination Weddings
              </NavDropdown.Item>
              <NavDropdown.Item
                className={
                  location.pathname === "/events/family"
                    ? "link active"
                    : "link"
                }
                href="/events/family"
                onClick={closeNavbar}
              >
                Family
              </NavDropdown.Item>
              <NavDropdown.Item
                className={
                  location.pathname === "/events/corporate"
                    ? "link active"
                    : "link"
                }
                href="/events/corporate"
                onClick={closeNavbar}
              >
                Corporate
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className={
                location.pathname === "/contact" ? "link active" : "link"
              }
              href="/contact"
              onClick={closeNavbar}
            >
              Contact
              {location.pathname === "/contact" && (
                <div className="underline mx-auto" />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
