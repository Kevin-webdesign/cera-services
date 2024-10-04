import React, { useState } from 'react';
import logo from '../navbar/logo.png';
import { FaHome, FaUser, FaList, FaBriefcase, FaComment, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <a href="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </a>
      <i className="nav-btn" onClick={toggleMenu}>
        <FaBars />
      </i>
      <ul className={menuOpen ? 'open' : ''}>
        <li><a href="/"><FaHome /> Home</a></li>
        <li><a href="/about"><FaUser /> About</a></li>
        <li><a href="/services"><FaList /> Services</a></li>
        <li><a href="/portfolio"><FaBriefcase /> Portfolio</a></li>
        <li><a href="/contact"><FaComment /> Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;




