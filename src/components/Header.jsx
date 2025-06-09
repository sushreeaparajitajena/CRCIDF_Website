import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
    <div className="left-content">
      <div className="header-left">
        <i className="fas fa-envelope"></i>
        <span>info@crcidf.org</span>
      </div>
      <div className="header-center">
        <i className="fas fa-phone"></i>
        <span>+91-XXXXXXXXXX</span>
      </div>
    </div>
      <div className="header-right">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>



  

  );
};

export default Header;






