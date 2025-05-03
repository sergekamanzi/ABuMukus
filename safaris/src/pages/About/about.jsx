import React from 'react';
import './about.css';
import { FaMap, FaHiking, FaUserTie, FaCampground, FaBook, FaArrowRight, FaCheck } from 'react-icons/fa'; // Added FaCheck for the checklist

const About = () => {
  return (
    <>
      {/* First Section */}
      <section className="about-body">
        <div className="about-container">
          {/* Left Side - Image and Text */}
          <div className="about-left">
            <div className="about-text">
              <span className="highlight-text">Value before business</span>
              <h1>We Offer the best</h1>
            </div>
            <div className="about-image">
              {/* Image will be set via CSS background */}
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="about-right">
            <div className="feature">
              <FaMap className="feature-icon" />
              <div>
                <h3>VARIOUS ADVENTURES</h3>
                <p>Experience thrilling adventures in diverse landscapes for all levels of explorers.</p>
              </div>
            </div>
            <div className="feature">
              <FaHiking className="feature-icon" />
              <div>
                <h3>ADVENTUROUS TRAILS</h3>
                <p>Discover scenic trails that offer both excitement and breathtaking views.</p>
              </div>
            </div>
            <div className="feature">
              <FaUserTie className="feature-icon" />
              <div>
                <h3>TRAINED GUIDES</h3>
                <p>Our professional guides ensure safety and enriching experiences on every trip.</p>
              </div>
            </div>
            <div className="feature">
              <FaCampground className="feature-icon" />
              <div>
                <h3>FAMILY TRIPS</h3>
                <p>Fun-filled trips designed for the whole family to enjoy and bond together.</p>
              </div>
            </div>
            <div className="feature">
              <FaBook className="feature-icon" />
              <div>
                <h3>COMPLETE GUIDE</h3>
                <p>Get access to a detailed guide covering everything you need to know for your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Explore Nearby Activities */}
      <section className="explore-section">
        <div className="explore-content">
          <h2>Explore nearby activities with us</h2>
          <p>
            enjoy the thrill of adventure and make memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* Last Section - About Company */}
      <section className="last-section">
        <div className="last-container">
          {/* Left Side - Image */}
          <div className="last-content">
            <h2>About <span>MukusLuxurySafaris</span></h2>
            <p>
            Welcome to Rwanda Explore — your trusted partner in discovering the beauty,
             culture, and hidden gems of Rwanda. We offer guided tours across breathtaking
              destinations, ensuring every journey is both memorable and enriching. From
               the rolling hills to wildlife safaris and cultural experiences,
                we've got your adventure covered.
            </p>
            <div className="checklist">
              <div className="check-item">
                <FaCheck className="check-icon" />
                <span>Comfortable rides to all destinations</span>
              </div>
              <div className="check-item">
                <FaCheck className="check-icon" />
                <span>Experienced local tour guides</span>
              </div>
              <div className="check-item">
                <FaCheck className="check-icon" />
                <span>Explore culture, nature, and wildlife</span>
              </div>
            </div>
          </div>

          {/* Right Side - Text and Checklist */}

          <div className="last-image">
            {/* Image will be set via CSS background */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
