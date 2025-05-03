import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/Abu logo2.png" alt="Logo" className="logo-img" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/why-us" onClick={toggleMenu}>
                Why Us
              </Link>
            </li>
            <li>
              <Link to="/destinations" onClick={toggleMenu}>
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={toggleMenu}>
                Gallery
              </Link>
            </li>
          </ul>
        </div>
       
        <div className="buttons">
            <a
              href="https://wa.me/250784468599"
              target="_blank"
              rel="noopener noreferrer"
              className="book-now-btn"
            >
              Book Now
            </a>
          </div>

      </div>
    </nav>
  );
};

export default Navbar;
