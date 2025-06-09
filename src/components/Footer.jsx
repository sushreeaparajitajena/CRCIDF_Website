import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";
import { MdOutlineCall } from "react-icons/md";
import "../styles/Footer.css";  // Import CSS file

const Footer = () => {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section">
          <h2>CRCIDF</h2>
          <p>The Centre for Research on Cyber Intelligence and Digital Forensics is a research body 
formed by industry specialists with decades of experience and expertise in Cyber 
Forensics, Digital Intelligence and Security. </p>
          <div className="footer-icons">
            <a href="#"><FiInstagram /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiLinkedin /></a>
            <a href="#"><FiYoutube /></a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>About Company</li>
            <li>Cookies Usage</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Cyber Security</li>
            <li>IT Consulting</li>
            <li>Agri Services</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p><FaPhoneAlt />+91-xxxxxxxxxx</p>
          
          <p><FaEnvelope /> info@crcidf.org</p>
          <p><FaMapMarkerAlt /> Hall No# xxx, xxx Floor, Metro House, Plot No- x/xx, xxxx Square, xxxx, xxxxx, AP-xxxxxx, India</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© Copyrights 2025 CRCIDF All rights reserved.</p>
      </div>

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <button className="call-btn" onClick={() => window.location.href = "tel:+918260899960"}>
          <FaPhoneAlt />
        </button>
        <button className="whatsapp-btn" onClick={() => window.open("https://wa.me/918260899960", "_blank")}> 
          <FaWhatsapp />
        </button>
        <button className="arrow-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
