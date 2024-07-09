import React from 'react';
// import { FaDumbbell, FaRunning, FaBicycle, FaHeartbeat } from 'react-icons/fa';
import styles from './Tools.module.css';

function Tools() {
  const toolsData = [
    {
      name: 'Dumbbells',
      description: 'Strength training with dumbbells improves muscle strength and endurance.',
      // icon: <FaDumbbell className={styles.toolicon} />,
      image: 'https://th.bing.com/th/id/OIP.KWwKTm_vRnNzQtCNE5sHtQHaEK?rs=1&pid=ImgDetMain', 
    },
    {
      name: 'Running Shoes',
      description: 'Running shoes provide cushioning and support for jogging and running activities.',
      // icon: <FaRunning className={styles.toolicon} />,
      image: 'https://th.bing.com/th/id/OIP.p2OYUUhkPmRTqL22LSW20QHaEc?rs=1&pid=ImgDetMain' 
    },
    {
      name: 'Bicycle',
      description: 'Cycling promotes cardiovascular fitness and strengthens leg muscles.',
      // icon: <FaBicycle className={styles.toolicon} />,
      image: 'https://th.bing.com/th/id/R.1a440213325a187431fcf05e1ad98328?rik=qZS3HTpJ1mUk%2fw&pid=ImgRaw&r=0',  
    },
    {
      name: 'Heart Rate Monitor',
      description: 'A heart rate monitor helps track heart rate during workouts for effective training.',
      // icon: <FaHeartbeat className={styles.toolicon} />,
      image: 'https://th.bing.com/th/id/OIP.kryeAuNmOYnPR8_c0bkZOwAAAA?rs=1&pid=ImgDetMain', 
    },
    {
      name: 'Swimming Gear',
      description: 'Swimming gear enhances performance and comfort in water sports.',
      // icon: <FaHeartbeat className={styles.toolicon} />,
      image: 'https://th.bing.com/th/id/OIP.UZVW3uo9iJroScvxJc4QSQHaEt?rs=1&pid=ImgDetMain',  
    },
    {
      name: 'Yoga Mat',
      description: 'A yoga mat provides a stable surface for various yoga poses.',
      // icon: <FaHeartbeat className={styles.toolicon} />,
      image: 'https://th.bing.com/th/id/R.2cf216c0f3bd68b3eebdcaf2065df5be?rik=%2bFwdLRSH39Nuow&pid=ImgRaw&r=0',  
    },
    {
      name: 'Hiking Boots',
      description: 'Hiking boots offer support and protection for outdoor adventures.',
      // icon: <FaHeartbeat className={styles.toolicon} />,
      image: 'https://th.bing.com/th/id/OIP.bHyjBOzkvgeQzStZQQo8GAHaD2?rs=1&pid=ImgDetMain', 
    },
    {
      name: 'Ski Equipment',
      description: 'Ski equipment is essential for safe and enjoyable skiing experiences.',
      // icon: <FaHeartbeat className={styles.toolicon} />,
      image: 'https://i2.wp.com/coolhunting.com/wp-content/uploads/2019/01/ski-gear-2019-hero.jpg?fit=1200%2C858&ssl=1',  
    },
    {
      name: 'Boxing Gloves',
      description: 'Boxing gloves protect your hands during boxing training and competitions.',
      // icon: <FaHeartbeat className={styles.toolicon} />, 
      image: 'https://th.bing.com/th/id/OIP.4fZ_-PSFN5S5O3M8cZQ83AHaEo?rs=1&pid=ImgDetMain', 
    },
    {
      name: 'Basketball',
      description: 'Basketball is great for improving coordination and cardiovascular fitness.',
      // icon: <FaBasketballBall className={styles.toolicon} />,
      image: 'https://th.bing.com/th/id/OIP.E_jEbGxduWFUu4ZIzQet8wHaE8?rs=1&pid=ImgDetMain', 
    },
    {
      name: 'Golf Equipment',
      description: 'Golf equipment includes clubs, balls, and bags for playing golf.',
      // icon: <FaGolfBall className={styles.toolicon} />,
      image: 'https://th.bing.com/th/id/OIP.kj_sniBYV5_fD-qm1nD0FQHaE8?rs=1&pid=ImgDetMain',  
    },
    {
      name: 'Weightlifting Equipment',
      description: 'Weightlifting equipment includes barbells, benches, and racks for strength training.',
      // icon: <FaWeight className={styles.toolicon} />,
      image: 'https://th.bing.com/th/id/OIP.cWLw9qP-m9vQg8UE3GypcgAAAA?rs=1&pid=ImgDetMain', 
    },
  ];

  return (
    <div className={styles.toolscontainer}>
      <h4>Tools of Fitness</h4>
      <div className={styles.toolsgrid}>
        {toolsData.map((tool, index) => (
          <div key={index} className={styles.toolitem}>
            {tool.icon}
            <img src={tool.image} alt={tool.name} className={styles.toolimage} />
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
