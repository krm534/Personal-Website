import React from 'react';
import './styles/App.css';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Experience from './components/Experience';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
