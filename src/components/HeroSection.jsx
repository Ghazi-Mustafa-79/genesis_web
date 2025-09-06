import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-b from-[#f2eab8]500 via-[#f2eab8]-700 to-[#f0ebc6]">
      {/* Logo faded in background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/Section 1.png"
          alt="Genesis MUN Logo"
          className="w-[300px] md:w-[600px] opacity-25 absolute top-4 md:top-1 mx-auto left-0 right-0"
        />

        {/* Green gradient overlay (softer, no white) */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-100/10 via-green-50/2 to-green-200/5"></div>
      </div>

      <div className="relative max-w-4xl z-10 pt-20 md:pt-48 lg:pt-10">
        {/* Heading Animation */}
        <Motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-green-900 leading-tight"
        >
          Welcome to <br />
          <span className="text-green-700"> Genesis MUN</span>
        </Motion.h1>

        {/* Subtitle Animation */}
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-green-800"
        >
          Join us in shaping leaders of tomorrow by exploring debate, practicing
          diplomacy, and building global awareness.
        </Motion.p>

        {/* CTA Button Animation */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8"
        >
          <Link
            to="/Register"
            className="px-8 py-3 text-white font-semibold rounded-xl shadow-lg hover:bg-green-800 hover:scale-105 transition transform duration-300"
            style={{
              backgroundImage: "url('/navbar-bg2.jpeg')", // button texture
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Enroll Now
          </Link>
        </Motion.div>
      </div>

      {/* Decorative green blur */}
      <Motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-50"
      ></Motion.div>
    </section>
  );
};

export default HeroSection;
