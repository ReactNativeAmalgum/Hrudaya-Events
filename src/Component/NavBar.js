import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./Images/logo.jpg";
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
            style={{ width: 100, height: "auto", borderRadius: "50%" }}
            alt="logo"
            src={logo}
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
            </Nav.Link>

            <Nav.Link
              className={
                location.pathname === "/about-us" ? "link active" : "link"
              }
              href="/about-us"
              onClick={closeNavbar}
            >
              About
            </Nav.Link>
            <Nav.Link
              className={
                location.pathname === "/contact" ? "link active" : "link"
              }
              href="/contact"
              onClick={closeNavbar}
            >
              Contact
            </Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
