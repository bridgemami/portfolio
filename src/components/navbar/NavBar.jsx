import React from "react";
import Container from '../../../node_modules/react-bootstrap/Container';
import Nav from '../../../node_modules/react-bootstrap/Nav';
import Navbar from '../../../node_modules/react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../../images/michaelCrop_no_background_100px.png";
import resume from "../../../src/Resume_10_22.pdf";
import style from "./navbar.module.css";

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        {/* <!--logo--> */}
        <Navbar.Brand href="index.html">
          <img src={logo} alt="Michael Bridgeman Logo" />
          </Navbar.Brand>
        {/* <!--hamburger icon--> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <!--Nav Items--> */}
          <Nav className="me-auto">
              <Nav.Link
                className={`${style.font}`}
                aria-current="page"
                href="index.html"
              >
                Home
              </Nav.Link>
              <Nav.Link className={`${style.font}`} href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className={`${style.font}`} href="#projects">
                Project
              </Nav.Link>
              <Nav.Link className={`${style.font}`} href="#about">
                About
              </Nav.Link>
              <Nav.Link className={`${style.font}`} href="#contact">
                Contact
                </Nav.Link>
              {/* <a className="nav-link" href={resume} download>Resume <i className="fa-solid fa-file-arrow-down">
                  
                 </i> */}
              <Nav.Link href={resume} className={`nav-link ${style.font}`} download>
                Resume
                <FontAwesomeIcon
                  icon={faFileArrowDown}
                  className={style.faDownArrow}
                />
              </Nav.Link>
              </Nav>
          {/* contact nav */}
          <Nav className={`ms-auto-lg p-2 flex-row`}>
            <Nav.Link
              href="https://github.com/bridgemami"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className={style.faThreeX} icon={faGithub} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/bridgemanmichael/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className={`${style.faThreeX} ${style.middleIcon}`}
                icon={faLinkedin}
              />
            </Nav.Link>
            <Nav.Link href="mailto:mdbridgeman@gmail.com">
              <FontAwesomeIcon className={style.faThreeX} icon={faEnvelope} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
