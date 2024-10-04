import React from 'react';
import { FaBuilding, FaDraftingCompass, FaClipboardList, FaMapMarkedAlt, FaChartLine, FaHardHat } from 'react-icons/fa';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import contactImage from '../components/cera pictures/contact.jpg';
const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="topimg">
        <img src={contactImage} alt="Contact Us" className="header-image" />
        <div className="header-text">
        <h1 className="subtitle">Our Services</h1>
      </div>
      </div>
      <div className="work">
        <div className="row-1">
          <div className="service">
            <FaBuilding className="service-icon" />
            <h4>
              <a href="https://example.com/civil-engineering-facts" target="_blank" rel="noopener noreferrer">
                Civil Engineering
              </a>
            </h4>
            <p>Designing, building, and maintaining infrastructure like roads, bridges, and buildings.</p>
          </div>
        </div>
        <div className="row-1">
          <div className="service">
            <FaDraftingCompass className="service-icon" />
            <h4>
              <a href="https://example.com/architecture-facts" target="_blank" rel="noopener noreferrer">
                Architecture
              </a>
            </h4>
            <p>Creating functional, safe, and aesthetically pleasing building designs.</p>
          </div>
        </div>
        <div className="row-1">
          <div className="service">
            <FaClipboardList className="service-icon" />
            <h4>
              <a href="https://example.com/quantity-surveying-facts" target="_blank" rel="noopener noreferrer">
                Quantity Surveying
              </a>
            </h4>
            <p>Managing all costs related to construction and engineering projects.</p>
          </div>
        </div>
        <div className="row-1">
          <div className="service">
            <FaMapMarkedAlt className="service-icon" />
            <h4>
              <a href="https://example.com/land-surveying-facts" target="_blank" rel="noopener noreferrer">
                Land Surveying
              </a>
            </h4>
            <p>Measuring and mapping land to establish property boundaries.</p>
          </div>
        </div>
        <div className="row-1">
          <div className="service">
            <FaChartLine className="service-icon" />
            <h4>
              <a href="https://example.com/real-property-valuation-facts" target="_blank" rel="noopener noreferrer">
                Real Property Valuation
              </a>
            </h4>
            <p>Estimating the market value of real estate properties.</p>
          </div>
        </div>
        <div className="row-1">
          <div className="service">
            <FaHardHat className="service-icon" />
            <h4>
              <a href="https://example.com/construction-supervision-facts" target="_blank" rel="noopener noreferrer">
                Construction Site Supervision
              </a>
            </h4>
            <p>Overseeing construction activities to ensure project quality and safety.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
