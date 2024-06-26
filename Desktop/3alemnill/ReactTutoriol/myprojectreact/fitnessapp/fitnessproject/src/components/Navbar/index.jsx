import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../images/logo.png';

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <RouterLink to="/" className="logo">
        <img src={logo} alt="Logo" />
      </RouterLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <ScrollLink to="header" smooth={true} duration={500}>
            Header
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="features" smooth={true} duration={500}>
            Features
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="offer" smooth={true} duration={500}>
            Offer
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="About" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
        <li>
          <RouterLink to="/signup">Sign Up</RouterLink>
        </li>
        <li>
          <RouterLink to="/home">Service</RouterLink>  
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
