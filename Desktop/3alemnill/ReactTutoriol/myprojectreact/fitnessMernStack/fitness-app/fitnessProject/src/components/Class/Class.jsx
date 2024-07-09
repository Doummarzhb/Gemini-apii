import React from 'react';
import styles from './Class.module.css'
// import styles from '../JoinUs/JoinUs'
import class1Image from '../images/class-1.jpg';
// import class2Image from 'path/to/assets/class-2.jpg';

function Class() {
  return (
    <div className='name'> 
    <section className={styles.sectionContainere}>
      <div className={styles.classImagee}>
        <span className={styles.bgBlure}></span>
        <img src={class1Image} alt="class" className={styles.classImg1} />
        
      </div>
      <div className={styles.classContente}>
        <h2 className={styles.sectionHeaderrs}>THE CLASS YOU WILL GET HERE</h2>
        <p>
          Led by our team of expert and motivational instructors, "The Class You
          Will Get Here" is a high-energy, results-driven session that combines
          a perfect blend of cardio, strength training, and functional
          exercises. Each class is carefully curated to keep you engaged and
          challenged, ensuring you never hit a plateau in your fitness
          endeavors.
        </p>
        <button className={styles.btnn}>Book A Class</button>
      </div>
    </section>
    </div>
  );
}

export default Class;
