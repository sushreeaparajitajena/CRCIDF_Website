import "../styles/hero.css"; // Import external CSS
import backgroundVideo from '../assets/video/crcidf_240p.mp4';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Background Vimeo Video */}
      {/* <iframe
        src="https://player.vimeo.com/video/463331523?autoplay=1&loop=1&muted=1&background=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="hero-video"
        title="Background Video"
      ></iframe> */}



<video
    src={backgroundVideo}
    autoPlay
    loop
    muted
    playsInline
    className="hero-video"
    title="Background Video"
  ></video>
      

      
    </div>
  );
};

export default Hero;



