import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import project1 from './cera pictures/GACURIRO PROJECT/DESIGN/CHANTAL-22 EXCUTION 3.jpg';
import project1a from './cera pictures/GACURIRO PROJECT/DESIGN/design2.jpg';
import project1b from './cera pictures/GACURIRO PROJECT/DESIGN/design1.jpg';
import project1c from './cera pictures/GACURIRO PROJECT/DESIGN/design3.jpg';
import project1d from './cera pictures/GACURIRO PROJECT/DESIGN/design4-1.jpg';
import project1e from './cera pictures/GACURIRO PROJECT/DESIGN/design5.jpg';
import project1f from './cera pictures/GACURIRO PROJECT/DESIGN/design6.JPG';
import project2 from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/Excution1.jpg';
import project2a from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/Exction2.jpg';
import project2b from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction3.jpg';
import project2c from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction4.jpg';
import project2d from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction5.jpg';
import project2e from './cera pictures/GACURIRO PROJECT/EXECUTION OF DESIGN/exction6.jpg';
import project3 from './cera pictures/GACURIRO PROJECT/COMPLETION/complet1.jpg';
import project3a from './cera pictures/GACURIRO PROJECT/COMPLETION/complet2.jpg';
import project3b from './cera pictures/GACURIRO PROJECT/COMPLETION/complet3.jpg';
import './portfolioV2.css';

const PortfolioV2 = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    {
      title: 'Architecture & Permitting',
      description: '',
      mainImage: project1,
      gallery: [project1, project1a, project1b, project1c ,project1d ,project1e ,project1f]
    },
    {
      title: 'Construction',
      description: '',
      mainImage: project2,
      gallery: [project2, project2a, project2b ,project2c ,project2d ,project2e]
    },
    {
      title: 'Custom Buildings Builder',
      description: '',
      mainImage: project3,
      gallery: [project3, project3a, project3b]
    },
  ];

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <Navbar />
      <div className="portfolioV2-header">
        <p className="portfolioV2-subtitle">A showcase of my recent works</p>
      </div>
      <div className="portfolioV2-gallery">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolioV2-item" onClick={() => handleImageClick(item)}>
            <img src={item.mainImage} alt={item.title} className="portfolioV2-image" />
            <div className="portfolioV2-overlay">
              <div className="portfolioV2-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for showing gallery */}
      {selectedProject && (
        <div className="portfolioV2-modal">
          <div className="portfolioV2-modal-content">
            <span className="portfolioV2-close" onClick={closeModal}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="portfolioV2-modal-gallery">
              {selectedProject.gallery.map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index}`} className="portfolioV2-modal-image" loading="lazy"/>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PortfolioV2;
