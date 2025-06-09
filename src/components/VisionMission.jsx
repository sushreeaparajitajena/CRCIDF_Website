import "../styles/visionMission.css"; // Import CSS
import visionImage from "../assets/vision-mission.jpeg"; // Import Image

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <div className="vision-mission-content">
        {/* Left Side - Image */}
        <div className="vision-mission-image-container">
          <img src={visionImage} alt="Vision & Mission" className="vision-mission-image" />
        </div>

        {/* Right Side - Content */}
        <div className="vision-mission-text">
          <h1>Vision & Mission</h1>
          <p>
            The vision of CRCIDF is to develop the efficiency and expertise of law enforcement
            agencies in handling cybercrimes investigation with predictive, proactive, and reactive
            approaches.
          </p>
          <p>
            CRCIDF's mission is to enable the law enforcement agencies and other government
            bodies to build homegrown cyber-crime & security technology platforms.
          </p>
          <p>
            We take an approach to conduct studies on the gaps and problems that government
            bodies, including law enforcement agencies, face. This covers the broader spectrum of cyber
            security, cyber-crimes, and digital forensics implications. We develop advanced methods
            and tools to counter large-scale, sophisticated cyber threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;





