import React from 'react';
import './destination.css';
import { FaMountain, FaTree, FaWater } from 'react-icons/fa';

// Placeholder images (you can replace these with actual image paths)
import cityImage from '/kigali city.png';
import beachImage from '/nyungwe.jpg';
import riverImage from '/nyanza.jpg';
import parkImage from '/gisenyi.jpg';
import lakeImage from '/akagera.jpg';
import zooImage from '/volcanoes park.jpg';

const Destination = () => {
    // Map features data
    const mapFeatures = [
      { icon: <FaMountain className="icon" />, text: 'Mountains' },
      { icon: <FaTree className="icon" />, text: 'Forests' },
      { icon: <FaWater className="icon" />, text: 'Rivers' },
    ];
  
    // Map configuration
    const mapConfig = {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1594295.776214671!2d28.861816099999994!3d-1.9402780000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5bde8ff0df7%3A0x3431f3cbce88aa71!2sRwanda!5e0!3m2!1sen!2sus!4v1713100000000",
      width: "100%",
      height: "300",
      title: "Map of RWANDA"
    };
    
  return (
    <>
    <section className="destination-body">
      <div className="destination-header">
        <h1>Top Destinations</h1>
        <p>Choose your favorite destination to explore Rwanda with us</p>
      </div>
      <div className="destination-grid">
        <div className="destination-item">
          <img src={cityImage} alt="Cities" />
          <span className="destination-label">Kigali city</span>
        </div>
        <div className="destination-item">
          <img src={beachImage} alt="Beaches" />
          <span className="destination-label">Nyungwe park</span>
        </div>
        <div className="destination-item"> {/* Fixed: Added = after className */}
          <img src={riverImage} alt="Rivers" />
          <span className="destination-label">Nyanza memorial site</span>
        </div>
        <div className="destination-item">
          <img src={parkImage} alt="Parks" />
          <span className="destination-label">gisenyi beach</span>
        </div>
        <div className="destination-item">
          <img src={lakeImage} alt="Lakes" />
          <span className="destination-label">akagera park</span>
        </div>
        <div className="destination-item">
          <img src={zooImage} alt="Zoos" />
          <span className="destination-label">volcanoes park</span>
        </div>
      </div>
    </section>

     {/* Map Section */}
     <section className="map-section">
        <div className="map-container">
          <div className="map-text">
            <h3>Explore Rwanda</h3>
            <p>Discover the beauty of Rwanda with its diverse landscapes and attractions.</p>
            <div className="map-icons">
              {mapFeatures.map((feature, index) => (
                <div key={index} className="icon-item">
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="map-embed">
            <iframe
              src={mapConfig.src}
              width={mapConfig.width}
              height={mapConfig.height}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title={mapConfig.title}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
