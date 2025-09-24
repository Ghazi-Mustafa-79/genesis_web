import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Footer from "./components/Footer";
import MUNRegistrationForm from "./pages/form/MUNRegistrationForm";
import LogisticsForm from "./pages/form/LogisticsForm";
import ChairACDForm from "./pages/form/ChairACDForm";
import ScrollToTop from "./components/ScrollToTop";
import HomeLinks from "./components/HomeLinks";
import AllotmentsList from "./components/AllotmentsList";
import ChairGuide from "./components/ChairGuide";

function App() {
  return (
    <Router>
      <ScrollToTop />

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
            <Route path="/MunRegisterForm" element={<MUNRegistrationForm />} />
            <Route path="/HomeLinks" element={<HomeLinks />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/AllotmentsList" element={<AllotmentsList />} />
            <Route path="/ChairGuide" element={<ChairGuide />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
