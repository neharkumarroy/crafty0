import React from 'react';
import './navbarstyle.css';
import App from '../../App';
import CategorySection from '../pages/CategorySection';

import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <header>
         <nav className="navbar ">
            <div className="logo border12">
            <Link to="/">
             <img src="CRAFTY.png" className="mlogo" alt="Logo 1" /></Link>
            
            </div>
            
            {/* <!-- categories  --> */}
            <div className="cata border12"><Link to="/CategorySection">
                
                <img src="options-lines.png"  className='navicons' alt='catagories'/>
                 
                </Link>
            </div>
            {/* <!-- search --> */}
            <div className="bgr">
                <input type="search" className="bgl" placeholder="Search anything..."/>
                <div className="searchicon">
                    <button type="submit" className="bgl">Search</button>
                </div>
             </div>
             {/* <!-- the deliver to thing --> */}
            <div className="nav-address">
                <p className="add-deliver">Silliguri</p>
                <div className="addressicon">
               <a href=''> <img src="location.png"  className='navicons' alt='location'/> </a>
                 </div>
            </div>
             {/* <!-- other icons  --> */}
               <div className="profileicon border12"><Link to="/Login">
                
                <img src="profile.png"  className='navicons' alt=''/> </Link>  
                
               </div>
               <div className="kartlogo border12">
                <Link to="/Cart">
                <img src="cart.png"  className='navicons' alt=''/></Link>
               </div>

               {/* <!-- seller things --> */}
               <div className="plus-icon border12">
                <a href="seller.html" target="_blank">
                <img src="upload.png"  className='navicons' alt=''/>
                </a>
               </div>
        </nav>
        </header>
        </div>

  );
};

  export default Navbar;