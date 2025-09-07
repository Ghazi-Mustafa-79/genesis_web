import React from "react";
import HomeLinks from "../components/HomeLinks.jsx";
import HeroSection from "../components/HeroSection.jsx";
import CTASection from "../components/CTASection.jsx";
import WhyJoinSection from "../components/WhyJoinSection.jsx";
import EventTimeline from "../components/EventTimeline.jsx";

const Home = () => (
  <div className="text-center">
    <HeroSection />
    <HomeLinks />
    <EventTimeline />
    <WhyJoinSection />
    <CTASection />
  </div>
);

export default Home;
