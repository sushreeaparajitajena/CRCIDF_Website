import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/awards.css';

const AwardsPage = () => {
  return (
    <div className="awards-page-container">
      {/* Banner Section */}
      <div className="course-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Cyber Policing Awards</h1>
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;
            <span className="breadcrumb-active"> Awards</span>
          </div>
        </div>
      </div>

      <div className="awards-content">
        <div className="awards-header">
          <h2>Cyber Policing Awards - 2021</h2>
          <p className="awards-subtitle">An award for Compliance in Policing Standards and Best Practices</p>
          <p className="deadline"><strong>Last Date for Nominations:</strong> 30th of November</p>
        </div>

        <div className="awards-section">
          <h3>Objective:</h3>
          <ul className="objectives-list">
            <li>To recognize and honor Indian Law enforcement officials at the rank of Constabulary, Investigating Officer (IO) to DG rank officers.</li>
            <li>Officers who have done excellent work in complaint handling & fast disposable mechanism, cybercrime investigation, Incident Response at the scene of crime.</li>
            <li>Officers who have done admirable work in formulating the cyber policies, implementing the modernization standards.</li>
            <li>The Law Enforcement Officials who have developed innovative technology solutions to prevention, identification, detecting and combating of existing and emerging cyber crimes in their jurisdiction.</li>
            <li>To recognize the efforts put into building the capacity of law enforcement officials by organizing regular and specialized capacity building and imparting training.</li>
          </ul>
        </div>

        <div className="awards-section">
          <h3>Awards Categories</h3>
          <div className="awards-categories">
            <div className="award-card">
              <h4>Lifetime Achievement Award</h4>
              <a href="https://forms.gle/4aHDuZs2inYYadEg8" target="_blank" rel="noopener noreferrer" className="nominate-btn">
                Nominate Now
              </a>
            </div>
            
            <div className="award-card">
              <h4>Cyber Star Award</h4>
              <a href="https://forms.gle/PVzomuBDwt4RPj1V8" target="_blank" rel="noopener noreferrer" className="nominate-btn">
                Nominate Now
              </a>
            </div>
            
            <div className="award-card">
              <h4>Best Cybercrime Investigator Award</h4>
              <a href="https://forms.gle/r7AQkVFaqUeEM7ya9" target="_blank" rel="noopener noreferrer" className="nominate-btn">
                Nominate Now
              </a>
            </div>
            
            <div className="award-card">
              <h4>Best Cyber Police Station Award</h4>
              <a href="https://forms.gle/ia1BLKWMiq6j4s9A8" target="_blank" rel="noopener noreferrer" className="nominate-btn">
                Nominate Now
              </a>
            </div>
            
            <div className="award-card">
              <h4>Cyber Champion Award</h4>
              <a href="https://forms.gle/LVzZcgTHmTwoQccE8" target="_blank" rel="noopener noreferrer" className="nominate-btn">
                Nominate Now
              </a>
            </div>
          </div>
        </div>

        <div className="organizers-section">
          <h3>Organised & Powered By</h3>
          <div className="organizers-logos">
            <span>Centre for Research on Cyber Intelligence and Digital Forensics (CRCIDF)</span>
            <span>ISEA (CDAC-Hyd.)</span>
            <span>Cyber Peace Foundation</span>
            <span>International Justice Mission (IJM)</span>
            <span>Prodiscover</span>
            <span>MSAB</span>
          </div>
        </div>

        <div className="download-section">
          <a href="https://drive.google.com/file/d/1Kh-48Eq1B0esC-UtB6M0HpeNAmyerUIb/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="download-btn">
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default AwardsPage;