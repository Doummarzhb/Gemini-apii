import React, { useState } from 'react';
import styles from './Tools.module.css';
import Navbar from '../../components/Navbar';

function Tools() {
  const [tools, setTools] = useState([
    {
      name: 'Treadmill',
      description: 'A treadmill is a device generally for walking, running, or climbing while staying in the same place.',
    },
    {
      name: 'Stationary Bike',
      description: 'A stationary bike (or exercise bike) is a device used for exercise that includes a saddle, pedals, and handlebars.',
    },
    {
      name: 'Dumbbells',
      description: 'Dumbbells are hand weights used in weight training, comprising a handle with a weight at each end.',
    },
    {
      name: 'Barbells',
      description: 'Barbells are long metal bars used in weightlifting. They have weights attached to each end and are commonly used for exercises like squats, bench presses, and deadlifts. Barbells allow for versatile and challenging workouts, targeting multiple muscle groups simultaneously.',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTool, setNewTool] = useState({ name: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTool((prevTool) => ({ ...prevTool, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTools((prevTools) => [newTool, ...prevTools]);
    setNewTool({ name: '', description: '' });
    setShowForm(false);
  };

  return (
    <div className={styles.toolsContainer}>
        <Navbar/>
      <h1 className={styles.title}>Gym Tools</h1>
      <button onClick={() => setShowForm(!showForm)} className={styles.addButton}>
        {showForm ? 'Cancel' : 'Add New Tool'}
      </button>
      {showForm && (
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Tool Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newTool.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newTool.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Add Tool
          </button>
        </form>
      )}
      <div className={styles.gridContainer}>
        {tools.map((tool, index) => (
          <div className={styles.toolItem} key={index}>
            <button className={styles.toolButton}>{tool.name}</button>
            <p className={styles.toolDescription}>{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools