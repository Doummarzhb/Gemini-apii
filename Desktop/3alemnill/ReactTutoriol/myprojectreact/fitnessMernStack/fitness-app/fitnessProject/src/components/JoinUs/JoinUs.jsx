import React from "react";
import { RiUserStarFill, RiVidiconFill, RiBuildingLine } from "react-icons/ri";
import styles from "./JoinUs.module.css";

function JoinUs() {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionHeader}>WHY JOIN US ?</h2>
      <p className={styles.sectionSubheader}>
        Our diverse membership base creates a friendly and supportive
        atmosphere, where you can make friends and stay motivated.
      </p>
      <div className={styles.joinImage}>
        <img src="assets/join.jpg" alt="Join" />
        <div className={styles.joinGrid}>
          <div className={styles.joinCard}>
            <span>
              <RiUserStarFill />
            </span>
            <div className={styles.joinCardContent}>
              <h4>Personal Trainer</h4>
              <p>Unlock your potential with our expert Personal Trainers.</p>
            </div>
          </div>
          <div className={styles.joinCard}>
            <span>
              <RiVidiconFill />
            </span>
            <div className={styles.joinCardContent}>
              <h4>Practice Sessions</h4>
              <p>Elevate your fitness with practice sessions.</p>
            </div>
          </div>
          <div className={styles.joinCard}>
            <span>
              <RiBuildingLine />
            </span>
            <div className={styles.joinCardContent}>
              <h4>Good Management</h4>
              <p>Supportive management, for your fitness success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
