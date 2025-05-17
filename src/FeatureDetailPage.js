import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import './FeatureDetailPage.css';

import advoconnectLogo from './assets/advoconnect.png';
import aiallyLogo from './assets/aially.png';
import advofinderLogo from './assets/advofinder.png';
import advoplannerLogo from './assets/advoplanner.png';
import advointernLogo from './assets/advointern.png';

import advofinderBg from './assets/advofinder_background.PNG';
import advoconnectBg from './assets/advoconnect_background.PNG';
import advoplannerBg from './assets/advoplanner_background.PNG';
import aiallyBg from './assets/aially_background.PNG';
import advointernBg from './assets/advointern_background.PNG';

function FeatureDetailPage() {
  const { featureId } = useParams();
  const [scrolled, setScrolled] = useState(false);
  const detailsRef = useRef(null);

  // Feature data
  const features = {
    advofinder: {
      id: 'advofinder',
      name: 'AdvoFinder',
      logo: advofinderLogo,
      color: '#E39D90',
      background: advofinderBg,
      description: 'Finding and discovering law firms near you was never this easy !',
      steps: 'Login>Enter Location>Select Law Firm>Call them',
      tagline: 'Need a Law Firm?',
      keyFeatures: [
        'Filter by city, case type, language, and locality',
        'Real-time “Available Now" status for firms',
        'Request-based contact forms',
        'Verified firm profiles only - no individual advocate listings'
      ],
      keyComponents: [
        'Search filters for practice area, city, and specialization',
        'Status tracker for firm availability',
      ],
      users: {
        students: {
          label: 'Students',
          for: 'finding law firms'
        },
        lawyers: {
          label: 'Law Firms',
          for: 'meeting new clients'
        },
        others: {
          label: 'Others',
          for: 'finding law firms'
        }
      }
    },
    advoconnect: {
      id: 'advoconnect',
      name: 'AdvoConnect',
      logo: advoconnectLogo,
      color: '#529DA3',
      background: advoconnectBg,
      description: 'Build your legal presence and connect with verified legal professionals.',
      steps: 'Login>Make a Profile>Connect!',
      tagline: 'Need a Platform to Express?',
      keyFeatures: [
        'Verified user profiles',
        'Mentorship space',
        'Public legal discussions',
        'Role-based tagging'
      ],
      keyComponents: [
        'Topic categorization',
        'Profile verification',
        'Content moderation tools',
        'Read-only public access'
      ],
      users: {
        students: {
          label: 'Students',
          for: 'for networking and knowledge sharing'
        },
        lawyers: {
          label: 'Law firms',
          for: 'for professional discussions and visibility'
        },
        others: {
          label: 'Others',
          for: 'for legal learning and interaction'
        }
      }
    },
    advoplanner: {
      id: 'advoplanner',
      name: 'AdvoPlanner',
      logo: advoplannerLogo,
      color: '#B59A63',
      background: advoplannerBg,
      description: 'Manage cases, clients, and deadlines all at one place.',
      steps: 'Login >Make a Profile >Connect!',
      tagline: 'Need a Case Manager?',
      keyFeatures: [
        'Monthly, weekly, and daily task views',
        'Smart legal to-do integration',
        'Document uploads for personal tracking',
        'Custom reminder and alert system'
      ],
      keyComponents: [
        'Moot & internship calendar sync',
        'Exam & court date tracker',
        'Private reading/resource logs',
      ],
      users: {
        students: {
          label: 'Students',
          for: 'documenting their cases and files'
        },
        lawyers: {
          label: 'Law firms',
          for: 'documenting their cases and files'
        },
        others: {
          label: 'Others',
          for: 'nil'
        }
      }
    },
    aially: {
      id: 'aially',
      name: 'AiAlly',
      logo: aiallyLogo,
      color: '#5DBDC6',
      background: aiallyBg,
      description:'Discuss whatever you can dream of. Go beyond!',
      steps: 'Login >Make a Profile >Discover!',
      tagline: 'Need a Personal Assistant?',
      keyFeatures: [
        'Conversational interface for legal queries',
        'Quick Al-generated drafting templates',
        'Context memory for follow-up questions',
        'Legal citation previews for awareness'
      ],
      keyComponents: [
        'Voice and text input options',
        'Document formatting & structure assistance',
        'Definitions of legal terms and procedures',
        'Escalation path to verified legal educators'
      ],
      users: {
        students: {
          label: 'Students',
          for: 'research, documenting and learning purposes'
        },
        lawyers: {
          label: 'Law firms',
          for: 'research, documenting and learning purposes'
        },
        others: {
          label: 'Others',
          for: 'Understand legal terms and processes, with instant answers to your queries.'
        }
      }
    },
    advointern: {
      id: 'advointern',
      name: 'AdvoIntern',
      logo: advointernLogo,
      color: '#247172',
      background: advointernBg,
      description: 'Get certified Internship Opportunities from leading Law Firms.',
      steps: 'Login >Make your gig >Get noticed on AdvoIntern >Grab your Internship!',
      tagline: 'Need an Internship?',
     keyFeatures: [
        'Structured internship listings',
        'Quick-apply application flow',
        'Transparent tracking dachboard',
        'Skill-tagged profile match'
      ],
      keyComponents: [
        'Resume builder tools',
        'Legal skill assessments',
        'Interview scheduling system',
        'Internship milestone tracker'
      ],
      users: {
        students: {
          label: 'Students',
          for: 'finding internships'
        },
        lawyers: {
          label: 'Law firms',
          for: 'finding interns'
        },
        others: {
          label: 'Others',
          for: 'nil'
        }
      }
    }
  };

  const feature = features[featureId] || features.advofinder;

  // Handle scroll event to show detailed section
  useEffect(() => {
    const handleScroll = () => {
      // Changed the threshold to match when the feature details should become visible
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call handleScroll immediately to check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to details section
  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrolled(true);
    }
  };

  return (
    <div 
      className="feature-detail-page" 
      style={{ 
        '--feature-color': feature.color,
        backgroundImage: `url(${feature.background})`,
      }}
    >
      {/* Navigation - Fixed position at top */}
      <nav className="feature-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/features/advofinder" className="nav-link">AdvoFinder</Link>
        <Link to="/features/advoconnect" className="nav-link">AdvoConnect</Link>
        <Link to="/features/advoplanner" className="nav-link">AdvoPlanner</Link>
        <Link to="/features/aially" className="nav-link">AiAlly</Link>
        <Link to="/features/advointern" className="nav-link">AdvoIntern</Link>
      </nav>

      {/* Hero Section */}
      <section className="feature-hero">
        <div className="feature-logo-container">
          <img src={feature.logo} alt={feature.name} className="feature-detail-logo" />
        </div>
        <div className="feature-hero-content">
          <h1 className="feature-tagline">{feature.tagline}</h1>
          <p className="feature-hero-description">We got you covered.</p>
        </div>
      </section>

      {/* Feature Title */}
      <div className="feature-title-container">
        <h1 className="feature-title">{feature.name}</h1>
        <p className="feature-description">{feature.description}</p>
        <p className="feature-steps">{feature.steps}</p>
      </div>

      {/* Scroll Down Button - Hidden when scrolled down */}
      <div className={`scroll-down-container ${scrolled ? 'hidden' : ''}`}>
        <button className="scroll-down-btn" onClick={scrollToDetails}>
          Explore
        </button>
      </div>

      {/* Detailed Section - Shown when scrolled */}
      <section 
        className={`feature-details ${scrolled ? 'visible' : ''}`} 
        ref={detailsRef}
        id="featureDetails"
        // style={{ 
        //   backgroundImage: `url(${feature.background})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        // }}
      >

        <div className="feature-header">
          <div className="feature-logo-small">
            <img src={feature.logo} alt={feature.name} />
          </div>
          <div className="feature-header-text">
            <h2>{feature.name}</h2>
            <p>{feature.description}</p>
            <p className="feature-steps-small">{feature.steps}</p>
          </div>
        </div>

        <div className="feature-info-grid">
          <div className="feature-info-box">
            <h3>Key Features</h3>
            <ul>
              {feature.keyFeatures.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="feature-info-box">
            <h3>Key Components</h3>
            <ul>
              {feature.keyComponents.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="feature-users-section">
          <div className="users-heading">
            <span>WHICH WILL BE USED BY</span>
            {/* <div className="down-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1C9 0.447715 8.55228 2.41411e-08 8 0C7.44772 -2.41411e-08 7 0.447715 7 1L9 1ZM7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071L15.0711 9.34315C15.4616 8.95262 15.4616 8.31946 15.0711 7.92893C14.6805 7.53841 14.0474 7.53841 13.6569 7.92893L8 13.5858L2.34315 7.92893C1.95262 7.53841 1.31946 7.53841 0.928932 7.92893C0.538407 8.31946 0.538407 8.95262 0.928932 9.34315L7.29289 15.7071ZM7 1L7 15L9 15L9 1L7 1Z" fill="#E3DBCE"/>
              </svg>
            </div> */}
          </div>
          <div className="feature-users-grid">
            <div className="user-box">
              <h4>{feature.users.students.label} <span className="for-text">for</span></h4>
              <p>{feature.users.students.for}</p>
            </div>
            <div className="user-box">
              <h4>{feature.users.lawyers.label} <span className="for-text">for</span></h4>
              <p>{feature.users.lawyers.for}</p>
            </div>
            <div className="user-box">
              <h4>{feature.users.others.label} <span className="for-text">for</span></h4>
              <p>{feature.users.others.for}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureDetailPage;