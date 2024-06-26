// import React from 'react'
// // import  styles from "./About.module.css"
// import { useNavigate } from 'react-router-dom';
// function About() {
//   return (
//     // const navigate = useNavigate();  
//     // navigate('/header');
//     // <div className={styles.aboutContainer}>
//       <div>
        
//     </div>
//   );
// }
 

// export default About
import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h2>About Us</h2>
      <p>
      Fitness means different things to different people and Health has something for everyone,
       whether you're just getting started with a workout routine or have been training 
      since before TikTok was a thing. Get our latest expert moves, pro-tips, and recommendations for who to follow.
      </p>
      <p>
        Sed at diam vel justo molestie vestibulum. Proin dapibus turpis vel
        justo hendrerit auctor. Morbi ac turpis malesuada, feugiat urna ac,
        fermentum ex. Sed eleifend nec leo nec suscipit.
      </p>
      
      <span className={styles.highlight}>Fitness is key to success!</span>
    </div>
  );
}

export default About;
