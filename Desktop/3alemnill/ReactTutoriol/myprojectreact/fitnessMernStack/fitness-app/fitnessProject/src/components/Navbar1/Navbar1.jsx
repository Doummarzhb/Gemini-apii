import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import logo1 from '../images/logo1.png';
function Navbar1() {
  return (
    <nav className={styles.navbar}>
     	  <div className="logo">
    <img src={logo1} alt="Logo" />
  </div>
      <ul className={styles.navLinks}>
      <li><Link to="/signups" className={styles.navLink}><FaUserPlus className={styles.navIcon} /> Sign Up</Link></li>
        <li><Link to="/login" className={styles.navLink}><FaSignInAlt className={styles.navIcon} /> Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar1;
