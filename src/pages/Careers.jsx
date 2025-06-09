import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/careers.css';

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState('internships');
  const [expandedBenefit, setExpandedBenefit] = useState(null);

  const toggleBenefit = (index) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  const benefits = [
    {
      title: "Expert Mentorship",
      description: "Work directly with industry leaders in cyber intelligence and digital forensics.",
      icon: "👨‍🏫"
    },
    {
      title: "Cutting-edge Technology",
      description: "Access to the latest tools and technologies in cybersecurity research.",
      icon: "💻"
    },
    {
      title: "Real-world Projects",
      description: "Contribute to live projects with law enforcement and government agencies.",
      icon: "🌐"
    },
    {
      title: "Professional Certification",
      description: "Receive a certificate upon successful completion of your internship.",
      icon: "📜"
    },
    {
      title: "Career Pathways",
      description: "Opportunity to transition into full-time roles based on performance.",
      icon: "🚀"
    }
  ];

  const jobOpenings = [
    {
      title: "Cybersecurity Analyst",
      type: "Full-time",
      location: "Hyderabad / Remote"
    },
    {
      title: "Digital Forensics Specialist",
      type: "Full-time",
      location: "Delhi"
    },
    {
      title: "Cyber Intelligence Researcher",
      type: "Contract",
      location: "Bangalore"
    },
    {
      title: "Security Training Developer",
      type: "Full-time",
      location: "Mumbai"
    }
  ];

  return (
    <div className="careers-page-container">
      {/* Hero Banner */}
      <div className="careers-hero">
        <div className="hero-overlay">
          <h1>Careers & Internship Opportunities</h1>
          <p>Join our mission to combat cybercrime and advance digital security</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="careers-content">
        {/* Intro Section */}
        <section className="intro-section">
          <h2>Grow With CRCIDF</h2>
          <p className="intro-text">
            At CRCIDF, we believe in fostering talent and providing growth opportunities in the fields of 
            Cyber Intelligence, Digital Forensics, and Cyber Security. We offer internships, research 
            assistant positions, and full-time career opportunities for those passionate about contributing to 
            the fight against cybercrime and advancing the cybersecurity field.
          </p>
        </section>

        {/* Tab Navigation */}
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'internships' ? 'active' : ''}`}
            onClick={() => setActiveTab('internships')}
          >
            Internship Programs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'careers' ? 'active' : ''}`}
            onClick={() => setActiveTab('careers')}
          >
            Career Opportunities
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'internships' ? (
            <>
              <section className="internship-section">
                <h3>Internship Opportunities</h3>
                <p>
                  We welcome students and recent graduates to apply for internships in various domains such as 
                  cyber research and development, digital forensics, OSINT, and cybersecurity audits. Interns 
                  gain hands-on experience working alongside industry experts and contributing to innovative 
                  projects.
                </p>
                
                <div className="benefits-grid">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className={`benefit-card ${expandedBenefit === index ? 'expanded' : ''}`}
                      onClick={() => toggleBenefit(index)}
                    >
                      <div className="benefit-header">
                        <span className="benefit-icon">{benefit.icon}</span>
                        <h4>{benefit.title}</h4>
                      </div>
                      <div className="benefit-details">
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <>
              <section className="careers-section">
                <h3>Current Openings</h3>
                <div className="jobs-list">
                  {jobOpenings.map((job, index) => (
                    <div key={index} className="job-card">
                      <div className="job-info">
                        <h4>{job.title}</h4>
                        <div className="job-meta">
                          <span className="job-type">{job.type}</span>
                          <span className="job-location">{job.location}</span>
                        </div>
                      </div>
                      <button className="apply-btn">View Details</button>
                    </div>
                  ))}
                </div>
                <div className="custom-opportunity">
                  <h4>Don't see your perfect role?</h4>
                  <p>
                    We're always interested in hearing from talented individuals. 
                    Send us your resume and tell us how you can contribute to our mission.
                  </p>
                </div>
              </section>
            </>
          )}
        </div>

        {/* Application Section */}
        <section className="apply-section">
          <div className="apply-content">
            <h2>Ready to Join Our Team?</h2>
            <p>
              To apply for internships or career opportunities, please submit your resume and cover letter to 
              our HR department at <a href="mailto:hr@crcidf.org">hr@crcidf.org</a>. Be sure to specify your area of interest and any relevant 
              experience or skills.
            </p>
            <div className="cta-buttons">
              <a href="mailto:hr@crcidf.org" className="primary-cta">
                Email Your Application
              </a>
              <button className="secondary-cta">
                Download Application Form
              </button>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="culture-section">
          <h2>Our Culture</h2>
          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-icon">🌱</div>
              <h4>Continuous Learning</h4>
              <p>Regular training sessions and access to industry conferences</p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">🤝</div>
              <h4>Collaborative Environment</h4>
              <p>Work with cross-functional teams on impactful projects</p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">💡</div>
              <h4>Innovation Focus</h4>
              <p>Encouragement to develop and implement new ideas</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;