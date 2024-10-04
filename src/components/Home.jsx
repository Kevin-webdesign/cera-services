import React from 'react';
import Navbar from './navbar/Navbar';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import cera from './images/cv cera2.png';
import Footer from './footer/Footer';
import topimg from './cera pictures/top.jpg';
import { FaWhatsapp ,FaFileDownload} from 'react-icons/fa';

function Home() {
  const [text] = useTypewriter({
    words: ["C e r t i f i e d E n g i n e e r i n g T e c h n o l o g i s t"],
    typeSpeed: 70,
  });
  const handleWhatsAppClick = () => {
    const phoneNumber = "+250784507070"; 
    const message = "Hello, I'd like more information!";
    window.open(`https://api.whatsapp.com/send?phone=${+250784507070}&text=${encodeURIComponent("murahoneza")}`, '_blank');
  };
  return (
    <div>
      <Navbar />
      <div className="design">
        <img src={topimg} alt="Contact Us" className="header-image" />
      </div>
        <div className="container">
          <div className="home_title">
          <div className="photo">
            <img src={cera} alt="Chancelier Cera" />
          </div>
            <div className="content">
              <h1><span>Chancelier Cera RWANYAGASORE</span></h1>
              <h3><span className="typing">{text}</span><Cursor cursorStyle="." /></h3>
              <p className="me">
                Registered member of Instution of Engineers Rwanda (IER) wiht more than 9 years of hands-on experience
                in delivering innovative infrastructure solutions through Architectural and Structural
                Design, Land and Quantity Surveying, and Construction Sites Supervision. Known for
                seamlessly blending technical expertise with creative problem-solving, I thrive in
                challenging environments where precision and efficiency are paramount.
              </p>
            </div>
            <div className="home-btn">
          <button className="whatsapp-btn">
            <a href="https://www.engineersrwanda.rw/ier-compliant-technologists?page=2 "> IER Complaint</a>
          </button>
          <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
           <i><FaWhatsapp/></i> Write us on WhatsApp
          </button>
          </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Home;
