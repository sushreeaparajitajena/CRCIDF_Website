import React, { useState } from 'react';
import '../styles/service.css';
import { useNavigate } from "react-router-dom"; 
import cyberResearch from "../assets/cyber-research.jpg";
import capacityBuilding from "../assets/capacity-building.webp";
import toolDesign from "../assets/tool-design.jpg";
import cyberInvestigation from "../assets/cyber-investigation.jpg";
import dprDocumentation from "../assets/dpr-documentation.jpg";
import cyberLabs from "../assets/cyber-labs.jpg";

const services = [
  {
    id: "cyber-research",
    title: "Cyber Research and Development",
    description: "We conduct in-depth research to develop cutting-edge cybersecurity solutions.",
    image: cyberResearch,
  },
  {
    id: "capacity-building",
    title: "Cyber Capacity Building",
    description: "Developing training programs and e-learning content for cybersecurity.",
    image: capacityBuilding,
  },
  {
    id: "tool-design",
    title: "Cyber Intern & Tool Design",
    description: "Creating innovative cybersecurity tools and training professionals.",
    image: toolDesign,
  },
  {
    id: "cyber-investigation",
    title: "Cyber Investigation & Forensic Assistance",
    description: "Providing forensic assistance, OSINT, and cyber investigation services.",
    image: cyberInvestigation,
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(null); 
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <div className="services-header">
        <h2>KEY SERVICES</h2>
        <button className="all-services-btn" onClick={() => navigate("/key-services")}>
          All Services
        </button>
        <div className="header-line"></div>
      </div>
      
      {/* Single Row Grid */}
      <div className="services-grid single-row">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`service-card ${activeService === service.id ? 'active' : ''}`}
            onClick={() => setActiveService(activeService === service.id ? null : service.id)}
          >
            <div className="flipbox">
              <div className="flipbox-inner">
                {/* Front side of the flipbox */}
                <div className="flipbox-front">
                  <div className="service-image-container">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="service-image"
                    />
                  </div>
                  <h3>{service.title}</h3>
                </div>

                {/* Back side of the flipbox */}
                <div className="flipbox-back">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;







