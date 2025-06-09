// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/testimonials.css';

// const Testimonial = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: 'Margarita Peres',
//       quote:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
//       image: 'https://bni-india.in/img/site/61b86b9dbc9e2500070cdb9a.jpg',
//     },
//     {
//       id: 2,
//       name: 'Rachelle Beaudry',
//       quote:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
//       image: 'https://media.istockphoto.com/id/1333001232/photo/portrait-of-indian-man-face-outdoors-looking-at-camera.jpg?s=612x612&w=0&k=20&c=Ne-OChwAEFF5U7yxOwUUqA8ELrJ1WCYho4RkW9v360I=',
//     },
//     {
//       id: 3,
//       name: 'Pedro Mendes',
//       quote:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
//       image: 'https://thumbs.dreamstime.com/b/vertical-portrait-happy-young-business-lady-indian-ethnicity-standing-confident-pose-looking-camera-profile-picture-339154738.jpg',
//     },
//   ];

//   return (
//     <div className="testimonial-section">
//       <div className="testimonial-content">
//         {/* Left Side: Heading and Description */}
//         <div className="testimonial-left">
//           <h1 className="testimonial-heading">OUR CUSTOMERS TESTIMONIAL</h1>
//           <p className="placeholder-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>

//           {/* View More Button Below Description */}
//           <div className="view-more-container">
//             <Link to="/testimonials" className="view-more-btn">View More</Link>
//           </div>
//         </div>

//         {/* Right Side: Testimonial Cards */}
//         <div className="testimonial-right">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="testimonial-card">
//               <div className="client-image-container">
//                 <img src={testimonial.image} alt={testimonial.name} className="client-image" />
//               </div>
//               <div className="testimonial-text">
//                 <div className="stars">★★★★★</div>
//                 <p className="quote">{testimonial.quote}</p>
//                 <p className="client-name">{testimonial.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/testimonials.css";

// Import images from assets
import img1 from "../assets/testimonial1.jpeg";
import img2 from "../assets/testimonial2.jpeg";
import img3 from "../assets/testimonial3.jpeg";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h1 className="testimonial-title">What Our Clients Say</h1>

      {/* Testimonial Grid - 3 Images in One Row */}
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <img src={img1} alt="Testimonial 1" className="testimonial-image" />
        </div>
        <div className="testimonial-card">
          <img src={img2} alt="Testimonial 2" className="testimonial-image" />
        </div>
        <div className="testimonial-card">
          <img src={img3} alt="Testimonial 3" className="testimonial-image" />
        </div>
      </div>

      {/* View More Button */}
      <div className="view-more-container">
        <Link to="/testimonials" className="view-more-btn">View More</Link>
      </div>
    </div>
  );
};

export default Testimonial;






