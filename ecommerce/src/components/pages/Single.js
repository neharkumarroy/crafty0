import React from 'react';
import './singleitem6.css';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Orders from './Orders';
import Footer from '../common/Footer';



const Single = () => {
  return (
        <div >
            <Navbar/>
            
    <div className="top">
        <div className="mainimg">
            <img className="mainpic" src="https://m.media-amazon.com/images/I/81qRuzYQAwL.SX679.jpg" alt="image"/>
        </div>
            <div className="sideimg">
             
                <img className="jo" src="https://m.media-amazon.com/images/I/813y5PPnPNL.SX679.jpg" alt="image"/><br/>
                <img className="jo" src="https://m.media-amazon.com/images/I/41JNgGbFu7L.jpg" alt="image"/><br/>
                <img className="jo" src="https://m.media-amazon.com/images/I/716nrGjzInL.SX679.jpg" alt="image"/><br/>
                <img className="jo" src="https://m.media-amazon.com/images/I/71Hbd060gBL.SX679.jpg" alt="image"/><br/>
             
            </div>
    <div className="cartandcontent">
        <div className="content"> 
            <h2>Pure Source India Ceramic Clay Candle Operated Aroma Burner (Black; 9 Cm)</h2>
            <h3 className="stock">In Stock</h3>
            <div className="item-rating-and-price">
                <span>4.7(57)rating</span>
                <h4>Reviews</h4>
                <p className="attract">Limited Time deal</p>
                <p className="last-price">Old price: <span><s>$49</s></span></p>
                <p className="new-price">New price: <span>$49</span></p>
    
            </div>
            <ul style={{ listStyleType: 'disc' }}>

                <li>Colour	Black</li>
                <li>Material	Ceramic Clay</li>
                <li>Brand:	Pure Source India</li>
                <li>Product Dimensions:	9.5L x 9.5W x 9.5H Centimeters</li>
                <li>Finish Type:	Glossy</li>
                <li>Item Weight:	150 Grams</li>
                <li>Number of Pieces:	1</li>
                <li>Theme:	No Theme</li>
                <li>Item Diameter-Mounting Type:	3 Inches</li>
            </ul>
            
            <div className="item-details">
                <h3>About This Item</h3>
                <ul style={{ listStyleType: 'disc' }} className="itempara">

                    <li>Item: Ceramic Aroma Burner/Oil Diffuser Size 9.5 Cm / 3.75 inch About ( In the box - 1 Aroma Burner and 1 Tealight Candle )</li>
                    <li>The Aroma Burner Coming In This Pack is Suitable To Use with Any Aroma Oil, or Even With Camphore Too.</li>
                    <li>Easy to Use And Clean It For Reuse Again, It Can Use As Long As You Want,</li>
                    <li>Beautiful Gift in Any Occasion to Your Friend, Family, Father, Mother, Sister, Wife, Husband etc.</li>
                    <li> We always care to give our label best in the product in final pack, You can use it with any aroma oil, camphor, wax tad etc with this oil diffuser burner, or why not you gift this oil burner to your loved once</li>
                </ul><br/>

                <Link to="/Orders"><input type="image" className="cartbuy buynow"  alt="Login" src="./Buynowpngmain.png" /></Link>
               <Link to="/Cart"> <input type="image" className="cartbuy cart"  alt="Login" src="./cartpng.png" /></Link>
                
                
            </div> 
        </div>
       </div>
    </div>

<div className="similer-items">
<pre> <h2>         Simillar Products      </h2> </pre>

    <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/81pgtiJkH7L.AC_UL165_SR165,165.jpg"/>
    <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/717cjikei5L.AC_UL165_SR165,165.jpg"/>
    <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/61Fo2f1mv0L.AC_UL165_SR165,165.jpg"/> 
    <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/619EyuWC3bL.AC_UL165_SR165,165.jpg"/>
    <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/710RD3-a+mL.AC_UL165_SR165,165.jpg"/>
    <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/81yZ9G-VU6L.AC_UL165_SR165,165.jpg"/>
    <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/512mVSfM1AL.AC_UL165_SR165,165.jpg"/>
    <img className="similarimg" src="https://images-eu.ssl-images-amazon.com/images/I/61VS67GKroL.AC_UL165_SR165,165.jpg"/>
        
</div>
<br/>
<div className="reviews">
<br/> <pre><br/><h2 className='rev'> Reviews</h2></pre><br/>
<pre><p className="up">  Write a review . . .</p></pre><br/>
<textarea placeholder="Your Comment..." rows="2" cols="80"></textarea>
</div>
<Footer/>

        </div>
        
  );
};

export default Single;