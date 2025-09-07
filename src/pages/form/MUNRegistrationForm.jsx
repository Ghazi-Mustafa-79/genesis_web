import React, { useState } from "react";
import { db } from "../../firebase/firebase.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const MUNRegistrationForm = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await addDoc(collection(db, "students"), {
        ...formData,
        amount: 2000, // fixed registration fee
        status: "Pending", // admin will verify payment
        createdAt: Timestamp.now(),
      });

      setSuccess(true);
      setFormData({});
    } catch (error) {
      console.error("❌ Error saving form:", error);
      alert("❌ Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2eab8] flex items-center justify-center md:mt-[60px] mt-[80px] p-6">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-green-200 shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-6">
          🏛️ Private Delegate Registration Form
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
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <input
                type="text"
                name="dob"
                placeholder="MM/DD/YYYY"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <select
                name="gender"
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email || ""}
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number"
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              />
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Academic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="institution"
                placeholder="Institution / School / College"
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <input
                type="text"
                name="grade"
                placeholder="Grade / Year"
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <input
                type="text"
                name="fieldOfStudy"
                placeholder="Field of Study (if applicable)"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full"
              />
            </div>
          </div>

          {/* MUN Experience */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              MUN Experience
            </h3>
            <div className="space-y-3">
              <select
                name="attendedBefore"
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              >
                <option value="">Have you attended any MUNs before?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <input
                type="text"
                name="previousMUNs"
                placeholder="If yes, list previous MUNs"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <select
                name="previousPosition"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full"
              >
                <option value="">Previous Position</option>
                <option value="Delegate">Delegate</option>
                <option value="Chair">Chair</option>
                <option value="Director">Director</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Committee & Country Preferences */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Committee & Country Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="committee"
                placeholder="Committee Preference"
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <input
                type="text"
                name="firstCountry"
                placeholder="First Country Preference"
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <input
                type="text"
                name="secondCountry"
                placeholder="Second Country Preference"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <input
                type="text"
                name="thirdCountry"
                placeholder="Third Country Preference"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full"
              />
            </div>
          </div>

          {/* Payment Information */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-green-800 mb-8 text-center">
            💳 Payment Information
          </h2>

          {/* Registration Fee */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-5 mb-8 text-center">
            <p className="text-lg font-semibold text-yellow-900">
              Registration Fee:
            </p>
            <p className="text-2xl font-bold text-green-700">
              Rs. 1,500 / Delegate
            </p>
            <p className="text-sm text-gray-600 mt-1">
              * This fee covers registration, event participation, and
              materials.
            </p>
          </div>

          {/* Payment Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <select
              name="paymentMethod"
              value={formData.paymentMethod || ""}
              onChange={handleChange}
              required
              className="border border-green-300 rounded-lg p-3 w-full"
            >
              <option value="">Select Payment Method</option>
              <option value="JazzCash">JazzCash</option>
              <option value="EasyPaisa">EasyPaisa</option>
            </select>

            <input
              type="text"
              name="senderName"
              placeholder="Sender Name"
              value={formData.senderName || ""}
              onChange={handleChange}
              required
              className="border border-green-300 rounded-lg p-3 w-full"
            />

            <input
              type="text"
              name="transactionId"
              placeholder="Transaction ID (TID)"
              value={formData.transactionId || ""}
              onChange={handleChange}
              required
              className="border border-green-300 rounded-lg p-3 w-full"
            />

            <input
              type="url"
              name="paymentProof"
              placeholder="Paste payment screenshot link"
              value={formData.paymentProof || ""}
              onChange={handleChange}
              required
              className="border border-green-300 rounded-lg p-3 w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-3 rounded-lg shadow-lg transition duration-300"
            >
              {loading ? "Submitting..." : "🚀 Submit Registration"}
            </button>
          </div>

          {/* ✅ Success Message */}
          {success && (
            <p className="text-green-700 text-center mt-4">
              ✅ Registration submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default MUNRegistrationForm;
