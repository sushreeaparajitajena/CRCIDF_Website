import React from "react";
import "../styles/aboutus.css";
import logo from "../assets/logo.jpg";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <div className="aboutus-text">
          <h1>WANT TO KNOW ABOUT US ?</h1>
          <p>
          The Centre for Research on Cyber Intelligence and Digital Forensics is a research body 
          formed by industry specialists with decades of experience and expertise in Cyber 
          Forensics, Digital Intelligence and Security. 
          </p>
          
          
        </div>
        <div className="aboutus-image-container">
          <img src={logo} alt="Cyber Security" className="aboutus-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


