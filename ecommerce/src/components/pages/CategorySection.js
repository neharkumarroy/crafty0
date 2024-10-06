import React from 'react';
import './CategorySection.css';
import { Link } from 'react-router-dom';
import PaintingsItems from './PaintingsItems';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const categories = [
  { name: 'Candle Making', image: 'https://m.media-amazon.com/images/I/81qRuzYQAwL.SX679.jpg', link: '/candle' },
  { name: 'Paintings', image: 'https://i.etsystatic.com/30785973/r/il/88379c/5088195021/il_1140xN.5088195021_e4b9.jpg', link: '/PaintingsItems' },
  { name: 'Knitted Items', image: 'https://images.pexels.com/photos/19479547/pexels-photo-19479547/free-photo-of-knitting-scarf-in-close-up-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/knitted-items' },
  { name: 'Crocheted Items', image: 'https://i.etsystatic.com/41007922/r/il/96ce2f/4978237613/il_1140xN.4978237613_26yv.jpg', link: '/crocheted-items' },
  { name: 'Sewn Items', image: 'https://i.etsystatic.com/5754533/r/il/8894a2/5521162072/il_1140xN.5521162072_plpz.jpg', link: '/sewn-items' },
  { name: 'Embroidery', image: 'https://i.etsystatic.com/29939306/r/il/43f48f/4790454723/il_1140xN.4790454723_pvli.jpg', link: '/embroidery' },
  { name: 'Quilting', image: 'https://i.etsystatic.com/26563217/r/il/225bda/5583396367/il_1140xN.5583396367_leeu.jpg', link: '/quilting' },
  { name: 'Beaded Jewelry', image: 'https://i.etsystatic.com/21419324/r/il/9fd1cb/3992468028/il_1140xN.3992468028_g7u1.jpg', link: '/beaded-jewelry' },
  { name: 'Pottery', image: 'https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/pottery' },
  { name: 'Woodcrafts', image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/EI/RG/FW/32860688/ebony-woodcrafts-wooden-laminated-tray-engraving-large-18x12x2-polished-1000x1000.jpeg', link: '/woodcrafts' },
  { name: 'Metal Works', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/17bb2330259249.561ea073d778d.jpg', link: '/metal-works' },
  { name: 'Glass Art', image: 'https://5.imimg.com/data5/UY/VL/VH/SELLER-89196027/design-glass-art-flooring-carpet-1000x1000.jpg', link: '/glass-art' },
];

const CategorySection = () => {
  return (
    <div>
    <Navbar/>
      <div><h1 className="sbc">Categories</h1><br /></div>
      <div className="category-section">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            {/* Wrap the image and title with a Link component */}
            <Link to={category.link}>
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
      </div>
  );
};

export default CategorySection;
