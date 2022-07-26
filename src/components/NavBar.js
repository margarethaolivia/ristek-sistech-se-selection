import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import olivia from "../assets/img/olivia.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={olivia} alt="olivia" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#aboutme"
              className={
                activeLink === "aboutme" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("aboutme")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#myjourney"
              className={
                activeLink === "myjourney"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("myjourney")}
            >
              My Journey
            </Nav.Link>
            <Nav.Link
              href="#blogs"
              className={
                activeLink === "blogs" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("blogs")}
            >
              Blogs
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/margaretha-olivia-haryono/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/margarethaolivia/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/margarethaolivia/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
