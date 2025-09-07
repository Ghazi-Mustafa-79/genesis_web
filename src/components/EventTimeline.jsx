import React from "react";
import { motion as Motion } from "framer-motion";
import { Calendar, Users, Music, UtensilsCrossed, Award } from "lucide-react";

const events = [
  {
    day: "Day 1",
    items: [
      { name: "Orientation", icon: Calendar },
      { name: "Committee Sessions", icon: Users },
      { name: "Social Event", icon: Music },
    ],
  },
  {
    day: "Day 2",
    items: [
      { name: "Committee Sessions", icon: Users },
      { name: "Formal Dinner", icon: UtensilsCrossed },
      { name: "Award Ceremony", icon: Award },
    ],
  },
];

const EventTimeline = () => {
  return (
    <section className="relative py-10 px-4 bg-gradient-to-b text-center from-emerald-50 to-yellow-50">
      <div className="relative max-w-3xl mx-auto">
        {/* Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold text-center text-emerald-900 mb-10"
        >
          🌟 Event Timeline
        </Motion.h2>

        {/* Timeline container */}
        <div className="relative ml-6">
          {/* Animated vertical line */}
          <Motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-0 top-0 w-1 bg-emerald-600 rounded-full"
          ></Motion.div>

          {/* Timeline items */}
          <div className="space-y-10">
            {events.map((event, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Icon */}
                <span className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-white border-2 border-emerald-600 rounded-full shadow-md">
                  <Calendar className="w-5 h-5 text-emerald-700" />
                </span>

                {/* Card */}
                <div className="bg-white shadow-md border border-emerald-100 rounded-lg px-4 py-3 w-full hover:shadow-lg transition text-center">
                  <h3 className="text-base md:text-lg font-bold text-emerald-800 mb-2">
                    {event.day}
                  </h3>
                  <ul className="space-y-1">
                    {event.items.map((item, j) => {
                      const Icon = item.icon;
                      return (
                        <li
                          key={j}
                          className="flex items-center justify-center gap-2 text-gray-700 text-sm md:text-base"
                        >
                          <Icon className="w-4 h-4 text-emerald-600" />
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
