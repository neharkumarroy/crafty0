import React from 'react';
import './paintingpage.css'; // Import your CSS styles
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';


const PaintingsItems = () => {
  const items = [
    {
      img: 'https://m.media-amazon.com/images/I/91Vfv64jp-L._SX522_.jpg',
      title: 'Autumn Forest Nature',
      price: '$149.99',
      rating: '⭐ 4.8',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71cECvM528L._SX522_.jpg',
      title: 'Radha Krishna, Traditional Art',
      price: '$129.99',
      rating: '⭐ 4.7',
    },
    {
      img: 'https://images-cdn.ubuy.co.in/634f587f9f400113f6405c69-peacock-hand-art-oil-painted-animal.jpg',
      title: 'Blue Peacock King',
      price: '$99.99',
      rating: '⭐ 4.6',
    },
    {
      img: 'https://as1.ftcdn.net/v2/jpg/02/73/22/74/1000_F_273227473_N0WRQuX3uZCJJxlHKYZF44uaJAkh2xLG.jpg',
      title: '“Fluorite” - oil painting',
      price: '$199.99',
      rating: '⭐ 4.9',
    },
    {
      img: 'https://i.etsystatic.com/5312870/r/il/300ef0/1185533356/il_1140xN.1185533356_i5n8.jpg',
      title: 'tree Paintings, Pink wall art',
      price: '$159.99',
      rating: '⭐ 4.7',
    },
    {
      img: 'https://i.etsystatic.com/34102148/r/il/f2f2ec/3700106727/il_1140xN.3700106727_pck8.jpg',
      title: 'Sunset Painting Landscape',
      price: '$249.99',
      rating: '⭐ 4.9',
    },
    {
      img: 'https://i.etsystatic.com/37438148/r/il/eb22fb/5905671481/il_1140xN.5905671481_g7r5.jpg',
      title: 'A Kind Starry Night Painting',
      price: '$49.99',
      rating: '⭐ 4.5',
    },
    {
      img: 'https://artfiles.alphacoders.com/115/115532.jpg',
      title: 'JJBA art',
      price: '$89.99',
      rating: '⭐ 4.6',
    },
  ];

  return (
    <div>
      <Navbar/>
      <div id="sbc">
        <h1 style={{ color: 'rgb(255, 255, 255)' }}>PAINTINGS</h1>
      </div>

      <div className="category-section">
        {items.map((item, index) => (
          <div className="category" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <span className="price">{item.price}</span>
            <span className="rating">{item.rating}</span>
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
};

const App = () => {
  return <PaintingsItems />; // Render the PaintingsItems component
};

export default PaintingsItems;
