// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'; // Import global styles if needed
import './App.css'

import Navbar from './components/nav';
import Home from './components/home';
import Booking from './components/booking';
import About from './components/about';
import Footer from './components/footer';
import NotFound from './components/notFound'; // Assuming you have this component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
