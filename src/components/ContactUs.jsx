import React from "react";
import '../styles/contactus.css'; 
import { useNavigate } from "react-router-dom";  

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-us-container">
      {/* Left Section: Text + Contact Details */}
      <div className="left-section">
        <h1 className="heading">CONTACT US</h1>
        <p className="description">
          We’d love to hear from you! Whether you have a question about our services,  
          need assistance, or just want to say hello, our team is ready to help.  
          Reach out to us and let's connect.
        </p>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Connect With Us</h3>
          <p><strong>Contact:</strong> +91-7793960710</p>
          <p><strong>Mail:</strong> info@crcidf.org</p>
          <p><strong>Location:</strong> Hall No# 2, 4th Floor, Metro House, Plot No- A/410,  
          Vani Vihar Square, Saheed Nagar, Bhubaneswar, Odisha-751007, India</p>
        </div>
        <button className="cta-button" onClick={() => navigate("/contact-us")}>
          Get Started
        </button>
      </div>
      

      {/* Right Section: Image (Already added by you) */}
      <div className="image-section">
        <img
          alt="Illustration of communication"
          className="illustration"
          src="https://media.istockphoto.com/id/1450058572/photo/businessman-using-a-laptop-and-touching-on-virtual-screen-contact-icons-consists-of-telephone.jpg?s=612x612&w=0&k=20&c=R5wzCGHu6ZS-8EQpJ2Z1tkSbKGGdJH4apVhFM18EXSM="
        />
      </div>
    </div>
  );
};

export default ContactUs;





