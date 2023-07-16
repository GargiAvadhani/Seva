import React from 'react';

import './FooterStyles.css';




const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-content">

        <div className="footer-section">

          <h3>Seva 🐾</h3>

          <p>Seva is a registered NGO. We work for the welfare of street dogs and abandoned pet dogs in the city of Pune, India</p>

        </div>

        <div className="footer-section">

          <h3>Contact📩</h3>

          <p>Phone: 123-456-789</p>

          <p>Email:<a href = "mailto:info@sevact.org"> info@sevact.org</a></p>

        </div>

        <div className="footer-section">

          <h3>Follow Us📲</h3>

          <div className="social-icons">

            <a href="#" className="icon-link"><i className="fab fa-facebook"></i></a>

            <a href="#" className="icon-link"><i className="fab fa-twitter"></i></a>

            <a href="#" className="icon-link"><i className="fab fa-instagram"></i></a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>&copy; 2023 Seva Animal Welfare Charitable Trust, Pune | All Rights Reserved | </p>

      </div>

    </footer>

  );

};




export default Footer;