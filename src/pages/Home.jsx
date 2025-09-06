import React from "react";
import HomeLinks from "../components/HomeLinks.jsx";
import HeroSection from "../components/HeroSection.jsx";
import TimelineSection from "../components/TimelineSection.jsx";
import CTASection from "../components/CTASection.jsx";
import WhyJoinSection from "../components/WhyJoinSection.jsx";

const Home = () => (
  <div className="text-center">
    <HeroSection />
    <HomeLinks />
    <TimelineSection />
    <WhyJoinSection />
    <CTASection />
  </div>
);

export default Home;
