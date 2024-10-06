import React from 'react';
import './Cart.css';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Orders from './Orders';
import { Link } from 'react-router-dom';
function CartPage (){
  


    return (
        <>
        <Navbar/>
            {/* Cart Item Detail */}
            <div className="small container cart-page">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="huohuo.jpeg" alt="Handmade Jute Basket" />
                                    <div>
                                        <p>Handmade Jute Basket</p>
                                        <small>Price: $20.99</small>
                                        <br />
                                        <a href="/">Remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" defaultValue="1" /></td>
                            <td>$20.99</td>
                        </tr>

                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="product-two.webp" alt="Eco-Friendly Planter Basket" />
                                    <div>
                                        <p>Eco-Friendly Planter Basket</p>
                                        <small>Price: $15.99</small>
                                        <br />
                                        <a href="/">Remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" defaultValue="1" /></td>
                            <td>$15.99</td>
                        </tr>

                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="product-three.webp" alt="Tree Wall Art" />
                                    <div>
                                        <p>Tree Wall Art</p>
                                        <small>Price: $8.99</small>
                                        <br />
                                        <a href="/">Remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" defaultValue="1" /></td>
                            <td>$8.99</td>
                        </tr>
                    </tbody>
                </table>

                <div className="total-price">
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>$45.97</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$4.03</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$50.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Proceed to Checkout button */}
            <Link to="/Orders"><button className="checkout-btn">Proceed to Checkout</button></Link>
            <br />

           <Footer/>
        </>
    );
};

export default CartPage;

