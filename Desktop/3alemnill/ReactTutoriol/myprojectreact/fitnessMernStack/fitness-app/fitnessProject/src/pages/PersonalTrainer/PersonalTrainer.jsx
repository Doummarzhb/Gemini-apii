import React from "react";
import styles from "./PersonalTrainer.module.css";
import {
  FaDumbbell,
  FaAppleAlt,
  FaHeartbeat,
  FaChartLine,
  FaRunning,
  FaWeight,
  FaDrumstickBite,
  FaUsers
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdFitnessCenter } from 'react-icons/md';

const PersonalTrainer = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  };
  return (
    <div className={styles.personalTrainer}>
      {/* <h2>Personal Trainer</h2> */}
      <div className={styles.gridContainer}>
        <div
          className={styles.gridItem}
          onClick={() => handleNavigation("/trainingsession")}
        >
          <h3>Training Sessions</h3>
          <p>
            Book your personalized training sessions with our experienced
            trainers.
          </p>
          <FaDumbbell className={styles.icon} />
        </div>
        <div
          className={styles.gridItem}
          onClick={() => handleNavigation("/nutritionplan")}
        >
          <h3>Nutrition Plans</h3>
          <p>Get customized nutrition plans tailored to your fitness goals.</p>
          <FaAppleAlt className={styles.icon} />
        </div>
        <div
          className={styles.gridItem}
          onClick={() => handleNavigation("/workoudprograms")}
        >
          <h3>Workout Programs</h3>
          <p>
            Choose from a variety of workout programs designed for all fitness
            levels.
          </p>
          <FaHeartbeat className={styles.icon} />
        </div>
        <div
          className={styles.gridItem}
          onClick={() => handleNavigation("/progresstraicking")}
        >
          <h3>Progress Tracking</h3>
          <p>Track your progress and achieve your fitness milestones.</p>
          <FaChartLine className={styles.icon} />
        </div>

        <div
          className={styles.gridItem}
          onClick={() => handleNavigation("/fatloss")}
        >
          <h3>Fat Loss</h3>
          <p>
            Through a combination of workout routines and expert guidance, we'll
            empower you to reach your goals.
          </p>
          <FaRunning className={styles.icon} />
        </div>
        <div
          className={styles.gridItem}
          onClick={() => handleNavigation("/weightgain")}
        >
          <h3>Weight Gain</h3>
          <p>
            Designed for individuals, our program offers an effective approach
            to gaining weight in a sustainable manner.
          </p>
          <FaWeight className={styles.icon} />
        </div>
        <div
          className={styles.gridItem}
          onClick={() => handleNavigation("/physicalsession")}
        >
          <h3>Physical Sessions</h3>
          <p>
            It encompasses a range of activities that improve health, strength,
            flexibility.
          </p>
          <FaHeartbeat className={styles.icon} />
        </div>
        <div
          className={styles.gridItem}
          onClick={() => handleNavigation("/proteinpoweder")}
        >
          <h3>Protein Powder</h3>
          <p>Track your progress and achieve your fitness milestones.</p>
          <FaDrumstickBite className={styles.icon} />
        </div>
        <div
          className={styles.gridItem}
          onClick={() => handleNavigation("/community")}
        >
          <h3> Community </h3>
          <p> Community and Social Features</p>
          <FaUsers className={styles.icon} />
        </div>
        <div
          className={styles.gridItem}
          onClick={() => handleNavigation("/personalized")}
        >
          <h3>Personalized Workout Programs</h3>
          <p>Track your progress and achieve your fitness milestones.</p>
          <MdFitnessCenter className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default PersonalTrainer;
