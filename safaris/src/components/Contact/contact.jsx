import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationPin } from 'react-icons/md';

const Contact = () => {
  return (
    <footer className="contact-container">
      <div className="contact-content">
        {/* Left Section */}
        <div className="contact-section">
          <img src="/Abu logo2.png" alt="Logo" className="logo1-img" />
          <p>
            Going on an adventure is not about just fun, it's all about yourself 
            and entertaining yourself. Get the best adventure activities in you 
            and start living the moment.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="contact-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/why-us">About</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

       

        {/* Reach Us Section */}
        <div className="contact-section">
          <h3>Reach Us</h3>
          <ul>
            <li>
              <MdLocationPin className="icon" />
              Kigali,Rwanda
            </li>
            <li>
              <MdEmail className="icon" />
              themukusluxurysafaris@gmail.com
            </li>
            <li>
              <MdPhone className="icon" />
              +250784468599 & +250782162078
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 . Created by serge.K</p>
        <div className="footer-links">
          <a href="#">Help</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
