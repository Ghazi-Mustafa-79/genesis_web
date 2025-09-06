// CTASection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-green-50 via-white to-green-100 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 left-20 w-40 h-40 bg-green-200 blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-20 w-56 h-56 bg-yellow-200 blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent"
        >
          Be Part of the Change
        </Motion.h2>

        {/* Subtitle */}
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
        >
          Join <span className="font-semibold text-green-700">Genesis MUN</span>
          and shape the leaders of tomorrow through dialogue, diplomacy, and
          unity.
        </Motion.p>

        {/* Button */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="/register"
            className="px-8 py-4 bg-green-700 text-white font-semibold rounded-full shadow-md hover:bg-green-800 hover:shadow-lg transition"
          >
            Register Now
          </a>
        </Motion.div>

        {/* Decorative Sparkles */}
        <Motion.div
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute top-12 left-12 text-green-500"
        >
          <Sparkles size={32} />
        </Motion.div>
        <Motion.div
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute bottom-12 right-12 text-yellow-500"
        >
          <Sparkles size={36} />
        </Motion.div>
      </div>
    </section>
  );
};

export default CTASection;
