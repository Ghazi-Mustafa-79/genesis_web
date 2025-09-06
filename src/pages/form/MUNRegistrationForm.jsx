import React, { useState } from "react";
import { db } from "../../firebase/firebase.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const MUNRegistrationForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "students"), {
        ...formData,
        status: "Pending",
        createdAt: Timestamp.now(),
      });

      alert("✅ Registration Submitted Successfully!");
      setFormData({});
    } catch (error) {
      console.error("❌ Error saving form:", error);
      alert("❌ Error submitting form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f2eab8] flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-green-200 shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-6">
          🏛️ Genesis MUN Registration
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
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="text"
                name="dob"
                placeholder="MM/DD/YYYY"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <select
                name="gender"
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
                name="nationality"
                placeholder="Nationality"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
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
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="text"
                name="grade"
                placeholder="Grade / Year"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="text"
                name="fieldOfStudy"
                placeholder="Field of Study (if applicable)"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
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
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
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
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
              <select
                name="previousPosition"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
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
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="text"
                name="firstCountry"
                placeholder="First Country Preference"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="text"
                name="secondCountry"
                placeholder="Second Country Preference"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="thirdCountry"
                placeholder="Third Country Preference"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Payment Information
            </h3>

            {/* Show your JazzCash Number */}
            <div className="bg-green-50 border border-green-300 rounded-lg p-4 mb-5">
              <p className="text-green-900 font-semibold">
                Send your payment to:
              </p>
              <p className="text-lg font-bold text-green-700">
                JazzCash Number: 0301-1234567
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Account Holder:{" "}
                <span className="font-medium">SALMAN SAEED</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="paymentMethod"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="JazzCash">JazzCash</option>
              </select>

              <input
                type="text"
                name="cardHolder"
                placeholder="Sender Name (Registered with JazzCash)"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />

              <input
                type="text"
                name="transactionId"
                placeholder="Transaction ID (TID)"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />

              <input
                type="url"
                name="paymentProofLink"
                placeholder="Paste payment screenshot link (Drive, Dropbox, Imgur)"
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-[#fdf6d9] font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300"
            >
              ✨ Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MUNRegistrationForm;
