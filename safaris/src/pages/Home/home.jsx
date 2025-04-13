import React, { useState, useEffect } from 'react';
import "./home.css";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/hero1.jpg',
    '/hero2.jpg'
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <>
  
      <section className='hero-section' style={{ backgroundImage: `url(${slides[currentSlide]})` }}>
        <div className='hero-content'>
          <h2>Start a Trip with<br/> ABU MUKU SAFARIS</h2>
          <p>
            Discover the wild like never before, where every journey tells a story. 
            From breathtaking landscapes to unforgettable wildlife encounters.
          </p>
          <button>
            Book Now
            <IoIosArrowForward />
          </button>
        </div>
      </section>

    </>
  );
};

export default Home;