import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing icons for navigation
import './gallery.css';

const Gallery = () => {
  // State for managing the current testimonial index
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Array of testimonials (6 different users)
  const testimonials = [
    {
      name: "Emma Sofia",
      location: "Traveler from Belgium",
      rating: 5,
      review: "Africa has so much nature, and MukusLuxurySafaris made me fall in love with Rwanda. It was truly amazing exploring more places here.",
    },
    {
      name: "Cyiza Christian",
      location: "Traveler from Rwanda",
      rating: 5,
      review: "I had a great time in Rwanda with MukusLuxurySafaris and I will definitely recommend it to my friends and family to visit Rwanda.",
    },
    {
      name: "Mark Cousins",
      location: "Traveler from England",
      rating: 5,
      review: "I came from Europe when I heard about MukusLuxurySafaris and I really had fun exploring more places in Rwanda.",
    },
    {
      name: "Aisha Khan",
      location: "Traveler from Pakistan",
      rating: 5,
      review: "The experience with MukusLuxurySafaris was unforgettable. Rwanda's landscapes and culture are breathtaking!",
    },
    {
      name: "Lucas Mendes",
      location: "Traveler from Brazil",
      rating: 5,
      review: "MukusLuxurySafaris provided an amazing adventure in Rwanda. I loved every moment of my trip!",
    },
    {
      name: "Sophie Laurent",
      location: "Traveler from France",
      rating: 5,
      review: "Traveling through Rwanda with MukusLuxurySafaris was a dream come true. Highly recommend it!",
    },
  ];

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  // Functions to handle manual navigation
  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Logic to determine which testimonials to show based on current index
  const getVisibleTestimonials = () => {
    const visibleCount = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1200 ? 2 : 3; // 1 on mobile, 2 on tablet, 3 on desktop
    const visibleTestimonials = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentTestimonial + i) % testimonials.length;
      visibleTestimonials.push(testimonials[index]);
    }
    return visibleTestimonials;
  };

  return (
    <>
      {/* Gallery Section */}
      <section className="gallery-body">
        <h2>Our GALLERY</h2>
        <p>
          Explore the beauty of our cozy retreats, designed for comfort and relaxation amidst nature.
        </p>
        <div className="gallery-grid">
          <div className="gallery-item item-1">
            <img src="/1.jpeg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item item-2">
            <img src="/4.jpeg" alt="Gallery Image 2" />
          </div>
          <div className="gallery-item item-3">
            <img src="/2.jpeg" alt="Gallery Image 3" />
          </div>
          <div className="gallery-item item-4">
            <img src="/3.jpeg" alt="Gallery Image 4" />
          </div>
          <div className="gallery-item item-5">
            <img src="/5.jpeg" alt="Gallery Image 5" />
          </div>
          <div className="gallery-item item-6">
            <img src="/6.jpeg" alt="Gallery Image 6" />
          </div>
          <div className="gallery-item item-7">
            <img src="/7.jpeg" alt="Gallery Image 7" />
          </div>
          <div className="gallery-item item-8">
            <img src="/8.jpeg" alt="Gallery Image 8" />
          </div>
          <div className="gallery-item item-9">
            <img src="/9.jpeg" alt="Gallery Image 9" />
          </div>
          <div className="gallery-item item-10">
            <img src="/10.jpeg" alt="Gallery Image 10" />
          </div>
          <div className="gallery-item item-10">
            <img src="/11.jpeg" alt="Gallery Image 11" />
          </div>
          <div className="gallery-item item-9">
            <img src="/12.jpeg" alt="Gallery Image 12" />
          </div>
          <div className="gallery-item item-10">
            <img src="/13.jpeg" alt="Gallery Image 13" />
          </div>
          <div className="gallery-item item-10">
            <img src="/14.jpeg" alt="Gallery Image 14" />
          </div>
          <div className="gallery-item item-9">
            <img src="/15.jpeg" alt="Gallery Image 15" />
          </div>
          <div className="gallery-item item-10">
            <img src="/16.jpeg" alt="Gallery Image 16" />
          </div>
          <div className="gallery-item item-10">
            <img src="/17.jpeg" alt="Gallery Image 17" />
          </div>
          <div className="gallery-item item-9">
            <img src="/18.jpeg" alt="Gallery Image 18" />
          </div>
          <div className="gallery-item item-10">
            <img src="/19.jpeg" alt="Gallery Image 19" />
          </div>
          <div className="gallery-item item-10">
            <img src="/20.jpeg" alt="Gallery Image 20" />
          </div>
          <div className="gallery-item item-9">
            <img src="/21.jpeg" alt="Gallery Image 21" />
          </div>
          <div className="gallery-item item-10">
            <img src="/22.jpeg" alt="Gallery Image 22" />
          </div>
          <div className="gallery-item item-10">
            <img src="/23.jpeg" alt="Gallery Image 23" />
          </div>
          <div className="gallery-item item-9">
            <img src="/24.jpeg" alt="Gallery Image 24" />
          </div>
          <div className="gallery-item item-10">
            <img src="/25.jpeg" alt="Gallery Image 25" />
          </div>
          <div className="gallery-item item-10">
            <img src="/26.jpeg" alt="Gallery Image 26" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-body">
        <h2>What Our <span>TRAVELLERS SAY</span></h2>
        <div className="testimonial-slider">
          <button className="nav-arrow prev-arrow" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <div className="testimonial-content">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <h3>{testimonial.name}</h3>
                <p className="location">{testimonial.location}</p>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="review">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
          <button className="nav-arrow next-arrow" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
