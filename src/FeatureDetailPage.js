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
      description: 'Finding and consulting Lawyers near you was never this easy !',
      steps: 'Login>Enter Location>Select Lawyer>Call them',
      tagline: 'Need a Lawyer?',
      keyFeatures: [
        'Advanced filters',
        'Map integration',
        'Lawyer profiles',
        'Booking system'
      ],
      keyComponents: [
        'Rating system',
        'Availability calendar',
        'Consultation booking',
        'Secure messaging'
      ],
      users: {
        students: {
          label: 'Students',
          for: 'finding lawyers'
        },
        lawyers: {
          label: 'Lawyers',
          for: 'meeting new clients'
        },
        others: {
          label: 'Others',
          for: 'finding lawyers'
        }
      }
    },
    advoconnect: {
      id: 'advoconnect',
      name: 'AdvoConnect',
      logo: advoconnectLogo,
      color: '#529DA3',
      background: advoconnectBg,
      description: 'Connect with leading Lawyers in our community model.',
      steps: 'Login>Make a Profile>Connect!',
      tagline: 'Need a Platform to Express?',
      keyFeatures: [
        'Clean feed layout',
        'Easy post creation',
        'Rich media support',
        'Threaded discussions'
      ],
      keyComponents: [
        'Topic categorization',
        'User reputation system',
        'Content moderation tools',
        'Search functionality'
      ],
      users: {
        students: {
          label: 'Students',
          for: 'posting, commenting, connecting with top lawyers'
        },
        lawyers: {
          label: 'Lawyers',
          for: 'taking views and connecting with talent and their colleagues'
        },
        others: {
          label: 'Others',
          for: 'posting, commenting, connecting with top lawyers and students'
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
      steps: 'Login>Make a Profile>Connect!',
      tagline: 'Need a Case Manager?',
      keyFeatures: [
        'Month/week/day views',
        'Task integration',
        'Document attachment',
        'Reminder system'
      ],
      keyComponents: [
        'Court date tracking',
        'Deadline management',
        'Resource linking',
        'Collaboration tools'
      ],
      users: {
        students: {
          label: 'Students',
          for: 'documenting their cases and files'
        },
        lawyers: {
          label: 'Lawyers',
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
      steps: 'Login>Make a Profile>Discover!',
      tagline: 'Need a Personal Assistant?',
      keyFeatures: [
        'Conversational UI',
        'Quick response templates',
        'Context preservation',
        'Legal citation display'
      ],
      keyComponents: [
        'Voice input support',
        'Document upload',
        'Legal term definitions',
        'Escalation to human experts'
      ],
      users: {
        students: {
          label: 'Students',
          for: 'research, documenting and learning purposes'
        },
        lawyers: {
          label: 'Lawyers',
          for: 'research, documenting and learning purposes'
        },
        others: {
          label: 'Others',
          for: 'first legal aid and finding the most suitable lawyer'
        }
      }
    },
    advointern: {
      id: 'advointern',
      name: 'AdvoIntern',
      logo: advointernLogo,
      color: '#247172',
      background: advointernBg,
      description: 'Get certified Internship Opportunities from leading Lawyers.',
      steps: 'Login>Make your gig>Get noticed on AdvoIntern >Grab your Internship!',
      tagline: 'Need an Internship?',
      keyFeatures: [
        'Clean listing layout',
        'Quick apply function',
        'Application tracking',
        'Profile matching'
      ],
      keyComponents: [
        'Resume builder',
        'Skill assessment',
        'Interview scheduling',
        'Progress tracking'
      ],
      users: {
        students: {
          label: 'Students',
          for: 'finding internships'
        },
        lawyers: {
          label: 'Lawyers',
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
          Scroll Down
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