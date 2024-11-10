// components/hero.tsx

import React from 'react';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Welcome to the World of JavaScript</h2>
        <p>
          Discover the power and potential of JavaScript with our expert blogs and resources.
          Learn about its history, use cases, and latest trends.
        </p>
        <button className="cta-button">Read Our Blog</button>
      </div>
    </section>
  );
};

export default Hero;
