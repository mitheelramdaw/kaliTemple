// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './components/home';
import Booking from './components/booking';
import About from './components/about';
import Footer from './components/footer';
import './index.css'; // Optional: Import global styles if needed

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="./components/home.js" element={<Home />} />
          <Route path="./components/booking.js" element={<Booking />} />
          <Route path="./components/about.js" element={<About />} />
        </Routes>
      </div>
        {/* <Footer></Footer> */}
    </Router>
  );
};

export default App;
