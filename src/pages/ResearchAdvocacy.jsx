import { Link } from "react-router-dom";
import "../styles/researchAdvocacy.css"; // Import CSS

const researchTopics = [
  {
    title: "Investigative Challenges in New Age Cyber Crimes",
    description: "Exploring new methods to tackle sophisticated cyber threats in the digital landscape.",
  },
  {
    title: "Recent Trends in Digital Forensics",
    description: "Latest advancements in digital forensic techniques to uncover hidden evidence.",
  },
  {
    title: "Handling of Anti-Forensic Challenges",
    description: "Countering anti-forensic methods used by cybercriminals to evade detection.",
  },
  {
    title: "SoP’s on Acquisition and Appreciation of Digital Evidence",
    description: "Standard procedures for acquiring and analyzing digital evidence in cybercrime investigations.",
  },
  {
    title: "Investigation of Cyber Frauds and Social Media Crimes",
    description: "Techniques to investigate online frauds, phishing scams, and social media crimes.",
  },
  {
    title: "Investigation on VoIP Call Crimes",
    description: "Identifying and tracking cybercriminals using Voice over IP (VoIP) technology.",
  },
  {
    title: "CDR-IPCDR-IPDR Analysis",
    description: "Understanding Call Detail Records (CDR) and IP-based data analysis in cyber investigations.",
  },
  {
    title: "Active Investigative Tech. (Tracking –Tracing –Trapping)",
    description: "Real-time tracking and tracing techniques for identifying cyber threats.",
  },
  {
    title: "CCPWC - CSAM Investigation and Monitoring Techniques",
    description: "Cyber Crime Prevention against Women & Children (CCPWC) and CSAM detection methods.",
  },
  {
    title: "Investigation on Masquerading Methods",
    description: "Detecting and preventing identity masquerading and digital impersonation attacks.",
  },
  {
    title: "Advanced Persistent Threats (APTs)",
    description: "Understanding long-term cyber threats and persistent attack methods used by adversaries.",
  },
  {
    title: "Cyber Threat Intelligence & Tracking of IOCs",
    description: "Gathering intelligence on Indicators of Compromise (IOCs) to mitigate cyber threats.",
  },
  {
    title: "HUMINT + OSINT + SOCMINT + SIGINT Intel",
    description: "Human intelligence and open-source intelligence in cyber investigations.",
  },
  {
    title: "Deep & Darknet related Offences",
    description: "Investigating illegal activities in the deep and dark web.",
  },
  {
    title: "Crypto-Currency related Offences",
    description: "Tracking and analyzing cryptocurrency transactions involved in cybercrimes.",
  },
  {
    title: "Cyber Laws & Amendment of IT Act",
    description: "Understanding legal frameworks and amendments in cyber law.",
  },
  {
    title: "Data Privacy & Localization",
    description: "Ensuring data protection and compliance with data localization policies.",
  },
  {
    title: "Government Initiatives on Combating Cyber Crimes",
    description: "National and international efforts in cybersecurity policy and cybercrime prevention.",
  },
];

const ResearchAdvocacy = () => {
  return (
    <div>
      {/* Research Banner Section */}
      <div className="course-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Research & Advocacy</h1>
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;
            <span className="breadcrumb-active"> Research & Advocacy</span>
          </div>
        </div>
      </div>

      {/* Research Section */}
      <div className="research-container">
        <h2 className="research-heading">Topics in Research & Advocacy</h2>
        <div className="research-grid">
          {researchTopics.map((topic, index) => (
            <div className="research-card" key={index}>
              <h3 className="research-title">{topic.title}</h3>
              <p className="research-description">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchAdvocacy;
