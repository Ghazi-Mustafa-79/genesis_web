// WhyJoinSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { Globe, Users, Award, Mic, Sparkles } from "lucide-react";

const WhyJoinSection = () => {
  const items = [
    {
      icon: <Globe className="w-10 h-10 text-green-700" />,
      title: "Global Topics",
      text: "Engage in international issues that matter.",
    },
    {
      icon: <Users className="w-10 h-10 text-green-700" />,
      title: "Networking",
      text: "Meet peers from schools across the nation.",
    },
    {
      icon: <Award className="w-10 h-10 text-green-700" />,
      title: "Awards",
      text: "Get recognized for debating excellence.",
    },
    {
      icon: <Mic className="w-10 h-10 text-green-700" />,
      title: "Training",
      text: "Workshops for beginners and pros.",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-green-50 via-white to-green-100 overflow-hidden">
      {/* Floating decorations */}
      <Motion.div
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-12 left-12 text-green-400"
      >
        <Sparkles size={40} />
      </Motion.div>
      <Motion.div
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-16 right-16 text-yellow-400"
      >
        <Sparkles size={48} />
      </Motion.div>

      {/* Heading */}
      <Motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 p-2 bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent"
      >
        Why Join Us?
      </Motion.h2>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(34,197,94,0.4)",
              backgroundColor: "#f0fdf4",
            }}
            className="bg-white p-8 rounded-3xl shadow-md border border-green-100 text-center transition"
          >
            <div className="flex justify-center mb-5">{item.icon}</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.text}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoinSection;
