import React from 'react';
import './s.css';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';

const Orders = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <header className="header">
          <h1>CRAFTY</h1>
        </header>
        <div className="checkout-form">
          <div className="box1">
            <div className="section">
              <div className="section-header">Delivery Address</div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" />
              </div>
              <div className="form-group">
                <label htmlFor="PIN">PIN Code</label>
                <input type="text" id="PIN" name="PIN" />
              </div>
            </div>

            <div className="section">
              <div className="bigbox1 boxxx">
                <p className="textinboxxx">Your Items</p>
                <a href="homedecor.html" target="_blank">
                  <img src="https://m.media-amazon.com/images/I/81qRuzYQAwL.SX679.jpg" className="boxximg" alt="painting" />
                  <button className="boxx-button">Candle</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-header">Payment Options</div>
        <div className="payment-methods">
          <div className="form-group">
            <div>
              <label htmlFor="upi">Pay with any UPI App</label>
              <input type="text" id="upi" name="upi" />
            </div>
            <div>
              <label htmlFor="wallet">Wallets</label>
              <input type="text" id="wallet" name="wallet" />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="card">Credit & Debit Cards</label>
              <input type="text" id="card" name="card" />
            </div>
            <div>
              <label htmlFor="netbanking">Netbanking</label>
              <input type="text" id="netbanking" name="netbanking" />
            </div>
          </div>
        </div>

        <div className="section order-summary">
          <div className="section-header">Order Summary</div>
          <ul>
            <li>Item: painting - ₹6900.00</li>
            <li>Shipping: ₹50.00</li>
            <li>Total: ₹6950.00</li>
          </ul>
          
          <button className="confirm-order-btn" >Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
