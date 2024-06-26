import React from 'react';
import styles from './Contact.module.css';
import Navbar from '../Navbar';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Navbar/>
      <h1>Contact Us</h1>
      <div className={styles.contactGrid}>
        <div className={styles.contactItem}>
          <h2>Our Address</h2>
          <p className='abous'>123 Fitness St.</p>
          <p className='abous'>Gym City, Tripoli</p>
        </div>
        <div className={styles.contactItem}>
          <h2>Email Us</h2>
          <p className='abous'>info@gym.com</p>
        </div>
        <div className={styles.contactItem}>
          <h2>Call Us</h2>
          <p className='abous'>71612665</p>
        </div>
    
      </div>
    </div>
  );
}

export default Contact;
