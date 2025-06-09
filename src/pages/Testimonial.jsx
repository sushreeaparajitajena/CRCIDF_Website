import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Testimonial.css";

// Import Images
import testimonial1 from "../assets/testimonial1.jpeg";
import testimonial2 from "../assets/testimonial2.jpeg";
import testimonial3 from "../assets/testimonial3.jpeg";
import testimonial4 from "../assets/testimonial4.jpeg";
import testimonial5 from "../assets/testimonial5.jpeg";

const images = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5];

const TestimonialSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const swiperRef = useRef(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="course-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Testimonials</h1>
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt;
            <span className="breadcrumb-active"> Testimonials</span>
          </div>
        </div>
      </div>

      {/* Testimonial Slider */}
      <div className="test-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 2500 }}
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <img
                src={img}
                alt={`testimonial-${index}`}
                className="testimonial-img"
                onClick={() => handleImageClick(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Enlarged Image Popup */}
      {selectedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <img src={selectedImage} alt="Selected" className="enlarged-img" />
        </div>
      )}
    </div>
  );
};

export default TestimonialSlider;


// import React from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "../styles/Testimonial.css"; // Ensure you have styles

// // Import Images
// import testimonial1 from "../assets/testimonial1.jpeg";
// import testimonial2 from "../assets/testimonial2.jpeg";
// import testimonial3 from "../assets/testimonial3.jpeg";
// import testimonial4 from "../assets/testimonial4.jpeg";
// import testimonial5 from "../assets/testimonial5.jpeg"; 

// const images = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5];

// const TestimonialSlider = () => {
//   return (
//     <div>
//       {/* Banner Section */}
//       <div className="course-banner">
//         <div className="banner-overlay">
//           <h1 className="banner-title">Testimonials</h1>
//           <div className="breadcrumb">
//             <Link to="/" className="breadcrumb-link">Home</Link> &gt;
//             <span className="breadcrumb-active"> Testimonials</span>
//           </div>
//         </div>
//       </div>

//       {/* Testimonial Slider */}
//       <div className="test-container">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={20}
//           slidesPerView={3} // Show 3 images per row
//           autoplay={{ delay: 2500 }}
//           loop={true}
//           pagination={{ clickable: true }}
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index} className="testimonial-slide">
//               <img src={img} alt={`testimonial-${index}`} className="testimonial-img" />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;
