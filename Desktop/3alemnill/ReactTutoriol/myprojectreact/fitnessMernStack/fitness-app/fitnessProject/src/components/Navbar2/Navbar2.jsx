import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar2.module.css';
import { FaCalendarAlt, FaTools, FaUserAlt, FaUtensils,FaTasks } from 'react-icons/fa';
import logo1 from '../images/logo1.png';
const Navbar2 = ({ isAdmin }) => {
  
  return (
    <nav className={styles.navbars}> 
      <div className="logo">
    <img src={logo1} alt="Logo" />
  </div>
      <ul className={styles.navLinkss}>
        <li><Link to="/reservation" className={styles.navLink}><FaCalendarAlt className={styles.navIcon}/>Reservation</Link></li>
        <li><Link to="/tools" className={styles.navLink}> <FaTools className={styles.navIcon}/>Tools</Link></li>
        <li><Link to="/nutrition" className={styles.navLink}><FaUtensils className={styles.navIcon}/>Nutrition</Link></li>
        <li><Link to="/managment" className={styles.navLink}><FaTasks className={styles.icon}/>Managment</Link></li>
        {/* {isAdmin && <li><Link to="/admin">Admin Dashboard</Link></li>} */}
        <li><Link to="/myaccount" className={styles.navLink}> <FaUserAlt className={styles.navIcon}/>My Account</Link></li>


      </ul>
    </nav>
  );
}

export default Navbar2;
 