import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Footer from "./components/Footer";
import MUNRegistrationForm from "./pages/form/MUNRegistrationForm";
import LogisticsForm from "./pages/form/LogisticsForm";
import ChairACDForm from "./pages/form/ChairACDForm";
import Loader from "./components/Loader"; // ✅ Import loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading delay (2.5s) — adjust as needed
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader /> // ✅ Show loader first
      ) : (
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Main content with top padding so it doesn’t overlap navbar */}
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/LogisticsForm" element={<LogisticsForm />} />
              <Route path="/ChairACDForm" element={<ChairACDForm />} />
              <Route
                path="/MunRegisterForm"
                element={<MUNRegistrationForm />}
              />
              <Route path="/Help" element={<Help />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
