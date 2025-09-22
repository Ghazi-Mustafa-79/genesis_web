import React, { useState } from "react";
import { db } from "../../firebase/firebase.js";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";

const MUNRegistrationForm = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Custom Submit Function with Sequential IDs
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // 1️⃣ Get current count of students
      const studentsRef = collection(db, "students");
      const snapshot = await getDocs(studentsRef);
      const count = snapshot.size;

      // 2️⃣ Generate a new custom ID
      const newId = `student_${count + 1}`;

      // 3️⃣ Save data with custom ID
      await setDoc(doc(studentsRef, newId), {
        ...formData,
        amount: 4500, // Registration fee
        status: "Pending", // Admin will verify payment
        createdAt: Timestamp.now(),
      });

      setSuccess(true);
      setFormData({});
      e.target.reset(); // clear form UI
    } catch (error) {
      console.error("❌ Error saving form:", error);
      alert("❌ Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2eab8] flex items-center justify-center p-6">
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
              Committee &{" "}
              {formData.committee === "PNA" ? "Personality" : "Country"}{" "}
              Preferences
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="committee"
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full bg-white text-gray-700"
              >
                <option value="">Select Committee Preference</option>
                <option value="ECOSOC">ECOSOC</option>
                <option value="UNSC">UNSC</option>
              </select>

              {/* Dynamic placeholders based on committee */}
              <input
                type="text"
                name="firstCountry"
                placeholder={"First Country Preference"}
                onChange={handleChange}
                required
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <input
                type="text"
                name="secondCountry"
                placeholder={"Second Country Preference"}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full"
              />
              <input
                type="text"
                name="thirdCountry"
                placeholder={"Third Country Preference"}
                onChange={handleChange}
                className="border border-green-300 rounded-lg p-3 w-full"
              />
            </div>
          </div>

          {/* Payment Information */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-green-800 mb-8 text-center">
            💳 Payment Information
          </h2>

          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-5 mb-8 text-center">
            <p className="text-lg font-semibold text-yellow-900">
              Registration Fee:
            </p>
            <p className="text-2xl font-bold text-green-700">
              Rs. 5,000 / Delegate
            </p>
            <p className="text-sm text-gray-600 mt-1">
              * This fee covers registration, event participation, and
              materials.
            </p>
          </div>

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
              <option value="SadaPay">SadaPay</option>
              <option value="EasyPaisa">EasyPaisa</option>
            </select>

            {formData.paymentMethod && (
              <div className="md:col-span-2 bg-green-50 border border-green-300 rounded-lg p-3 text-center">
                {formData.paymentMethod === "JazzCash" && (
                  <p>
                    Send payment to <strong>Salman Saeed: 03097506051</strong>{" "}
                    (JazzCash)
                  </p>
                )}
                {formData.paymentMethod === "SadaPay" && (
                  <p>
                    Send payment to{" "}
                    <strong>Salman Saeed Ahmed: 03097506051</strong> (SadaPay)
                  </p>
                )}
                {formData.paymentMethod === "EasyPaisa" && (
                  <p>
                    Send payment to{" "}
                    <strong>Salman Saeed Ahmed: 03709963350</strong> (EasyPaisa)
                  </p>
                )}
              </div>
            )}

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
              placeholder="Paste Google Photos / Drive link of your screenshot"
              value={formData.paymentProof || ""}
              onChange={handleChange}
              required
              className="border border-green-300 rounded-lg p-3 w-full"
            />

            {/* Step-by-step guide */}
            <div className="md:col-span-2">
              <div className="mt-3 p-3 bg-blue-50 border border-blue-300 rounded-lg text-sm text-gray-700">
                <p className="font-semibold text-blue-800 mb-1">
                  📌 How to upload your screenshot:
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    Open{" "}
                    <a
                      href="https://photos.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Google Photos
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://drive.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Google Drive
                    </a>
                    .
                  </li>
                  <li>Upload your payment screenshot there.</li>
                  <li>
                    Right-click the image → select <b>“Get Link”</b> or{" "}
                    <b>“Copy Link”</b>.
                  </li>
                  <li>
                    Make sure link sharing is set to{" "}
                    <b>“Anyone with the link”</b>.
                  </li>
                  <li>Paste the copied link into the field above ✅</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-3 rounded-lg shadow-lg transition duration-300"
            >
              {loading ? "Submitting..." : "🚀 Submit Registration"}
            </button>
          </div>

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

// import React, { useState } from "react";
// import { db } from "../../firebase/firebase.js";
// import {
//   collection,
//   getDocs,
//   doc,
//   setDoc,
//   Timestamp,
// } from "firebase/firestore";

// const MUNRegistrationForm = () => {
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   // ✅ Handle Input Changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Custom Submit Function with Sequential IDs
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess(false);

//     try {
//       // 1️⃣ Get current count of students
//       const studentsRef = collection(db, "students");
//       const snapshot = await getDocs(studentsRef);
//       const count = snapshot.size;

//       // 2️⃣ Generate a new custom ID
//       const newId = `student_${count + 1}`;

//       // 3️⃣ Save data with custom ID
//       await setDoc(doc(studentsRef, newId), {
//         ...formData,
//         amount: 4500, // Registration fee
//         status: "Pending", // Admin will verify payment
//         createdAt: Timestamp.now(),
//       });

//       setSuccess(true);
//       setFormData({});
//       e.target.reset(); // clear form UI
//     } catch (error) {
//       console.error("❌ Error saving form:", error);
//       alert("❌ Error submitting form. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f2eab8] flex items-center justify-center md:mt-[60px] mt-[80px] p-6">
//       <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-green-200 shadow-2xl rounded-2xl p-8">
//         <h2 className="text-3xl font-bold text-center text-green-900 mb-6">
//           🏛️ Private Delegate Registration Form
//         </h2>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* Personal Information */}
//           <div>
//             <h3 className="text-xl font-semibold text-green-800 mb-3">
//               Personal Information
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//               <input
//                 type="text"
//                 name="dob"
//                 placeholder="MM/DD/YYYY"
//                 onFocus={(e) => (e.target.type = "date")}
//                 onBlur={(e) => (e.target.type = "text")}
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//               <select
//                 name="gender"
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//               <input
//                 type="text"
//                 name="nationality"
//                 placeholder="Nationality"
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//               <input
//                 type="tel"
//                 name="contactNumber"
//                 placeholder="Contact Number"
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email || ""}
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//               <input
//                 type="tel"
//                 name="whatsapp"
//                 placeholder="WhatsApp Number"
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//             </div>
//           </div>

//           {/* Academic Information */}
//           <div>
//             <h3 className="text-xl font-semibold text-green-800 mb-3">
//               Academic Information
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="institution"
//                 placeholder="Institution / School / College"
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//               <input
//                 type="text"
//                 name="grade"
//                 placeholder="Grade / Year"
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//               <input
//                 type="text"
//                 name="fieldOfStudy"
//                 placeholder="Field of Study (if applicable)"
//                 onChange={handleChange}
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//             </div>
//           </div>

//           {/* MUN Experience */}
//           <div>
//             <h3 className="text-xl font-semibold text-green-800 mb-3">
//               MUN Experience
//             </h3>
//             <div className="space-y-3">
//               <select
//                 name="attendedBefore"
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               >
//                 <option value="">Have you attended any MUNs before?</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//               <input
//                 type="text"
//                 name="previousMUNs"
//                 placeholder="If yes, list previous MUNs"
//                 onChange={handleChange}
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//               <select
//                 name="previousPosition"
//                 onChange={handleChange}
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               >
//                 <option value="">Previous Position</option>
//                 <option value="Delegate">Delegate</option>
//                 <option value="Chair">Chair</option>
//                 <option value="Director">Director</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//           </div>

//           {/* Committee & Country Preferences */}
//           <div>
//             <h3 className="text-xl font-semibold text-green-800 mb-3">
//               Committee & Country Preferences
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <select
//                 name="committee"
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full bg-white text-gray-700"
//               >
//                 <option value="">Select Committee Preference</option>
//                 <option value="GEC">GEC</option>
//                 <option value="ECOSOC">ECOSOC</option>
//                 <option value="UNSC">UNSC</option>
//                 <option value="PNA">PNA</option>
//               </select>

//               <input
//                 type="text"
//                 name="firstCountry"
//                 placeholder="First Country Preference"
//                 onChange={handleChange}
//                 required
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//               <input
//                 type="text"
//                 name="secondCountry"
//                 placeholder="Second Country Preference"
//                 onChange={handleChange}
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//               <input
//                 type="text"
//                 name="thirdCountry"
//                 placeholder="Third Country Preference"
//                 onChange={handleChange}
//                 className="border border-green-300 rounded-lg p-3 w-full"
//               />
//             </div>
//           </div>

//           {/* Payment Information */}
//           <h2 className="text-2xl md:text-3xl font-extrabold text-green-800 mb-8 text-center">
//             💳 Payment Information
//           </h2>

//           <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-5 mb-8 text-center">
//             <p className="text-lg font-semibold text-yellow-900">
//               Registration Fee:
//             </p>
//             <p className="text-2xl font-bold text-green-700">
//               Rs. 4,500 / Delegate
//             </p>
//             <p className="text-sm text-gray-600 mt-1">
//               * This fee covers registration, event participation, and
//               materials.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <select
//               name="paymentMethod"
//               value={formData.paymentMethod || ""}
//               onChange={handleChange}
//               required
//               className="border border-green-300 rounded-lg p-3 w-full"
//             >
//               <option value="">Select Payment Method</option>
//               <option value="JazzCash">JazzCash</option>
//               <option value="SadaPay">SadaPay</option>
//               <option value="EasyPaisa">EasyPaisa</option>
//             </select>

//             {formData.paymentMethod && (
//               <div className="md:col-span-2 bg-green-50 border border-green-300 rounded-lg p-3 text-center">
//                 {formData.paymentMethod === "JazzCash" && (
//                   <p>
//                     Send payment to <strong>Salman Saeed: 03097506051</strong>{" "}
//                     (JazzCash)
//                   </p>
//                 )}
//                 {formData.paymentMethod === "SadaPay" && (
//                   <p>
//                     Send payment to{" "}
//                     <strong>Salman Saeed Ahmed: 03097506051</strong> (SadaPay)
//                   </p>
//                 )}
//                 {formData.paymentMethod === "EasyPaisa" && (
//                   <p>
//                     Send payment to{" "}
//                     <strong>Salman Saeed Ahmed: 03709963350</strong> (EasyPaisa)
//                   </p>
//                 )}
//               </div>
//             )}

//             <input
//               type="text"
//               name="senderName"
//               placeholder="Sender Name"
//               value={formData.senderName || ""}
//               onChange={handleChange}
//               required
//               className="border border-green-300 rounded-lg p-3 w-full"
//             />

//             <input
//               type="text"
//               name="transactionId"
//               placeholder="Transaction ID (TID)"
//               value={formData.transactionId || ""}
//               onChange={handleChange}
//               required
//               className="border border-green-300 rounded-lg p-3 w-full"
//             />
//             <input
//               type="url"
//               name="paymentProof"
//               placeholder="Paste Google Photos / Drive link of your screenshot"
//               value={formData.paymentProof || ""}
//               onChange={handleChange}
//               required
//               className="border border-green-300 rounded-lg p-3 w-full"
//             />

//             {/* Step-by-step guide */}
//             <div className="md:col-span-2">
//               <div className="mt-3 p-3 bg-blue-50 border border-blue-300 rounded-lg text-sm text-gray-700">
//                 <p className="font-semibold text-blue-800 mb-1">
//                   📌 How to upload your screenshot:
//                 </p>
//                 <ol className="list-decimal list-inside space-y-1">
//                   <li>
//                     Open{" "}
//                     <a
//                       href="https://photos.google.com/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 underline hover:text-blue-800"
//                     >
//                       Google Photos
//                     </a>{" "}
//                     or{" "}
//                     <a
//                       href="https://drive.google.com/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 underline hover:text-blue-800"
//                     >
//                       Google Drive
//                     </a>
//                     .
//                   </li>
//                   <li>Upload your payment screenshot there.</li>
//                   <li>
//                     Right-click the image → select <b>“Get Link”</b> or{" "}
//                     <b>“Copy Link”</b>.
//                   </li>
//                   <li>
//                     Make sure link sharing is set to{" "}
//                     <b>“Anyone with the link”</b>.
//                   </li>
//                   <li>Paste the copied link into the field above ✅</li>
//                 </ol>
//               </div>
//             </div>
//           </div>

//           <div className="md:col-span-2 text-center mt-6">
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-3 rounded-lg shadow-lg transition duration-300"
//             >
//               {loading ? "Submitting..." : "🚀 Submit Registration"}
//             </button>
//           </div>

//           {success && (
//             <p className="text-green-700 text-center mt-4">
//               ✅ Registration submitted successfully!
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MUNRegistrationForm;
