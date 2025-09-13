import React from "react";
import { motion as Motion } from "framer-motion";
import { Globe, Users, MessageSquare, Award } from "lucide-react";

const WhatIsMUN = () => {
  return (
    <section className="relative mb-[60px] py-16 px-4 md:px-10 bg-gradient-to-br from-[#f2eab8] via-[#e6f5d6] to-[#dff7f0] overflow-hidden rounded-[2rem] shadow-inner">
      {/* Decorative glowing shapes */}
      <div className="absolute -top-10 -left-10 w-36 h-36 bg-green-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-44 h-44 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold tracking-wide text-[#2f4f2f] mb-6 drop-shadow-lg"
        >
          🌍 What is MUN?
        </Motion.h2>

        {/* Intro */}
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-[#333] font-medium leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Model United Nations (MUN) is a platform where students become
          diplomats—representing countries, debating real issues, and crafting
          solutions. It’s a place to sharpen your voice, ideas, and leadership
          for the real world.
        </Motion.p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
          {[
            {
              title: "Global Issues",
              desc: "Debate climate change, human rights, conflicts, and global challenges.",
              icon: Globe,
              color: "from-green-50 to-green-100",
            },
            {
              title: "Teamwork & Debate",
              desc: "Form alliances, negotiate with others, and pass impactful resolutions.",
              icon: Users,
              color: "from-yellow-50 to-yellow-100",
            },
            {
              title: "Public Speaking",
              desc: "Boost confidence and communication by addressing delegates.",
              icon: MessageSquare,
              color: "from-green-100 to-lime-50",
            },
            {
              title: "Skills for Life",
              desc: "MUN builds critical thinking, diplomacy, and leadership skills.",
              icon: Award,
              color: "from-yellow-100 to-green-50",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-7 h-7 text-[#2f4f2f]" />
                  <h3 className="text-lg md:text-xl font-bold text-[#2f4f2f] tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-snug">
                  {item.desc}
                </p>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIsMUN;
