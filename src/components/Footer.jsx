import React from "react";
import { motion as Motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/_genesis.mun?igsh=dzQ4bzRjeHE5Ynlk",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/923709963350", // ✅ Replace with your number
      label: "WhatsApp",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:genesismun001@gmail.com", // ✅ Replace with your email
      label: "Email Support",
    },
    {
      icon: <FaYoutube />,
      href: "https://youtube.com",
      label: "YouTube",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Committees", path: "/committees" },
    { name: "Register", path: "/register" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-green-900 via-green-800 to-green-900 text-green-100 overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand + Social */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start space-y-4"
        >
          <img
            src="/logo 2.jpeg"
            alt="MUN Logo"
            className="h-16 w-16 rounded-full shadow-lg border-2 border-green-400"
          />
          <h2 className="text-2xl font-bold">Genesis MUN</h2>
          <p className="text-green-200 text-sm max-w-xs">
            Shaping leaders of tomorrow 🌍 through debate, diplomacy, and
            collaboration.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl mt-3">
            {socialLinks.map((link, idx) => (
              <Motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-green-300 hover:text-green-100 transition"
              >
                {link.icon}
              </Motion.a>
            ))}
          </div>
        </Motion.div>

        {/* Quick Links */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-green-100 border-b border-green-500 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="hover:text-green-300 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Motion.div>

        {/* Contact / Support */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-green-100 border-b border-green-500 inline-block pb-1">
            Contact Us
          </h3>
          <p>Email: genesismun001@gmail.com</p>
          <p>WhatsApp: +92 370 9963350</p>
          <p>Sadiqabad: Punjab, Pakistan</p>
        </Motion.div>
      </div>

      {/* Bottom Line */}
      <div className="relative text-center text-sm text-green-300 py-4 border-t border-green-700">
        <p>© {new Date().getFullYear()} Genesis MUN. All rights reserved.</p>
        <p className="mt-1 text-xs text-green-400">
          Made by <span className="font-semibold">Mr.Ghazi</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
