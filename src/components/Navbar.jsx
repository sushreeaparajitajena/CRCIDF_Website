// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link
// import "../styles/navbar.css";
// import logo from "../assets/logo.jpg"; 

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="navbar">
//       <div className="navbar-left">
//         <img src={logo} alt="MSRS Corporation Logo" className="logo" />
//         <div>
//           <h1>CRCIDF</h1>
//           <p>SINCE 1920</p>
//         </div>
//       </div>

//       {/* Menu Toggle Button */}
//       <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>

//       {/* Navbar Links */}
//       <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
//         <Link to="/">Home</Link> 
//         <Link to="/research-advocacy">Research & Advocacy</Link> {/* Updated to Link */}
        
//           <Link to="/key-services">Key Services</Link>
//           <Link to="#">Media & Gallery</Link>
//           <Link to="/Testimonials">Testimonials</Link>
//           <Link to="/Events">Events</Link>
//           <Link to="/Awards">Awards</Link>
//           <Link to="/Careers">Careers</Link>
//           <Link to="/contact-us">Contact Us</Link>
        
//       </div>

//       <button className="profile-btn">Enquiry Now</button>
//     </div>
//   );
// };

// export default Navbar;















import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="MSRS Corporation Logo" className="logo" />
        <div>
          <h1>CRCIDF</h1>
          <p>SINCE 1920</p>
        </div>

        {/* Toggle visible in left for small screens */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/research-advocacy">Research & Advocacy</Link>
        <Link to="/key-services">Key Services</Link>
        <Link to="/mediagallery">Media & Gallery</Link>
        <Link to="/Testimonials">Testimonials</Link>
        <Link to="/Events">Events</Link>
        <Link to="/Awards">Awards</Link>
        <Link to="/Careers">Careers</Link>
        <Link to="/contact-us">Contact Us</Link>
        <button className="profile-btn">Enquiry Now</button>
      </div>
    </div>
  );
};

export default Navbar;





