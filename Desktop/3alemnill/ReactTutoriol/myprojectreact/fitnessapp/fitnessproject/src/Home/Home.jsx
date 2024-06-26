import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hom.module.css';  
import { Link } from 'react-router-dom';
function Home() {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.homeContainer}>
         <nav className={styles.nav}>
      <ul className={styles.navLi}>
        <li className={styles.navIt}>
          <Link to="/admin" className={styles.navLi}>Admin</Link>
        </li>
      </ul>
    </nav>
      <h1 className={styles.homeText}>Welcome to the Home Page!</h1>
      {formData && (
        <div className={styles.welcomeMessage}>
          <p>Hello, {formData.name}!</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
      <div className={styles.imagesContainer}>
        <div className={styles.imageItem}>
          <img src="/src/components/images/banner.png" alt="Description 1" className={styles.image} />
          <p className={styles.paragraph1}>Tools for gym </p>
          <button onClick={() => handleNavigation('/tools')} className={styles.button}>Tools</button>
        </div>
        <div className={styles.imageItem}>
          <img src="/src/components/images/banner.png" alt="Description 2" className={styles.image} />
          <p className={styles.paragraph1}>Reservation for People</p>
          <button onClick={() => handleNavigation('/reservation')} className={styles.button}>Reservation</button>
        </div>
        <div className={styles.imageItem}>
          <img src="/src/components/images/banner.png" alt="Description 3" className={styles.image} />
          <p className={styles.paragraph1}>Shopping cart  for GYM</p>
          <button onClick={() => handleNavigation('/shopping')} className={styles.button}>Shopping </button>
        </div>
        <div className={styles.imageItem}>
          <img src="/src/components/images/banner.png" alt="Description 3" className={styles.image} />
          <p className={styles.paragraph1}>Nutrition for person</p>
          <button onClick={() => handleNavigation('/nutrition')} className={styles.button}>Nutrition  </button>
        </div>
        {/* <button onClick={() => handleNavigation('/admin')} className={styles.button}>Admin</button> */}

      </div>
    </div>
  );
}

export default Home;
