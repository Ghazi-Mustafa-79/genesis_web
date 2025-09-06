// Loader.jsx
import React from "react";
import { motion as Motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-md z-[9999]">
      {/* Rotating ring around logo */}
      <Motion.div
        className="absolute w-44 h-44 md:w-60 md:h-60 rounded-full border-4 border-t-green-600 border-green-300/30"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      />

      {/* Logo with glow effect */}
      <Motion.img
        src="/logo 3.png"
        alt="Loading..."
        className="w-28 h-28 md:w-36 md:h-36 rounded-full shadow-lg"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Loader;
