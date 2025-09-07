import React, { useState } from "react";
import { db } from "../../firebase/firebase.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const ChairACDForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    contact: "",
    institution: "",
    grade: "",
    city: "",
    position: "",
    committee: "",
    munExperience: "",
    leadershipRoles: "",
    motivation: "",
    qualities: "",
    plan: "",
    availability: "",
    achievements: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "chairApplications"), {
        ...formData,
        status: "Pending",
        createdAt: Timestamp.now(),
      });

      alert("✅ Application Submitted Successfully!");
      setFormData({
        fullName: "",
        dob: "",
        gender: "",
        email: "",
        contact: "",
        institution: "",
        grade: "",
        city: "",
        position: "",
        committee: "",
        munExperience: "",
        leadershipRoles: "",
        motivation: "",
        qualities: "",
        plan: "",
        availability: "",
        achievements: "",
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
          🎓 Chair & Assistant Chair Application
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
                <option value="Other">Other</option>
              </select>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
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
                placeholder="Current Grade / Year"
                value={formData.grade}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Position Preference */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Position Preference
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="">Select Position</option>
                <option value="Chair (CD)">Chair (CD)</option>
                <option value="Assistant Chair (ACD)">
                  Assistant Chair (ACD)
                </option>
                <option value="Open to Both">Open to Both</option>
              </select>

              <select
                name="committee"
                value={formData.committee}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="">Preferred Committee</option>
                <option value="UNSC">UNSC</option>
                <option value="ECOSOC">ECOSOC</option>
                <option value="GEC">GEC</option>
                <option value="PNA">PNA</option>
              </select>
            </div>
          </div>

          {/* MUN Experience */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              MUN Experience
            </h3>
            <div className="space-y-3">
              <textarea
                name="munExperience"
                placeholder="Previous MUNs Attended (as Delegate/Chair)"
                value={formData.munExperience}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
              <textarea
                name="leadershipRoles"
                placeholder="Highlight any Chairing or Leadership Roles Held"
                value={formData.leadershipRoles}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Skills & Motivation */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Skills & Motivation
            </h3>
            <div className="space-y-3">
              <textarea
                name="motivation"
                placeholder="Why do you want to serve as a CD/ACD in this MUN?"
                value={formData.motivation}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
              <textarea
                name="qualities"
                placeholder="What qualities make you a strong candidate for this role?"
                value={formData.qualities}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
              <textarea
                name="plan"
                placeholder="How do you plan to ensure an engaging and productive committee session?"
                value={formData.plan}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Availability & Additional Info */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Availability & Additional Information
            </h3>
            <div className="space-y-3">
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="">
                  Are you available for all conference dates?
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <textarea
                name="achievements"
                placeholder="Other relevant achievements/experiences"
                value={formData.achievements}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Declaration */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Declaration
            </h3>
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
                I certify that the information provided is accurate and
                complete. I understand that providing false information may lead
                to the rejection of my application.
              </span>
            </label>
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

export default ChairACDForm;
