import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Testimonial from "../components/Testimonial";
import ContactUs from "../components/ContactUs";
import VisionMission from "../components/VisionMission"

const Home = () => {
    return (
        <div>
            
            <Hero />
            <AboutUs />
            <VisionMission />
            <Services />
           
            <Testimonial />
            
            <ContactUs />
            
        </div>
    );
};

export default Home;
