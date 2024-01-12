import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
const Hero = () => {
  return (
    <section className="section hero" aria-label="home">
      <div className="container">
        <h1 className="headline-lg hero-title">
          Discover rate collection or <span className="span">Arts & NFTs</span>
        </h1>

        <p className="section-text body-lg">
          We are a huge marketplace dedicated to connecting great artists of all
          Metalink with their fans and unique token collectors!
        </p>

        <Link to="#" className="btn">
          Explore now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
