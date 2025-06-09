import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; 
import ResearchAdvocacy from "./pages/ResearchAdvocacy"; 
import KeyServices from "./pages/KeyServices";
import MediaGallery from "./pages/MediaGallery";
import Testimonials from "./pages/Testimonial"; 
import "./App.css";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Awards from "./pages/Awards";
import Careers from "./pages/Careers";



const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/research-advocacy" element={<ResearchAdvocacy />} />
          <Route path="/key-services" element={<KeyServices />} />
          <Route path="/mediagallery" element={<MediaGallery />} />
          <Route path="/contact-us" element={< ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/events" element={<Events/>} />
          <Route path="/awards" element={<Awards/>} />
          <Route path="/careers" element={<Careers/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
