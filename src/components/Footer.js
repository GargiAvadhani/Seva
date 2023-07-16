import React from 'react';

import './FooterStyles.css';




const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-content">

        <div className="footer-section">

          <h3>About</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod eros in nisi tincidunt, vel fermentum metus malesuada.</p>

        </div>

        <div className="footer-section">

          <h3>Contact</h3>

          <p>Phone: 123-456-789</p>

          <p>Email: example@example.com</p>

        </div>

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#" className="icon-link"><i className="fab fa-facebook"></i></a>

            <a href="#" className="icon-link"><i className="fab fa-twitter"></i></a>

            <a href="#" className="icon-link"><i className="fab fa-instagram"></i></a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>&copy; 2023 All rights reserved. Footer Example.</p>

      </div>

    </footer>

  );

};




export default Footer;