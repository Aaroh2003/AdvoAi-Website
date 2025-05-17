import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import FeaturesPage from "./FeaturesPage";
import FeatureDetailPage from "./FeatureDetailPage";
// import "./App.css";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkMobile = () => {
      return /iphone|ipod|android|blackberry|opera mini|windows phone|mobile/i.test(navigator.userAgent.toLowerCase());
    };
    setIsMobile(checkMobile());
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect to mobile site if needed */}
        {isMobile ? (
          window.location.replace("https://m.advoai.in")
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/features/:featureId" element={<FeatureDetailPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
