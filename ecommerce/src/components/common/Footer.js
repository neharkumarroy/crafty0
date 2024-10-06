import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>Company Information</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Order Tracking</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2023 Your E-commerce Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
