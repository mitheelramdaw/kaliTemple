import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Kempton Kali Amman Temple</h3>
        <p>&copy; 2024 Kempton Kali Amman Temple. All rights reserved.</p>
        <ul className="socials">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
