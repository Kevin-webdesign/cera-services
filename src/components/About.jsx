import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import contactImage from '../components/cera pictures/contact.jpg';
const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Navbar/>
      <div className="topimg">
        <img src={contactImage} alt="Contact Us" className="header-image" />
        <div className="header-text">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="about-col-2">
        <div className="cef">
          {/* Tab navigation */}
          <p
            className={`tabs ${activeTab === 'experience' ? 'active_tab' : ''}`}
            onClick={() => openTab('experience')}
          >
            Work Experience
          </p>
          <p
            className={`tabs ${activeTab === 'education' ? 'active_tab' : ''}`}
            onClick={() => openTab('education')}
          >
            Education
          </p>
          <p
            className={`tabs ${activeTab === 'skills' ? 'active_tab' : ''}`}
            onClick={() => openTab('skills')}
          >
            Certifications/Achievements/Trainings
          </p>
        </div>

        {/* Tab content */}
        <div className={`contents ${activeTab === 'experience' ? 'active_link' : ''}`} id="experience">
          <div className="row">
            <div className="experience padd-15">
              <div className="timeline-box padd-15">
                <div className="timeline">
                  {/* Timeline item */}
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> 2015 - Present
                      </h3>
                      <h4 className="timeline-title">CERA ENGINEERING SERVICE Ltd.</h4>
                      <h2 className="timeline-text">Founder and Managing Director</h2>
                         <ul>
                          <li>Oversee day-to-day operations on construction sites</li>
                        <li>Prepare comprehensive construction drawings</li>
                        <li>Coordinate with various consultants, including structural engineers</li>
                        <li>Provide on-site supervision and oversight during the construction phase</li>
                        <li>Prepare accurate cost estimates for construction projects</li>
                      </ul>
                    </div>
                  </div>

                  {/* Timeline item */}
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> 2017 - Present
                      </h3>
                      <h4 className="timeline-title">TRUST PROPERTY CONSULTANCY Ltd.</h4>
                      <h2 className="timeline-text">Real Property Value Assistant</h2>
                      <ul>
                        <li>Conduct research and analysis of local real estate market trends</li>
                        <li>Gather relevant data and information on properties under evaluation</li>
                        <li>Coordinate with various consultants, including structural engineers</li>
                        <li>Assist in the valuation of real properties using established appraisal methods</li>
                      </ul>
                    </div>
                  </div>

                  {/* Timeline item */}
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> 2017 - 2020
                      </h3>
                      <h4 className="timeline-title">PERCE CONSULT Ltd.</h4>
                      <h2 className="timeline-text">Field Technician</h2>
                      <ul>
                        <li>Install, calibrate, and maintain various types of equipment and machinery</li>
                        <li>Conduct site inspections and assessments to evaluate infrastructure, facilities, or systems</li>
                        <li>Maintain accurate records of equipment installations, maintenance activities, and test results</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`contents ${activeTab === 'education' ? 'active_link' : ''}`} id="education">
          <div className="row">
            <div className="educations padd-15">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  {/* Education timeline item */}
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> 2012 - 2015
                      </h3>
                      <h4 className="timeline-title">Advanced Diploma in Civil Engineering</h4>
                      <p className="timeline-text">
                        Integrated Polytechnic Regional Centre-Kigali (IPRC-Kigali)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`contents ${activeTab === 'skills' ? 'active_link' : ''}`} id="skills">
          <div className="row">
            <div className="skills padd-15">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  {/* Certifications timeline item */}
                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> March - June 2024
                      </h3>
                      <h4 className="timeline-title">ProtaSoftware Engineering</h4>
                      <p className="timeline-text">
                        Certified ProtaStructure Trainee in Reinforced Concrete Design.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> January - April 2024
                      </h3>
                      <p className="timeline-text">
                        Autodesk Certified Revit Trainee in Architectural Design
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="cicle">
                      <h3 className="timeline-date">
                        <FaCalendarAlt /> 26th June 2020
                      </h3>
                      <p className="timeline-text">
                        IER Certified Engineering Technologist in Civil Engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
