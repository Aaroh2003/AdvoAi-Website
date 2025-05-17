// FeaturesPage.jsx - Updated with navigation to detail pages
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturesPage.css';

import advoconnectLogo from './assets/advoconnect.png';
import aiallyLogo from './assets/aially.png';
import advofinderLogo from './assets/advofinder.png';
import advoplannerLogo from './assets/advoplanner.png';
import advointernLogo from './assets/advointern.png';

function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(null);
  const navigate = useNavigate();

  const features = [
    {
      id: 'advofinder',
      number: '01',
      name: 'AdvoFinder',
      description: 'Find verified law firms around you instantly.',
      color: '#E39D90',
      logo: advofinderLogo
    },
    {
      id: 'advoconnect',
      number: '02',
      name: 'AdvoConnect',
      description: 'Engage with legal peers through our verified community.',
      color: '#529DA3',
      logo: advoconnectLogo
    },
    {
      id: 'advoplanner',
      number: '03',
      name: 'AdvoPlanner',
      description: 'Plan your legal tasks with smart scheduling tools.',
      color: '#B59A63',
      logo: advoplannerLogo
    },
    {
      id: 'aially',
      number: '04',
      name: 'AiAlly',
      description: 'AI chatbot for legal queries, documents, and aid.',
      color: '#A6DEF6',
      logo: aiallyLogo
    },
    {
      id: 'advointern',
      number: '05',
      name: 'AdvoIntern',
      description: 'Find certified internships under verified advocates.',
      color: '#247172',
      logo: advointernLogo
    }
  ];

  const handleFeatureClick = (featureId) => {
    navigate(`/features/${featureId}`);
  };

  return (
    <div className="features-container">
      <div className="features-grid">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className={`feature-card ${activeFeature === feature.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveFeature(feature.id)}
            onMouseLeave={() => setActiveFeature(null)}
            onClick={() => handleFeatureClick(feature.id)}
            style={{ backgroundColor: activeFeature === feature.id ? feature.color : '#f5f5f5' }}
          >
            {activeFeature === feature.id ? (
              <div className="feature-logo">
                <img src={feature.logo} alt={feature.name} />
              </div>
            ) : (
              <h3 className="feature-number" style={{ color: feature.color }}>
                {feature.number}
              </h3>
            )}
            <h4 className="feature-name" style={{ color: activeFeature === feature.id ? 'white' : '#333' }}>
              {feature.name}
            </h4>
            <p className="feature-description" style={{ color: activeFeature === feature.id ? 'white' : '#666' }}>
              {feature.description}
            </p>
            <button 
              className="learn-more-btn" 
              style={{ 
                borderColor: activeFeature === feature.id ? 'white' : '#ccc',
                color: activeFeature === feature.id ? 'white' : '#333'
              }}
            >
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesPage;