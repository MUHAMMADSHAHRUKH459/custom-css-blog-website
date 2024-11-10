import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contactSection">
      <div className="contactContent">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us.</p>

        <div className="contactInfo">
          <p><strong>Email:</strong> shahrukhjaved459@gmail.com</p>
          <p><strong>Phone:</strong> 03205421692</p>
          <p><strong>Address:</strong> Your Address Here, City, Country</p>
        </div>

        <ul className="contactList">
          <li>Email: shahrukhjaved459@gmail.com</li>
          <li>Phone: 03205421692</li>
          <li>Address: Your Address Here, City, Country</li>
        </ul>

        <form className="contactForm">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" placeholder="Enter your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
