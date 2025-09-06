// src/pages/Help.jsx
import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What is Genesis MUN?",
    answer:
      "Genesis MUN is a Model United Nations conference where students simulate UN committees and discuss global issues.",
  },
  {
    question: "How can I register?",
    answer:
      "You can register by clicking the 'Register' button in the navigation bar or visiting the registration form page.",
  },
  {
    question: "Who can participate?",
    answer:
      "High school and university students from all backgrounds are welcome to participate.",
  },
  {
    question: "Do I need prior MUN experience?",
    answer:
      "Not at all! We welcome beginners and provide resources to help you prepare.",
  },
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f2eab8] pt-24 pb-16 px-6 md:px-20">
      {/* Hero Section */}
      <Motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <FaQuestionCircle className="text-green-800 text-6xl mx-auto mb-4 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-bold text-green-900">
          Need Help & Support?
        </h1>
        <p className="mt-3 text-lg text-green-700">
          Find answers to common questions or reach out to us directly.
        </p>
      </Motion.div>

      {/* FAQ Section */}
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-16"
      >
        {faqs.map((faq, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/90 shadow-md rounded-xl mb-4 overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-green-900 hover:bg-green-50 transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <Motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-4 text-green-800"
              >
                {faq.answer}
              </Motion.div>
            )}
          </Motion.div>
        ))}
      </Motion.div>

      {/* Contact Support Section */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <Motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-green-800 text-[#fdf6d9] p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3">📩 Email Support</h2>
          <p className="mb-2">
            Write to us anytime and we’ll get back quickly.
          </p>
          <div className="flex items-center gap-2 text-lg">
            <FaEnvelope /> support@genesismun.org
          </div>
        </Motion.div>

        <Motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#5d7924] text-[#fdf6d9] p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3">📞 Call Us</h2>
          <p className="mb-2">Available from 9 AM - 6 PM daily.</p>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <FaPhoneAlt /> +92 300 1234567
          </div>
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default Help;
