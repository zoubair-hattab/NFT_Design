import React from 'react';
import NavBar from '../components/navBar/NavBar';
import Hero from '../components/hero/Hero';
import Collection from '../components/collection/Collection';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Collection />

      <div className="body-bg-shape"></div>
    </>
  );
};

export default HomePage;
