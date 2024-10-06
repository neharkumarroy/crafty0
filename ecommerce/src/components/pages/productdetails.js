import React from 'react';
import './itemdetail.css';

const Single = () => {
  return (
    <div>
      <div className="mainimg">
        <img className="mainpic" src="https://m.media-amazon.com/images/I/81qRuzYQAwL.SX679.jpg" alt="image" />
      </div>
      <div className="sideimg">
        <img className="jo" src="https://m.media-amazon.com/images/I/813y5PPnPNL.SX679.jpg" alt="image" /><br />
        <img className="jo" src="https://m.media-amazon.com/images/I/41JNgGbFu7L.jpg" alt="image" /><br />
        <img className="jo" src="https://m.media-amazon.com/images/I/716nrGjzInL.SX679.jpg" alt="image" /><br />
        <img className="jo" src="https://m.media-amazon.com/images/I/71Hbd060gBL.SX679.jpg" alt="image" />
      </div>
      <div className="cartandcontent">
        <div className="content">
          <h2>Clay Candle Burner</h2>
          <div className="item-rating-and-price">
            <span>4.7(57) rating</span><h4>reviews</h4>
            <p className="last-price">old price: <span>$5.00</span></p>
            <p className="new-price">new price: <span>$3.00</span></p>
          </div>
          <div className="item-details">
            <h2>About This Item</h2>
            <p>Item: Ceramic Aroma Burner/Oil Diffuser Size 9.5 Cm / 3.75 inch About ( In the box - 1 Aroma Burner and 1 Tealight Candle )
              The Aroma Burner Coming In This Pack is Suitable To Use with Any Aroma Oil, or Even With Camphore Too.
              Easy to Use And Clean It For Reuse Again, It Can Use As Long As You Want,
              Beautiful Gift in Any Occasion to Your Friend, Family, Father, Mother, Sister, Wife, Husband etc.
              We always care to give our label best in the product in final pack, You can use it with any aroma oil, camphor, wax tad etc with this oil diffuser burner, or why not you gift this oil burner to your loved once</p>
          </div>
        </div>
        <div className="aligncb"></div>
        <div className="cb">
          <input type="image" className="cartbuy cart" alt="Login" src="cartpng.png" />
        </div>
        <div className="bn">
          <input type="image" className="cartbuy buynow" alt="Login" src="Buynowpngmain.png" />
        </div>
      </div>
      <div className="similer-items">
        <h4>Similer Products</h4>
        <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/81pgtiJkH7L.AC_UL165_SR165,165.jpg" alt="similar product" />
        <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/717cjikei5L.AC_UL165_SR165,165.jpg" alt="similar product" />
        <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/61Fo2f1mv0L.AC_UL165_SR165,165.jpg" alt="similar product" />
        <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/619EyuWC3bL.AC_UL165_SR165,165.jpg" alt="similar product" />
        <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/710RD3-a+mL.AC_UL165_SR165,165.jpg" alt="similar product" />
        <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/81yZ9G-VU6L.AC_UL165_SR165,165.jpg" alt="similar product" />
        <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/512mVSfM1AL.AC_UL165_SR165,165.jpg" alt="similar product" />
        <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/61VS67GKroL.AC_UL165_SR165,165.jpg" alt="similar product" />
        <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/61wrRrtpCnL.AC_UL165_SR165,165.jpg" alt="similar product" />
      </div>
      <div className="reviews">
        <pre><h2>Reviews</h2></pre>
        <p className="up">Write a review . . .</p>
        <textarea placeholder="Your Comment..." rows="2" cols="50"></textarea>
      </div>
    </div>
  );
};

export default Single;
