import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

const people = [
  {
    name: "President",
    image: "/uzair.jpg",
    role: "Provides overall leadership, vision, and direction for the conference.",
  },
  {
    name: "Secretary General",
    image: "/ahmed.jpg",
    role: "Oversees execution and ensures smooth coordination across all departments.",
  },
  {
    name: "USG Committees",
    image: "/noor.jpg",
    role: "Leads committees and supports chairs in maintaining quality debate.",
  },
  {
    name: "Director General",
    image: "/sallu.png",
    role: "Manages logistics and operations for a seamless delegate experience.",
  },
];

const TeamCircle = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 mb-24 px-6 bg-gradient-to-br from-[#f3f1eb] via-[#d8d1a3] to-[#d3cb9b] rounded-[4rem] shadow-xl overflow-hidden mx-2 md:mx-6">
      {/* Decorative orbs in muted greens */}
      <div className="absolute -top-10 -left-10 w-56 h-56 bg-[#a5c95c] rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#96bc5d] rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#3d5a3c] mb-20 drop-shadow-sm">
          Meet Our Team
        </h2>

        {/* Circle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 place-items-center">
          {people.map((person, i) => (
            <div
              key={i}
              className="w-40 md:w-52 flex flex-col items-center cursor-pointer"
              onClick={() => handleFlip(i)}
            >
              <Motion.div
                className="relative w-full aspect-square transition-transform duration-500"
                animate={{ rotateY: flippedIndex === i ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden flex flex-col items-center">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-[#c5d5a4] bg-white">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center rounded-full shadow-lg border-4 border-[#c5d5a4] text-gray-800 p-4 overflow-hidden bg-gradient-to-tr from-[#f9f6e8] via-[#dbe7c9] to-[#c5d5a4]">
                  <p className="text-base font-bold mb-2 text-[#3d5a3c] text-center">
                    {person.name}
                  </p>
                  <p className="text-xs leading-snug text-center px-2 text-gray-700">
                    {person.role}
                  </p>
                  <span className="mt-2 text-[10px] opacity-50">
                    Tap again to flip
                  </span>
                </div>
              </Motion.div>

              {/* Name under the card */}
              <p className="mt-4 text-lg font-semibold text-[#3d5a3c]">
                {person.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCircle;
