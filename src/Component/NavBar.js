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

  return (
    <Navbar expand="lg" bg="dark" className="custom-header">
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
          <Nav className="me-auto">
            <Nav.Link
              className={location.pathname === "/" ? "link active" : "link"}
              href="/"
            >
              Home
            </Nav.Link>

            <Nav.Link
              className={
                location.pathname === "/about-us" ? "link active" : "link"
              }
              href="/about-us"
            >
              About
            </Nav.Link>
            <Nav.Link
              className={
                location.pathname === "/contact" ? "link active" : "link"
              }
              href="/contact"
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
              href="/events"
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
