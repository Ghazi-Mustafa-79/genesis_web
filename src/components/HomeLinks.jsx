import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FileText,
  Users,
  BookOpen,
  ShieldCheck,
  ClipboardList,
  ScrollText,
  FileCheck,
  UserPlus,
  Users2,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeLinks = () => {
  const links = [
    {
      label: "Context of Genesis",
      icon: <ScrollText />,
      type: "file",
      url: "#",
    },
    { label: "Allotments", icon: <ClipboardList />, type: "file", url: "#" },
    { label: "Study Guides", icon: <BookOpen />, type: "file", url: "#" },
    { label: "Equity Policy", icon: <FileCheck />, type: "file", url: "#" },
    {
      label: "Logistics & Security Team Application",
      icon: <ShieldCheck />,
      type: "internal",
      url: "/LogisticsForm",
    },
    {
      label: "Code Of Conduct",
      icon: <FileText />,
      type: "file",
      url: "#",
    },
    {
      label: "Delegation Registration Form",
      icon: <Users2 />,
      type: "internal",
      url: "/MunRegisterForm",
    },
    {
      label: "Private Delegate Registration Form",
      icon: <UserPlus />,
      type: "internal",
      url: "/PrivateRegistration",
    },
    {
      label: "CD & ACD Application Form",
      icon: <Users />,
      type: "internal",
      url: "/ChairACDForm",
    },
  ];

  return (
    <section className="relative py-19 px-6 bg-[#f0ebc6] overflow-hidden">
      {/* Decorative glowing circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <Motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-green-600 to-yellow-500 bg-clip-text text-transparent">
          🌟 Explore Genesis MUN Resources
        </h1>
        <p className="text-gray-700 mt-3 text-sm md:text-lg max-w-2xl mx-auto">
          Access all important documents, guides, and registration forms in one
          place. Designed for a smooth mobile experience.
        </p>
      </Motion.div>

      {/* Links */}
      <div className="space-y-6 max-w-md mx-auto relative z-10">
        {links.map((item, i) => {
          const content = (
            <div className="flex items-center justify-between w-full bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-6 py-5 border border-green-100 hover:border-green-500 hover:shadow-green-200 hover:shadow-xl transition-all group">
              <div className="flex items-center space-x-4">
                <span className="text-green-600 group-hover:text-green-700 transition text-xl">
                  {item.icon}
                </span>
                <span className="text-green-900 font-semibold text-base md:text-lg group-hover:text-green-800 transition">
                  {item.label}
                </span>
              </div>
              <span className="text-green-500 font-bold group-hover:translate-x-1 transition">
                ›
              </span>
            </div>
          );

          return (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {item.type === "internal" ? (
                <Link to={item.url}>{content}</Link>
              ) : (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              )}
            </Motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeLinks;
