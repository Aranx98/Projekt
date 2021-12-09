import React from 'react';
import './App.css';

import Header from "./Components/Sections/Header";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Testimonials from "./Components/Sections/Testimonials";
import Portfolio from "./Components/Sections/Portfolio";
import Weather from './Components/Sections/Weather';
import Contact from "./Components/Sections/Contact";


function App() {
  return (
    
    <div className="wrapper">
      <Header />
      <Home />
      <About />
      <Testimonials />
      <Portfolio />
      <Weather/>
      <Contact />
      
    </div>
  );
}

export default App;