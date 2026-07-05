import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Education from '../components/Education';
import Contact from '../components/Contact';

/**
 * The main single-page portfolio experience: every section rendered
 * in sequence so react-scroll can navigate between them.
 */
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
