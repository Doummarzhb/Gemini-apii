import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <div className={styles.contactGrid}>
        <div className={styles.contactItem}>
          <h2>Our Address</h2>
          <p>123 Fitness St.</p>
          <p>Gym City, Tripoli</p>
        </div>
        <div className={styles.contactItem}>
          <h2>Email Us</h2>
          <p>info@gym.com</p>
        </div>
        <div className={styles.contactItem}>
          <h2>Call Us</h2>
          <p>71612665</p>
        </div>
    
      </div>
    </div>
  );
}

export default Contact;
