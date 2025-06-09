import React, { useState } from "react";
import "../styles/mediagallery.css";
import img1 from "../assets/media-gallery/1.jpeg";
import img2 from "../assets/media-gallery/2.jpeg";
import img3 from "../assets/media-gallery/3.jpeg";
import img4 from "../assets/media-gallery/4.jpeg";
import img5 from "../assets/media-gallery/5.jpeg";

const MediaGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="media-gallery-container">
      {/* Media Section */}
      <section className="media-section">
        <h1 className="section-heading">Media Highlights</h1>
        <div className="media-grid">
          <div className="media-card">
            <iframe
              src="https://www.youtube.com/embed/RI_UXpV8XQQ"
              title="Media Video 1"
              allowFullScreen
            ></iframe>
            <p>Cyber Awareness Campaign</p>
          </div>
          <div className="media-card">
            <iframe
              src="https://www.youtube.com/embed/Z4F3AXvrLKo"
              title="Media Video 2"
              allowFullScreen
            ></iframe>
            <p>Digital Forensics Workshop</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h1 className="section-heading">Our Gallery</h1>
        <div className="gallery-grid">
          {[img1, img2, img3, img4, img5,].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Event ${idx + 1}`}
              className="gallery-image"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </section>

      {/* Image Overlay */}
      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <span className="close-btn" onClick={() => setSelectedImage(null)}>&times;</span>
          <img src={selectedImage} alt="Full View" className="overlay-image" />
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
