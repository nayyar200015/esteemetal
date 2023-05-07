import React from 'react';
import Header from './Header/Header'
import AboutContent from './AboutContent/AboutContent'

const About = () => {
  document.title = 'About Us :: Esteemetal. Dubai.';
  return (
    <div>
      <Header />
      <AboutContent />
    </div>
  );
}

export default About;
