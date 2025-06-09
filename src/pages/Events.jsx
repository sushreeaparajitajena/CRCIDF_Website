import React from 'react';
import { Link } from 'react-router-dom'; // Added missing import
import '../styles/events.css';

const EventPage = () => {
  return (
    <div className="event-page-container">
      {/* Banner Section */}
      <div className="course-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Events</h1> {/* Changed from Testimonials to Events */}
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;
            <span className="breadcrumb-active"> Events</span> {/* Changed from Testimonials to Events */}
          </div>
        </div>
      </div>

      <div className="event-page">
        <header className="event-header">
          <h1>National Level Conclave on Cyber Policing Best Practices</h1>
          <p>Organized by CRCIDF in collaboration with C-DAC – ISEA, Cyber Peace Foundation, and IJM</p>
        </header>

        <div className="event-container">
          {/* Conclave 3.0 (2021) */}
          <div className="event-card">
            <div className="event-badge">3.0</div>
            <h2>National Virtual Conclave 3.0 - 2021</h2>
            <div className="event-details">
              <p><strong>Date:</strong> 3rd, 4th &amp; 5th December 2021</p>
              <p><strong>Time:</strong> 10:00 AM onwards (IST)</p>
              <p><strong>Mode:</strong> Virtual</p>
            </div>
            
            <div className="registration-section">
              <h3>Registration Links</h3>
              <div className="registration-links">
                <a href="https://forms.gle/mbRJn3HmSanqLMXKA" target="_blank" rel="noopener noreferrer" className="btn lea-btn">
                  For LEAs (Free Registration)
                </a>
                <a href="https://www.meraevents.com/event/crcidf-national-level-conclave-3-0" target="_blank" rel="noopener noreferrer" className="btn non-lea-btn">
                  For Non-LEAs
                </a>
              </div>
            </div>
            
            <div className="event-footer">
              <p>All participants will receive e-certificates from CRCIDF-ISEA-CPF-IJM</p>
              <a href="https://drive.google.com/file/d/1KbDmYqWvHyg_QOCrxb2jvT-qYbPilMTY/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="download-btn">
                Download Brochure
              </a>
            </div>
          </div>

          {/* Conclave 2.0 (2020) */}
          <div className="event-card">
            <div className="event-badge">2.0</div>
            <h2>National Virtual Conclave 2.0 - 2020</h2>
            <div className="event-details">
              <p><strong>Date:</strong> 15th – 17th October 2020</p>
              <p><strong>Time:</strong> 10:00 AM onwards (IST)</p>
              <p><strong>Mode:</strong> Virtual</p>
            </div>
            
            <div className="registration-section">
              <h3>Registration Links</h3>
              <div className="registration-links">
                <a href="https://forms.gle/oMWW2Frj9ebWmqcT6" target="_blank" rel="noopener noreferrer" className="btn lea-btn">
                  For LEAs (Free Registration)
                </a>
                <a href="https://www.meraevents.com/event/national-level-conclave-2-0?ucode=organizer" target="_blank" rel="noopener noreferrer" className="btn non-lea-btn">
                  For Non-LEAs
                </a>
                <a href="https://forms.gle/fQBvnLXMw64YKh5S7" target="_blank" rel="noopener noreferrer" className="btn ctf-btn">
                  OSINT – CTF 2020
                </a>
              </div>
            </div>
            
            <div className="event-footer">
              <p>All participants will receive e-certificates from CRCIDF-ISEA-CPF-IJM</p>
              <div className="event-footer-buttons">
                <a href="https://drive.google.com/file/d/1KcWi41WAWDWsRlXRLCkMlxVXTSnZt24s/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="download-btn">
                  Download Brochure
                </a>
                <a href="https://vimeo.com/463331454" target="_blank" rel="noopener noreferrer" className="video-btn">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="organizers">
          <h3>Organized in collaboration with:</h3>
          <div className="organizer-logos">
            <span>CRCIDF</span>
            <span>C-DAC – ISEA</span>
            <span>Cyber Peace Foundation</span>
            <span>International Justice Mission</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;