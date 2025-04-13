import React from 'react';
import './destination.css';

// Placeholder images (you can replace these with actual image paths)
import cityImage from '/kigali city.png';
import beachImage from '/nyungwe.jpg';
import riverImage from '/nyanza.jpg';
import parkImage from '/gisenyi.jpg';
import lakeImage from '/akagera.jpg';
import zooImage from '/volcanoes park.jpg';

const Destination = () => {
  return (
    <section className="destination-body">
      <div className="destination-header">
        <h1>Top Destinations</h1>
        <p>Choose your favorite destination to explore Rwanda with us</p>
      </div>
      <div className="destination-grid">
        <div className="destination-item">
          <img src={cityImage} alt="Cities" />
          <span className="destination-label">cities</span>
        </div>
        <div className="destination-item">
          <img src={beachImage} alt="Beaches" />
          <span className="destination-label">beaches</span>
        </div>
        <div className="destination-item"> {/* Fixed: Added = after className */}
          <img src={riverImage} alt="Rivers" />
          <span className="destination-label">rivers</span>
        </div>
        <div className="destination-item">
          <img src={parkImage} alt="Parks" />
          <span className="destination-label">parks</span>
        </div>
        <div className="destination-item">
          <img src={lakeImage} alt="Lakes" />
          <span className="destination-label">lakes</span>
        </div>
        <div className="destination-item">
          <img src={zooImage} alt="Zoos" />
          <span className="destination-label">zoos</span>
        </div>
      </div>
    </section>
  );
};

export default Destination;