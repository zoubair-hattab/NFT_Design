import React from 'react';
import NavBar from '../components/navBar/NavBar';
import Hero from '../components/hero/Hero';
import Collection from '../components/collection/Collection';
import Discover from '../components/discover/Discover';
import BestSeller from '../components/bestSeller/BestSeller';
import Ask from '../components/askMe/Ask';
import Footer from '../components/footer/Footer';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Collection />
      <Discover />
      <BestSeller />
      <Ask />
      <Footer />

      <div className="body-bg-shape"></div>
    </>
  );
};

export default HomePage;
