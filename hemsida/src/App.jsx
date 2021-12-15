import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Sections/Header";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Testimonials from "./Components/Sections/Testimonials";
import Portfolio from "./Components/Sections/Portfolio";
import Weather from './Components/Sections/Weather';
import Contact from "./Components/Sections/Contact";
import Routepage from './Routepage';


function App() {
  return (
    
    <div className="wrapper">
      <Routes>
        <Route element={
          <div>
      <Header />
      <Home />
      <About />
      <Testimonials />
      <Portfolio />
      <Weather/>
      <Contact />
      </div> } path = "/"/>
          <Route element={<Routepage/>} path = "/Routepage"/>
      </Routes>

    </div>
  );
}

export default App;