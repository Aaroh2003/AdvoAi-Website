// App.jsx - Updated with feature detail routes
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FeaturesPage from './FeaturesPage';
import FeatureDetailPage from './FeatureDetailPage';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/features/:featureId" element={<FeatureDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;