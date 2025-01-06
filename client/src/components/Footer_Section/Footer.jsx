import React from "react";
import "./Footer.css";
import CompleteYourProfile from "../Primitive/CompleteYourProfile/CompleteYourProfile.jsx";
import NewsletterPerson from "../Graphics/NewsletterPerson/NewsletterPerson.jsx";
import logo from "../../assets/logo/logo.png";
import twitterIcon from "../../assets/icons/twitter.png";
import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import graphics from "../../assets/footer/graphic-section-background.png";

const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-section">
        <img className="logo" src={logo} alt="Curalink Logo" />
        <p>Follow us on</p>
        <div class="social-icons">
          <a href="#">
            <img className="icons" src={twitterIcon} alt="Twitter Logo" />
          </a>
          <a href="#">
            <img className="icons" src={facebookIcon} alt="Facebook Logo" />
          </a>
          <a href="#">
            <img className="icons" src={instagramIcon} alt="Instagram Logo" />
          </a>
          <a href="#">
            <img className="icons" src={linkedinIcon} alt="Linkedin Logo" />
          </a>
        </div>
        <div className="footer-section">
          <CompleteYourProfile />
        </div>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Resources</h4>
        <ul>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">How it Works</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Updates</a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>For Doctors</h4>
        <ul>
          <li>
            <a href="#">Register as Doctor</a>
          </li>
          <li>
            <a href="#">Doctor Login</a>
          </li>
          <li>
            <a href="#">Support for Doctors</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <div className="animation">
          <NewsletterPerson />
        </div>
        {/* <button class="newsletter-button">Subscribe to Newsletter</button> */}
      </div>
      <div className="subFooter">
        <p>© 2025 Curalink. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
