import React, { useState, useEffect } from 'react';
import "./home.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaMapMarkedAlt, FaHiking, FaLanguage, FaWifi, FaShuttleVan, FaHotel } from "react-icons/fa";

const Home = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/250784468599", "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className='hero-section'>
        <video autoPlay muted loop className='hero-video'>
          <source src="/abu.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='hero-content'>
          <h2>Start a Trip With The MukusLuxurySafaris</h2>
          <p>
            Discover the wild like never before, where every journey tells a story. 
            From breathtaking landscapes to unforgettable wildlife encounters.
          </p>
          <button onClick={handleWhatsAppClick}>
            Book Now
            <IoIosArrowForward />
          </button>
        </div>
      </section>

      {/* Camp Infrastructure Section */}
      <section className='camp-infrastructure-section'>
        <h2>Tourism Infrastructure</h2>
        <div className='camp-cards'>
          {/* Card 1: Guided Tours */}
          <div className='camp-card'>
            <FaMapMarkedAlt className='camp-icon'/>
            <h3>Guided Tours</h3>
            <p>
              Explore Rwanda's beauty with our expert guides who offer insightful stories at every destination.
            </p>
          </div>

          {/* Card 2: Comfortable Transportation */}
          <div className='camp-card'>
            <FaShuttleVan className='camp-icon' />
            <h3>Comfortable Transportation</h3>
            <p>
              Ride in style and comfort to your destination with our modern, well-maintained vehicles.
            </p>
          </div>

          {/* Card 3: Hotel & Lodge Booking */}
          <div className='camp-card'>
            <FaHotel className='camp-icon' />
            <h3>Hotel & Lodge Booking</h3>
            <p>
              We help you book the best stays near your travel spots – from luxury resorts to cozy lodges.
            </p>
          </div>

          {/* Card 4: Nature & Hiking Adventures */}
          <div className='camp-card'>
            <FaHiking className='camp-icon' />
            <h3>Nature & Hiking Adventures</h3>
            <p>
              Embark on unforgettable hikes and explore Rwanda’s breathtaking landscapes with us.
            </p>
          </div>

          {/* Card 5: Multi-Language Guides */}
          <div className='camp-card'>
            <FaLanguage className='camp-icon' />
            <h3>Multi-Language Guides</h3>
            <p>
              Our team speaks multiple languages, making it easy for every traveler to feel at home.
            </p>
          </div>

          {/* Card 6: Internet Support */}
          <div className='camp-card'>
            <FaWifi className='camp-icon' />
            <h3>Internet Support</h3>
            <p>
              Stay connected wherever you go. We ensure Wi-Fi access during your tours and stops.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className='video-section' style={{ backgroundImage: `url(/aa.jpeg)` }}>
        <div className='video-content'>
          <h3>Enjoy the Adventure, Take only memories,<br/> leave only footprints</h3>
          <button onClick={handleWhatsAppClick}>
            Book now
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
