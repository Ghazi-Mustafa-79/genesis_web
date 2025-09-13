import React from "react";
import { motion as Motion } from "framer-motion";

const DevelopersSection = () => {
  const developers = [
    {
      name: "Efrah Adeel",
      role: "Mentor / Senior",
      description:
        "Played a key role in reviewing and refining the website’s design, providing constructive feedback, and ensuring that every feature met professional standards. Guided the development process with a focus on best practices, clean code, and a user-friendly interface.",
    },
    {
      name: "Ghazi Mustafa",
      role: "MERN Stack Developer",
      description:
        "I designed and developed this entire website as a MERN Stack Developer, focusing on clean UI, smooth animations, and a seamless user experience. Passionate about modern web development, creative design, and building scalable, efficient solutions.",
    },
  ];

  return (
    <section className="mb-[40px] flex">
      {/* ✅ Animated Container (Now expands from RIGHT border to left) */}
      <Motion.div
        className="flex-1 bg-gradient-to-br from-[#f2eab8] via-white to-[#f2eab8] py-14 px-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "right" }} // ✅ Expand from right border
      >
        <Motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-3 tracking-tight">
            Meet the Developers
          </h2>

          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            The creative minds behind this project — blending code, design, and
            teamwork to deliver a smooth and beautiful experience.
          </p>

          {/* Developer Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {developers.map((dev, index) => (
              <Motion.div
                key={index}
                className="bg-white shadow-md hover:shadow-xl rounded-xl p-5 border border-green-200 hover:border-green-400 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 1.3 + index * 0.3,
                  duration: 0.6,
                }}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-green-700">
                  {dev.name}
                </h3>
                <p className="text-sm text-yellow-600 font-medium">
                  {dev.role}
                </p>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {dev.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </Motion.div>

      {/* ✅ Static Vertical Border (Always on right) */}
      <div className="w-[6px] bg-green-700"></div>
    </section>
  );
};

export default DevelopersSection;

// import React from "react";
// import { motion as Motion } from "framer-motion";
// import { Code, User } from "lucide-react";

// const DevelopersSection = () => {
//   const developers = [
//     {
//       name: "Efrah Adeel",
//       role: "Mentor / Senior",
//       description:
//         "Played a key role in reviewing and refining the website’s design, providing constructive feedback, and ensuring that every feature met professional standards. Guided the development process with a focus on best practices, clean code, and a user-friendly interface",
//     },
//     {
//       name: "Ghazi Mustafa",
//       role: "MERN Stack Developer",
//       description:
//         "I designed and developed this entire website as a MERN Stack Developer, focusing on clean UI, smooth animations, and a seamless user experience. Passionate about modern web development, creative design, and building scalable, efficient solutions.",
//     },
//   ];

//   return (
//     <section className="mb-[40px] border-r-8 bg-gradient-to-br from-[#f2eab8] via-white to-[#f2eab8] py-14 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Section Title */}
//         <Motion.h2
//           className="text-3xl sm:text-4xl font-bold text-green-800 mb-3 tracking-tight"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Meet the Developers
//         </Motion.h2>
//         <Motion.p
//           className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
//           The creative minds behind this project — blending code, design, and
//           teamwork to deliver a smooth and beautiful experience.
//         </Motion.p>

//         {/* Developer Cards */}
//         <div className="grid sm:grid-cols-2 gap-6">
//           {developers.map((dev, index) => (
//             <Motion.div
//               key={index}
//               className="bg-white shadow-md hover:shadow-xl rounded-xl p-5 border border-green-200 hover:border-green-400 transition-all duration-300"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               whileHover={{ scale: 1.03 }}
//             >
//               <h3 className="text-xl font-semibold text-green-700">
//                 {dev.name}
//               </h3>
//               <p className="text-sm text-yellow-600 font-medium">{dev.role}</p>
//               <p className="text-gray-600 mt-2 text-sm leading-relaxed">
//                 {dev.description}
//               </p>
//             </Motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DevelopersSection;
