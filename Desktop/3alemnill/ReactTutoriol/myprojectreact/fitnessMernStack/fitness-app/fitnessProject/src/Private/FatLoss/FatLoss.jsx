import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./fatloss.module.css";
import { MdPersonAdd } from "react-icons/md";
const FatLoss = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  };

  const fatLossData = [
    {
      route: "/bodybuilding",
      icon: <FaDumbbell className={styles.icon} />,
      title: "Body Building",
      description:
        "Build strength and muscle mass with tailored workout routines and expert guidance.",
    },
    {
      route: "/fitnessprivate",
      icon: <FaDumbbell className={styles.icon} />,
      title: "Fitness",
      description:
        "Improve cardiovascular health and endurance with personalized fitness programs.",
    },
    {
      route: "/boxing",
      icon: <FaDumbbell className={styles.icon} />,
      title: "Boxing",
      description:
        "Enhance agility and coordination through boxing training sessions led by professionals.",
    },
    {
      route: "/crossfit",
      icon: <FaDumbbell className={styles.icon} />,
      title: "Crossfit",
      description:
        "Experience high-intensity workouts combining various functional movements.",
    },
  ];

  return (
    <div className={styles.fatLoss}>
      <h4>Fat-Loss</h4>
      <div className={styles.fat}>
        {fatLossData.map((item, index) => (
          <div key={index} className={styles.fato}>
            {item.icon} <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button
              className={styles.joinButtonn}
              onClick={() => handleNavigation(item.route)}
            >
              <MdPersonAdd />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FatLoss;
