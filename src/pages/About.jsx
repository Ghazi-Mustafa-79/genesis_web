import React from "react";
import { motion as Motion } from "framer-motion";
import { Users, Globe2, Target, Sparkles } from "lucide-react";
import TeamCircle from "../components/TeamCircle";
import WhatIsMUN from "../components/WhatIsMUN";
import DevelopersSection from "../components/DevelopersSection";

const AboutSection = () => {
  const cards = [
    {
      icon: <Users className="w-12 h-12 text-green-700 drop-shadow-lg" />,
      title: "Who We Are",
      desc: "Genesis MUN is a vibrant community of passionate students and leaders dedicated to diplomacy, debate, and problem-solving. We bring together young changemakers who aspire to shape tomorrow’s world.",
    },
    {
      icon: <Globe2 className="w-12 h-12 text-green-700 drop-shadow-lg" />,
      title: "What is MUN?",
      desc: "Model United Nations (MUN) is a simulation of the United Nations. Delegates represent countries, debate pressing global issues, draft resolutions, and practice diplomacy in a collaborative environment.",
    },
    {
      icon: <Target className="w-12 h-12 text-green-700 drop-shadow-lg" />,
      title: "Our Mission",
      desc: "We aim to empower students to think critically, communicate effectively, and lead confidently. Our mission is to cultivate future leaders who solve challenges through dialogue and unity.",
    },
  ];

  const journey = [
    {
      year: "2022",
      event: "Founded with a vision to inspire youth leadership.",
    },
    {
      year: "2023",
      event: "Hosted our first international-level MUN conference.",
    },
    {
      year: "2024",
      event: "Expanded partnerships with schools & universities.",
    },
  ];

  return (
    <section className="relative bg-[#f2eab8] py-24 px-6 md:px-12 overflow-hidden">
      {/* Floating sparkles */}
      <Motion.div
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-10 text-green-500"
      >
        <Sparkles size={40} />
      </Motion.div>
      <Motion.div
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-20 right-10 text-yellow-400"
      >
        <Sparkles size={50} />
      </Motion.div>

      {/* Header */}
      <Motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-green-700 via-green-500 to-yellow-500 bg-clip-text text-transparent"
      >
        About Genesis MUN
      </Motion.h2>

      {/* Subtitle */}
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="flex justify-center items-center gap-2 text-green-700 text-lg md:text-xl font-medium mt-4"
      >
        <Sparkles className="w-5 h-5 text-green-600" />
        Shaping Leaders of Tomorrow
        <Sparkles className="w-5 h-5 text-green-600" />
      </Motion.div>

      {/* About text */}
      <Motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-center"
      >
        Genesis MUN is a global platform where young minds come together to{" "}
        <span className="font-semibold text-green-700">debate</span>,{" "}
        <span className="font-semibold text-green-700">collaborate</span>, and{" "}
        <span className="font-semibold text-green-700">innovate</span>. Our
        mission is to empower students with confidence, diplomacy, and
        leadership skills to make a lasting impact on the world.
      </Motion.p>

      {/* Our Journey */}
      <div className="max-w-4xl mx-auto mt-24">
        <Motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center text-green-900 mb-12"
        >
          <TeamCircle />
          <WhatIsMUN />
          <DevelopersSection />
          Our Journey
        </Motion.h3>
        <div className="relative">
          {journey.map((item, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative mb-12 p-6 rounded-2xl bg-white shadow-md border border-green-200 ${
                i % 2 === 0 ? "md:ml-20" : "md:mr-20"
              }`}
            >
              <span className="absolute -top-3 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm shadow-md">
                {item.year}
              </span>
              <p className="text-gray-700">{item.event}</p>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-24">
        {cards.map((card, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{
              opacity: 1,
              y: 0,
              backgroundColor: "#ffffff",
              boxShadow: "0 0 20px rgba(34,197,94,0.3)",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f0fff4",
              boxShadow: "0 0 40px rgba(34,197,94,0.6)",
            }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 text-center border border-green-200 relative group overflow-hidden"
          >
            <Motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="flex justify-center mb-4"
            >
              {card.icon}
            </Motion.div>

            <h3 className="text-xl font-bold text-green-800 mb-4">
              {card.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
          </Motion.div>
        ))}
      </div>

      {/* Closing highlight */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-24 text-center max-w-3xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-green-900 font-semibold">
          🌍 Together, we’re building a platform for dialogue, leadership, and
          global solutions.
        </p>
      </Motion.div>
    </section>
  );
};

export default AboutSection;
