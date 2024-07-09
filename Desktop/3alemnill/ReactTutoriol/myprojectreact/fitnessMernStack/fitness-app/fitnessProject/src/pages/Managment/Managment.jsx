import React from "react";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import styles from "./Management.module.css";

function Management() {
  return (
    <div className={styles.managementContainer}>
      <h2 className={styles.title}>Management</h2>
      <div className={styles.managementContent}>
        <div className={styles.managerDetails}>
          <div className={styles.detailItem}>
            <FaUser className={styles.detailIcon} />
            <div>
              <h3 className={styles.subtitle}>Coach Name</h3>
              <p className={styles.info}>John Doe</p>
            </div>
          </div>

          <div className={styles.detailItem}>
            <FaPhone className={styles.detailIcon} />
            <div>
              <h3 className={styles.subtitle}>Phone Number</h3>
              <p className={styles.info}>+1234567890</p>
            </div>
          </div>

          <div className={styles.detailItem}>
            <FaMapMarkerAlt className={styles.detailIcon} />
            <div>
              <h3 className={styles.subtitle}>Location</h3>
              <p className={styles.info}>Fitness Center, City Name</p>
            </div>
          </div>

          <div className={styles.detailItem}>
            <h3 className={styles.subtitle}>Social Media</h3>
            <ul className={styles.socialMediaLinks}>
              <li>
                <a href="#" className={styles.socialMediaLink}>
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialMediaLink}>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialMediaLink}>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Management;
