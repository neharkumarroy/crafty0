import React from 'react';
import './paintingpage.css'; // Import your CSS styles
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const Candle = () => {
  
  const items = [
    {
      img: 'https://m.media-amazon.com/images/I/81qRuzYQAwL.SX679.jpg',
      title: 'Pure Source India Ceramic Clay Candle Operated Aroma Burner (Black; 9 Cm)',
      price: '$19.99',
      rating: '⭐ 4.8',
      link: '/single', // Link to the "Single" page
    },
    {
      img: 'https://m.media-amazon.com/images/I/816E1J4PGZL._SX679_.jpg',
      title: 'Pure Source India Ceramic Hand Type Aroma Diffuser Oil Burner with Lemon Grass Oil 10ml (Black)',
      price: '$29.99',
      rating: '⭐ 4.7',
      link: '/single',
    },
    {
      img: 'https://m.media-amazon.com/images/I/41f89A6U7uL._AC_UF480,480_SR480,480_.jpg',
      title: 'Mangalam Scent - Ceramic Diffuser Burner with tea light candle and camphor',
      price: '$49.99',
      rating: '⭐ 4.6',
      link: '/single',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71gMz+wWUvL._SX679_.jpg',
      title: 'Pure Source India Electric Aroma Diffuser Squire Shape Black Color Matte Finish and 10 ML Relaxing Aroma Oil',
      price: '$39.99',
      rating: '⭐ 4.9',
      link: '/single',
    },
    {
      img: 'https://m.media-amazon.com/images/I/81gSGF-BpzL._SX679_.jpg',
      title: 'Pure Source India Electric Oil Burner/Aroma Diffuser',
      price: '$99.99',
      rating: '⭐ 4.8',
      link: '/single',
    },
    {
      img: 'https://m.media-amazon.com/images/I/61VS67GKroL._SX679_.jpg',
      title: 'Pure Source India Stoneware Oil Diffuser (3 x 3 x 3.5 inch, Brown)',
      price: '$24.99',
      rating: '⭐ 4.9',
      link: '/single',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71nJohVzxPL._SX679_.jpg',
      title: 'Pure Source India Ceramic Aroma Oil Burner Diffuser (3.5 Inch Green-20 Pieces)',
      price: '$19.99',
      rating: '⭐ 4.7',
      link: '/single',
    },
    {
      img: 'https://m.media-amazon.com/images/I/31D9q-b9WWL.jpg',
      title: 'Pure Source India Hanging Aroma Burner',
      price: '$59.99',
      rating: '⭐ 4.8',
      link: '/single',
    },
  ];

  return (
    <div>
      <Navbar/>
      <div id="sbc">
        <h1 style={{ color: 'rgb(255, 255, 255)' }}>CANDLE MAKING ITEMS</h1>
      </div>

      <div className="category-section">
        {items.map((item, index) => (
          <div className="category" key={index}>
            {/* Wrap the image and title with a Link to navigate to the Single page */}
            <Link to={item.link}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
            <span className="price">{item.price}</span>
            <span className="rating">{item.rating}</span>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Candle;
