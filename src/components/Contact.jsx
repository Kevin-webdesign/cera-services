import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'; 
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import contactImage from '../components/cera pictures/contact.jpg';

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgoogqr");

  if (state.succeeded) {
    Swal.fire({
      title: "Success!",
      text: "Thanks for contacting us! We will get back to you shortly.",
      icon: "success",
      confirmButtonText: "OK"
    });
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "+250783197870"; 
    const message = "Hello, I'd like more information!";
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div>
      <Navbar />
      <div className="topimg">
        <img src={contactImage} alt="Contact Us" className="header-image" />
        <div className="header-text">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Our Location</h2>
          <div className="location">
            <h4>Kigali Office</h4>
            <p>KG 700 Street, Kigali, Rwanda</p>
            <p>Phone: +250784507070</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Your Phone Number"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />

            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button className="btn" type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
          <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
            Contact us on WhatsApp
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
