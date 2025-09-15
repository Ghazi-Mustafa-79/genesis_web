import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // On mobile, open Register dropdown by default
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsRegisterOpen(true);
    }
  }, []);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItem = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1, // ✅ fixed (was 2)
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Register as a?",
      dropdown: [
        // { label: "Logistics Security", path: "/LogisticsForm" },
        // { label: "Chair ACD Form", path: "/chairacdform" },
        { label: "Private Registration", path: "/MunRegisterForm" },
      ],
    },
    { label: "Help", path: "/help" },
  ];

  return (
    <Motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={showNavbar ? { y: 0, opacity: 1 } : { y: -120, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-[#fdf6d9] shadow-lg text-center fixed w-full z-40 bg-cover bg-center"
      style={{ backgroundImage: "url('/navbar-bg2.jpeg')" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center relative z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo 2.jpeg"
            alt="MUN Logo"
            className="h-14 w-14 rounded-full shadow-lg cursor-pointer transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          />
          <span className="hidden md:inline-block text-xl font-bold tracking-wide text-[#e6d79f] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transform transition-all duration-500">
            GENESIS MUN
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          {navItems.map((item, i) =>
            item.dropdown ? (
              <li
                key={i}
                className="relative group"
                onMouseEnter={() => setIsRegisterOpen(true)}
                onMouseLeave={() => setIsRegisterOpen(false)}
              >
                <button className="flex items-center gap-1 transition duration-300 text-[#f2eab8] hover:text-[#e6d79f]">
                  {item.label}
                  <HiChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      isRegisterOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Dropdown */}
                <AnimatePresence>
                  {isRegisterOpen && (
                    <Motion.ul
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 text-[#fdf6d9] shadow-lg rounded-lg mt-2 py-2 w-56 z-50"
                      style={{
                        backgroundImage: "url('/navbar-bg2.jpeg')",
                      }}
                    >
                      {item.dropdown.map((subItem, j) => (
                        <li key={j}>
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 hover:bg-[#cbbb84] hover:text-green-900 rounded-md transition"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </Motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={i} className="relative group">
                <Link
                  to={item.path}
                  className="transition duration-300 text-[#f2eab8] hover:text-[#e6d79f]"
                >
                  {item.label}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#f2eab8] rounded-full group-hover:w-full transition-all duration-500"></span>
              </li>
            )
          )}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden relative z-[9999]">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-[#f2eab8] hover:scale-110 transition"
          >
            {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur Background */}
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />
            <Motion.ul
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute top-full left-0 right-0 md:hidden px-6 pb-6 pt-4 space-y-4 text-lg font-semibold text-[#f2eab8] bg-cover bg-center shadow-lg z-50"
              style={{ backgroundImage: "url('/navbar-bg2.jpeg')" }}
            >
              {navItems.map((item, i) =>
                item.dropdown ? (
                  <Motion.li
                    key={i}
                    custom={i}
                    variants={menuItem}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <button
                      onClick={() => setIsRegisterOpen((prev) => !prev)}
                      className="w-full flex justify-center items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-r from-green-400/20 to-yellow-300/20 transition"
                    >
                      {item.label}
                      <HiChevronDown
                        className={`w-5 h-5 transform transition-transform ${
                          isRegisterOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isRegisterOpen && (
                      <ul className="mt-2 space-y-2">
                        {item.dropdown.map((subItem, j) => (
                          <li key={j}>
                            <Link
                              to={subItem.path}
                              onClick={toggleMenu}
                              className="block px-3 py-2 rounded-lg bg-white/5 hover:bg-white/20 transition"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Motion.li>
                ) : (
                  <Motion.li
                    key={i}
                    custom={i}
                    variants={menuItem}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <Link
                      to={item.path}
                      className="block px-3 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-r from-green-400/20 to-yellow-300/20 transition"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </Motion.li>
                )
              )}
            </Motion.ul>
          </>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
};

export default Navbar;
