import React from 'react';
import './Footer.css'; // You can style your footer here
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: rwanyacera@gmail.com</p>
          <p>Phone: +250784507070</p>
          <h4 className="address">Address</h4>
          <p>KG 700 Street, Kigali, Rwanda</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i><FaFacebook/></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i><FaTwitter/></i>
            </a>
            <a href="https://www.instagram.com/rwanyagasorechancelier?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <i><FaInstagram/></i>
            </a>
            <a href="https://www.linkedin.com/in/chancelier-cera-rwanyagasore-6841a2128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Cera Engineering Service Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
