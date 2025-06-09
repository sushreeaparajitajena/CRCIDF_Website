import React from "react";
import "../styles/keyservices.css";
import cyberResearch from "../assets/cyber-research.jpg";
import capacityBuilding from "../assets/capacity-building.webp";
import toolDesign from "../assets/tool-design.jpg";
import cyberInvestigation from "../assets/cyber-investigation.jpg";
import dprDocumentation from "../assets/dpr-documentation.jpg";
import cyberLabs from "../assets/cyber-labs.jpg";
import workshops from "../assets/workshops.webp";
import humanCapital from "../assets/human-capital.webp";
import securityAudit from "../assets/security-audit.jpg";
import cyberHygiene from "../assets/cyber-hygiene.jpg";

const services = [
  {
    title: "Cyber Research and Development",
    description: "We conduct in-depth research to develop cutting-edge cybersecurity solutions and advancements.",
    image: cyberResearch,
  },
  {
    title: "Cyber Capacity Building",
    description: "Developing training programs, SOPs, and e-learning content for cybersecurity capacity enhancement.",
    image: capacityBuilding,
  },
  {
    title: "Cyber Intern & Tool Design and Development",
    description: "Creating innovative cybersecurity tools and training future cybersecurity professionals.",
    image: toolDesign,
  },
  {
    title: "Cyber Investigation, OSINT & Digital Forensic Assistance",
    description: "Providing forensic assistance, open-source intelligence, and cyber investigation services.",
    image: cyberInvestigation,
  },
  {
    title: "DPR, RFP/EoI & Visionary Document Design",
    description: "Expertise in designing project reports, proposals, and visionary documents for cybersecurity initiatives.",
    image: dprDocumentation,
  },
  {
    title: "Setting up and Integration of Cyber Labs",
    description: "Building and integrating advanced cyber labs for research, education, and training purposes.",
    image: cyberLabs,
  },
  {
    title: "Organizing Workshops, Webinars & Trainings",
    description: "Hosting industry-leading events to educate and spread awareness on cybersecurity trends.",
    image: workshops,
  },
  {
    title: "Human Capital Assistance",
    description: "Providing skilled cybersecurity professionals for various industry roles and requirements.",
    image: humanCapital,
  },
  {
    title: "Cyber Security Audit, VAPT & Incident Response",
    description: "Offering security audits, vulnerability assessments, penetration testing, and incident response services.",
    image: securityAudit,
  },
  {
    title: "Advocacy on Cyber Hygiene, Online Safety & Digital Wellbeing",
    description: "Promoting safe online practices and digital wellbeing through advocacy programs.",
    image: cyberHygiene,
  },
];

const KeyServices = () => {
  return (
    <div className="keyservices-container">
      <h1 className="keyservices-heading">Key Services</h1>
      <p className="keyservices-description">
        CRCIDF is providing the following key services to academia, corporate & law enforcement agencies:
      </p>
      <div className="keyservices-grid">
        {services.map((service, index) => (
          <div key={index} className="keyservices-flipbox">
            <div className="keyservices-flipbox-inner">
              {/* Front Side */}
              <div className="keyservices-flipbox-front">
                <img src={service.image} alt={service.title} className="keyservices-image" />
                <h3 className="keyservices-title">{service.title}</h3>
              </div>
              {/* Back Side */}
              <div className="keyservices-flipbox-back">
                <p className="keyservices-description-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyServices;
