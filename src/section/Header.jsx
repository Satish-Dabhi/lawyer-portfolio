import React, { useState } from "react";
import { Link } from "react-scroll";
import Hamburger from "../component/icons/Hamburger";
import '../style/header.css';
import lawyerLogo from '../images/in-logo.svg';


const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img
            className="logo"
            src={lawyerLogo}
            alt="logo"
          />
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul id="">
              <li className="current cursour-pointer">
                <Link to="home" spy={true} smooth={true} offset={10} duration={400}>Home</Link>
              </li>
              <li>
                <Link to="ourClients" spy={true} smooth={true} offset={10} duration={400}>Our Clients</Link>
              </li>
              <li>
                <Link to="aboutUs" spy={true} smooth={true} offset={10} duration={400}>About Us</Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true} offset={10} duration={400}>Portfolio</Link>
              </li>
              <li>
                <Link to="testimonial" spy={true} smooth={true} offset={10} duration={400}>Testimonials</Link>
              </li>
              <li>
                <Link to="contactinfo" spy={true} smooth={true} offset={10} duration={400}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

