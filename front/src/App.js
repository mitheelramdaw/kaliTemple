// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'; // Import global styles if needed

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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
