import React from 'react';
import './base.css';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <div>
        <Navbar/>
        
    {/* <!-- Categories Section with Circular Images --> */}
<section className="categories">
    <div className="categoryy category-box">
        <Link to="/Candle">
            <img src="https://m.media-amazon.com/images/I/81qRuzYQAwL.SX679.jpg" alt="/"/>
            <p>Candle Making</p>
        </Link>
        
    </div>
    <div className="categoryy category-box"> 
        <a href="clothing.html">
            <img src="https://i.etsystatic.com/42228092/c/1851/1470/26/199/il/fc6acf/6224531703/il_340x270.6224531703_azpx.jpg" alt="Paintings"/>
            <p>Paintings</p>
        </a>
        
    </div>
    <div className="categoryy category-box">
        <a href="home-living.html">
            <img src="https://i.etsystatic.com/18961194/c/1984/1577/262/135/il/115243/4776017719/il_340x270.4776017719_e0me.jpg" alt="Furniture"/>
        <p className="starman">Furniture</p>
        </a>
        
    </div>
    <div className="categoryy category-box">
        <a href="wedding-party.html">
            <img src="https://i.etsystatic.com/49207736/c/2250/1786/0/561/il/3a4505/6028171063/il_340x270.6028171063_q1qn.jpg" alt="Room Decor"/>
            <p className="starman">Room Decor</p></a>
    </div>
    <div className="categoryy category-box">
        <a href="toys-entertainment.html">
            <img src="https://i.etsystatic.com/44863415/r/il/c9eeca/5969111526/il_794xN.5969111526_3bpa.jpg" alt="Services"/>
        <p className="starman">Services</p></a>
            
    </div>
</section>

<section className="banners">
    <div className="banner"><a href="vyg.html" target="_blank">
      <img src="1.png" alt="Banner 1" className='banana'/></a>
      <h2>New Arrival</h2>
      <p>Shop exclusive brand new items</p>
    </div>
    <div className="banner ">
        <a href="craftysellers.html" target="_blank">
      <img src="2.png" alt="Banner 2" className='banana'/></a>
      <h2>Special Sale</h2>
      <p>Cool Text</p>

    </div>
    
  </section>

  
<div className="shopsection">
        <div className="bigbox1 boxx">
            <p className="textinboxxx">Revamp Your Home In Style</p>
            <a href="homedecor.html" target="_blank">
                <img src="https://m.media-amazon.com/images/I/818yDyo4ciL._AC_UL480_FMwebp_QL65_.jpg" alt="filler" className="boxximg"/>
            
            <button className="boxx-button">Shop Home Decor</button></a>
        </div>
        <div className="bigbox1 boxx">
            <p className="textinboxxx">Upto 30% off in Pottery</p>
            <a href="homedecor.html" target="_blank">
                <img src="https://m.media-amazon.com/images/I/71j8by4bU0L._AC_UL480_FMwebp_QL65_.jpg"alt="filler" className="boxximg"/>
            
            <button className="boxx-button">Shop Pots</button></a>
        </div>
        <div className="bigbox1 boxx">
            <p className="textinboxxx">Discover new Jwellery</p>
            <a href="homedecor.html" target="_blank">
                <img src="https://i.etsystatic.com/28099081/r/il/cd842a/2985970420/il_340x270.2985970420_a0sb.jpg" alt="filler"className="boxximg"/>
            
            <button className="boxx-button">Shop Handmade Jwellery</button></a>
        </div>
        <div className="bigbox1 boxx">
            <p className="textinboxxx">Lokking for Custom armours?</p>
            <a href="homedecor.html" target="_blank">
                <img src="https://i.etsystatic.com/35882827/r/il/cd5f18/5362074699/il_600x600.5362074699_9fh5.jpg" alt="filler"className="boxximg"/>
            
            <button className="boxx-button">Browse Custom Costumes </button></a>
        </div>
        

    </div>
    <Footer/>
    

    

  </div>
  );
};

export default Homepage;