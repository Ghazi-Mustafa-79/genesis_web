// TimelineSection.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { CalendarDays, Award, Users } from "lucide-react";

const timeline = [
  {
    day: "Day 1",
    details: "Opening Ceremony & Committees Begin",
    icon: <Users className="w-5 h-5 text-green-900" />,
  },
  {
    day: "Day 2",
    details: "Debate Sessions & Social Event",
    icon: <CalendarDays className="w-5 h-5 text-green-900" />,
  },
  {
    day: "Day 3",
    details: "Awards & Closing Ceremony",
    icon: <Award className="w-5 h-5 text-green-900" />,
  },
];

const TimelineSection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-[#f2eab8] via-[#f2eab8]-200 to-[#f0ebc6]-500">
      {/* Subtle background glow */}
      <div className="absolute top-24 left-12 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-24 right-12 w-56 h-56 bg-green-300 rounded-full blur-3xl opacity-10"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold mb-12 text-green-900"
        >
          Event Timeline
        </Motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-green-700 ml-6 space-y-10">
          {timeline.map((t, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-12"
            >
              {/* Circle + icon */}
              <div className="absolute -left-6 top-0 w-10 h-10 rounded-full bg-white border-2 border-green-700 flex items-center justify-center shadow-md">
                {t.icon}
              </div>

              {/* Elegant Card */}
              <div className="p-6 rounded-xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-bold text-green-900">{t.day}</h4>
                <p className="text-gray-700 mt-1">{t.details}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
