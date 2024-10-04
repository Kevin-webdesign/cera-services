import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import project1 from './cera pictures/first design.jpeg';
import project2 from './cera pictures/second design.jpeg';
import project3 from './cera pictures/3rd design.jpeg';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './portfolioV2.css';

const PortfolioV2 = () => {
  const portfolioItems = [
    {
      title: 'Urban Planning Design',
      description: 'A complete urban planning solution focusing on smart city principles.',
      image: project1,
      link: 'https://example.com/project1',
      repo: 'https://github.com/example/project1',
    },
    {
      title: '3D Architectural Render',
      description: 'High-end 3D renders for a residential project in Kigali.',
      image: project2,
      link: 'https://example.com/project2',
      repo: 'https://github.com/example/project2',
    },
    {
      title: 'Bridge Construction Blueprint',
      description: 'Blueprints for an innovative bridge design, optimized for heavy loads.',
      image: project3,
      link: 'https://example.com/project3',
      repo: 'https://github.com/example/project3',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="portfolioV2-header">
        <h1 className="portfolioV2-title">My Projects</h1>
        <p className="portfolioV2-subtitle">A showcase of my recent works</p>
      </div>
      <div className="portfolioV2-gallery">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolioV2-item">
            <img src={item.image} alt={item.title} className="portfolioV2-image" />
            <div className="portfolioV2-overlay">
              <div className="portfolioV2-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolioV2-links">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Project
                  </a>
                  <a href={item.repo} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioV2;
