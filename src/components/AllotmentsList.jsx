import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Globe } from "lucide-react";

// Example: you can add type to know if it's internal or external
const AllotmentsList = () => {
  const links = [
    {
      label: "GEC",
      icon: <Globe size={28} />,
      url: "https://drive.google.com/file/d/1zKeP6EgGVmBDHtDA-EuiENtq32Iv3fQ_/view?usp=sharing",
      external: true,
    },
    {
      label: "PNA",
      icon: <FileText size={28} />,
      url: "https://drive.google.com/file/d/1zZe9a24CWKyrglMLXQF7ejjNpSebBQWv/view?usp=sharing",
      external: true,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#f9f7e6] to-[#f3f0d6] min-h-screen overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-yellow-600 to-green-500 bg-clip-text text-transparent drop-shadow-lg">
          📂 Explore Committees
        </h1>
        <p className="text-gray-700 mt-3 text-lg md:text-xl max-w-2xl mx-auto">
          Access the official Google Drive documents or navigate within the app.
        </p>
      </div>

      {/* Links */}
      <div className="max-w-2xl mx-auto space-y-6 relative z-10">
        {links.map((item, i) =>
          item.external ? (
            // External link (Google Drive etc.)
            <Motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-between w-full bg-white/80 backdrop-blur-md shadow-lg rounded-2xl px-6 py-5 border border-green-100 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/70 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <span className="text-green-600 group-hover:text-yellow-600 transition-colors duration-300">
                  {item.icon}
                </span>
                <span className="text-green-900 font-semibold text-lg group-hover:text-green-700 transition-colors duration-300">
                  {item.label}
                </span>
              </div>
              <span className="text-green-500 font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">
                ›
              </span>
            </Motion.a>
          ) : (
            // Internal link (React Router navigation)
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to={item.url}
                className="flex items-center justify-between w-full bg-white/80 backdrop-blur-md shadow-lg rounded-2xl px-6 py-5 border border-green-100 hover:border-green-400 hover:shadow-2xl hover:shadow-green-200/70 transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-green-600 group-hover:text-yellow-600 transition-colors duration-300">
                    {item.icon}
                  </span>
                  <span className="text-green-900 font-semibold text-lg group-hover:text-green-700 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
                <span className="text-green-500 font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">
                  ›
                </span>
              </Link>
            </Motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default AllotmentsList;
