import React from 'react';
import styles from './about.css'; // Import CSS module
import class2Image from '../images/class-1.jpg';

function About() {
  return (
    <div className='ab'> 
    <div className='abouts'>
   <h2>ABOUT US</h2>
   <section className='parag'>
   <img src={class2Image} alt="class" className={styles.classImg12} />
    <div className='papa'>
      <p>Welcome to our fitness community dedicated to transforming lives through holistic fitness solutions.
         At our core, we believe in empowering individuals 
         to achieve their health and fitness goals through expert guidance and personalized training programs.
         Join us on this journey to a healthier, stronger you!</p>
    </div>
    
   </section>
   
    </div>
    </div>
  );
}

export default About;
