import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={ images.gericht } alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><Link to="/bar-home">Bar</Link></li>
        <li className="p__opensans">
          <div className="app__navbar-dropdown">
            <li className="p__opensans">Pages</li>
            <div className="app__navbar-dropdown-content">
              <li className="p__opensans"><Link to="/contact-us">Contact Us</Link></li>
              <li className="p__opensans"><Link to="/about-us">About Us</Link></li>
              <li className="p__opensans"><Link to="/services">Services</Link></li>
              <li className="p__opensans"><Link to="/faq">FAQ</Link></li>
              <li className="p__opensans"><Link to="/comming-soon">Comming Soon</Link></li>
              <li className="p__opensans"><Link to="/error">404</Link></li>
            </div>
          </div>
        </li>
        <li className="p__opensans"><Link to="/chefs">Chefs</Link></li>
        <li className="p__opensans"><Link to="/blog">Blog</Link></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      {/* for mobiles */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={ 27 }
          onClick={ () => setToggleMenu(true) }
        />
        {
          toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={ 27 }
                className="overlay__close"
                color="#fff"
                onClick={ () => setToggleMenu(false) }
              />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#awards">Awards</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
              </ul>
            </div>
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;
