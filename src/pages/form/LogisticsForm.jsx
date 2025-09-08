import React, { useState } from "react";
import { db } from "../../firebase/firebase.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const LogisticsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    city: "",
    institution: "",
    grade: "",
    delegates: "",
    munExperience: "",
    skills: "",
    motivation: "",
    prevSecurityExp: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "logisticsSecurity"), {
        ...formData,
        status: "Pending",
        createdAt: Timestamp.now(),
      });

      alert("✅ Application Submitted Successfully!");
      setFormData({
        fullName: "",
        dob: "",
        gender: "",
        contact: "",
        email: "",
        address: "",
        city: "",
        institution: "",
        grade: "",
        delegates: "",
        munExperience: "",
        skills: "",
        motivation: "",
        prevSecurityExp: "",
        declaration: false,
      });
    } catch (error) {
      console.error("❌ Error saving form:", error);
      alert("❌ Error submitting form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f2eab8] flex items-center justify-center md:mt-[60px] mt-[80px] p-6">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-green-200 shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-6">
          🛡️ Security & Logistics Team Application
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="text"
                name="dob"
                placeholder="MM/DD/YYYY"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                value={formData.dob}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="address"
                placeholder="Permanent Address"
                value={formData.address}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="city"
                placeholder="City / State / Country"
                value={formData.city}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Educational / Professional Info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="institution"
                placeholder="Institution / Organization"
                value={formData.institution}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="grade"
                placeholder="Current Position / Grade"
                value={formData.grade}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* MUN Details */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              MUN Details
            </h3>
            <div className="space-y-3">
              <textarea
                name="munExperience"
                placeholder="Previous MUN Experience (if any)"
                value={formData.munExperience}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
              <textarea
                name="skills"
                placeholder="Relevant Skills (e.g., event management, security, logistics)"
                value={formData.skills}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Motivation */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Motivation & Declaration
            </h3>
            <div className="space-y-3">
              <textarea
                name="motivation"
                placeholder="Why do you want to join the Security/Logistics Team?"
                value={formData.motivation}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
              <textarea
                name="prevSecurityExp"
                placeholder="Previous Experience in Security or Event Management (if any)"
                value={formData.prevSecurityExp}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-600 border-green-300 rounded"
                  required
                />
                <span className="text-green-900">
                  I hereby declare that the information provided is true and I
                  will abide by the MUN rules and regulations.
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-[#fdf6d9] font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300"
            >
              ✨ Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogisticsForm;
