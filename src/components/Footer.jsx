import React from "react";
import "./Footer.css";
import { InstagramLogo, TwitterLogo, PinterestLogo } from "phosphor-react";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="copyRight">
        <p>&copy; 2024 Sugar Plum. All rights Reserved</p>
      </div>
      <div className="socialMediaIconsContainer">
        <div>
          <InstagramLogo size={20} color="#48D1CC" />
        </div>
        <div>
          <TwitterLogo size={20} color="#48D1CC" />
        </div>
        <div>
          <PinterestLogo size={20} color="#48D1CC" />
        </div>
      </div>
      <div className="centeredContainer">
        <div>
          <p className="aboutUs">About Us</p>
        </div>
        <div>
          <p className="contactUs">Contact Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
