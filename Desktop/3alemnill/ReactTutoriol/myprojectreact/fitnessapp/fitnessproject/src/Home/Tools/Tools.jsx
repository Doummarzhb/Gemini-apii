import React from 'react';
import styles from './Tools.module.css';

function Tools() {
  return (
    <div className={styles.toolsContainer}>
      <h1 className={styles.title}>Gym Tools</h1>
      <div className={styles.gridContainer}>
        <div className={styles.toolItem}>
          <button className={styles.toolButton}>Treadmill</button>
          <p className={styles.toolDescription}>A treadmill is a device generally for walking, running, or climbing while staying in the same place</p>
        </div>
        <div className={styles.toolItem}>
          <button className={styles.toolButton}>Stationary Bike</button>
          <p className={styles.toolDescription}>A stationary bike (or exercise bike) is a device used for exercise that includes a saddle, pedals, and handlebars.</p>
        </div>
        <div className={styles.toolItem}>
          <button className={styles.toolButton}>Dumbbells</button>
          <p className={styles.toolDescription}>Dumbbells are hand weights used in weight training, comprising a handle with a weight at each end.</p>
        </div>
        <div className={styles.toolItem}>
          <button className={styles.toolButton}>Barbells:</button>
          <p className={styles.toolDescription}>Barbells are long metal bars used in weightlifting. They have weights attached to each end and are commonly used for exercises like squats, bench presses, and deadlifts. Barbells allow for versatile and challenging workouts, targeting multiple muscle groups simultaneously.</p>
        </div>
      </div>
    </div>
  );
}

export default Tools;
