// HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import your PNG assets
import mainLogo from './assets/logo.png';
import advoconnectLogo from './assets/advoconnect.png';
import aiallyLogo from './assets/aially.png';
import advofinderLogo from './assets/advofinder.png';
import advoplannerLogo from './assets/advoplanner.png';
import advointernLogo from './assets/advointern.png';
import indiaFlag from './assets/india_flag.png';

function HomePage() {
  const navigate = useNavigate();

  const handleExploreFeatures = () => {
    navigate('/features');
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Logo row with main logo and feature logos in one line */}
        <div className="logo-row">
          <img src={mainLogo} alt="AdvoAi Logo" className="main-logo" />
          <div className="feature-logos">
            <img src={advoconnectLogo} alt="AdvoConnect" className="feature-logo" />
            <img src={advofinderLogo} alt="AdvoFinder" className="feature-logo" />
            <img src={advoplannerLogo} alt="AdvoPlanner" className="feature-logo" />
            <img src={aiallyLogo} alt="AiAlly" className="feature-logo" />
            <img src={advointernLogo} alt="AdvoIntern" className="feature-logo" />
          </div>
        </div>

        <div className="title-section">
          <h1 className="main-title">
            AdvoAi<span className="coming-soon">COMING SOON!</span>
          </h1>
        </div>

        <div className="description-box">
          <p className="description-text">
            Our AI-driven legal platform empowers law firms, students, and clients by offering seamless access to legal tools through five core features:
            <span className="feature advoconnect">AdvoConnect</span>,{" "}
            <span className="feature advofinder">AdvoFinder</span>,{" "}
            <span className="feature advoplanner">AdvoPlanner</span>,{" "}
            <span className="feature aially">AiAlly</span> and {" "}
            <span className="feature advointern">AdvoIntern</span>.
          </p>
        </div>

        <div className="button-container">
          <button className="explore-button" onClick={handleExploreFeatures}>
            Explore Features
          </button>
        </div>
      </div>

      <div className="footer">
        <div className="footer-left">
          <div className="made-in-india">
            <img src={indiaFlag} alt="India Flag" className="india-flag" /> Proudly made in India
          </div>
          <div className="secure">
            <span className="secure-icon">✅</span> 100% Safe and Secure
          </div>
          <div className="company-name">AdvoAI Technologies Pvt. Ltd.</div>
        </div>
        
        
        <div className="footer-right">
          <div className="tagline">One app for all things Legal</div>
          <div className="subtagline">Do more with <span className="tagline">AdvoAi</span></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;