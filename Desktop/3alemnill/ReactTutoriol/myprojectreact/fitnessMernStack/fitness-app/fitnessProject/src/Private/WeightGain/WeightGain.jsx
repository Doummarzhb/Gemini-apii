import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
import styles from './WeightGainPrograms.module.css';

const WeightGain = () => {
  const [programs, setPrograms] = useState([]);
  const [newProgram, setNewProgram] = useState({ title: '', description: '', duration: '' });
  const [fullName, setFullName] = useState('');

  const saveProgramsToLocalStorage = (programs) => {
    localStorage.setItem('weightGainPrograms', JSON.stringify(programs));
  };

  const getProgramsFromLocalStorage = () => {
    const savedPrograms = localStorage.getItem('weightGainPrograms');
    return savedPrograms ? JSON.parse(savedPrograms) : [];
  };

  useEffect(() => {
    const savedPrograms = getProgramsFromLocalStorage();
    if (savedPrograms.length) {
      setPrograms(savedPrograms);
    } else {
      const fetchPrograms = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/weightgain/programs');
          setPrograms(response.data);
          saveProgramsToLocalStorage(response.data);
        } catch (error) {
          console.error('Error fetching programs:', error);
        }
      };

      fetchPrograms();
    }
  }, []);

  const handleChange = (e) => {
    setNewProgram({ ...newProgram, [e.target.name]: e.target.value });
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/weightgain/programs/add', {
        ...newProgram,
        fullName,
      });
      const updatedPrograms = [...programs, response.data];
      setPrograms(updatedPrograms);
      saveProgramsToLocalStorage(updatedPrograms);
      setNewProgram({ title: '', description: '', duration: '' });
      setFullName('');

      alert('Weight gain program added successfully!');
    } catch (error) {
      console.error('Error adding program:', error);
      alert('Error adding program. Please try again.');
    }
  };

  const handleEdit = (program) => {
    // Placeholder for edit logic
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/weightgain/programs/${id}`);
      const updatedPrograms = programs.filter((program) => program._id !== id);
      setPrograms(updatedPrograms);
      saveProgramsToLocalStorage(updatedPrograms);
      alert('Program deleted successfully!');
    } catch (error) {
      console.error('Error deleting program:', error);
      alert('Error deleting program. Please try again.');
    }
  };

  return (
    <div className={styles.weightGainContainer}>
      <h2 className={styles.heading}>Weight Gain Programs</h2>
      <div className={styles.programs}>
        {programs.map((program) => (
          <div key={program._id} className={styles.card}>
            <div className={styles.cardContent}>
              <h3>{program.fullName}</h3>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <p>Duration: {program.duration} months</p>
            </div>
            <div className={styles.cardActions}>
              <button className={styles.editButton} onClick={() => handleEdit(program)}>
                <MdEdit /> Edit
              </button>
              <button className={styles.deleteButton} onClick={() => handleDelete(program._id)}>
                <MdDelete /> Delete
              </button>
              <button className={styles.viewButton}>
                <MdVisibility /> View
              </button>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.addProgramForm}>
        <h4>Add New Weight Gain Program</h4>
        <input
          type="text"
          name="fullName"
          value={fullName}
          onChange={handleFullNameChange}
          placeholder="Full Name"
          className={styles.inputField}
          required
        />
        <input
          type="text"
          name="title"
          value={newProgram.title}
          onChange={handleChange}
          placeholder="Title"
          className={styles.inputField}
          required
        />
        <textarea
          name="description"
          value={newProgram.description}
          onChange={handleChange}
          placeholder="Description"
          className={styles.textArea}
          rows={4}
          required
        />
        <input
          type="number"
          name="duration"
          value={newProgram.duration}
          onChange={handleChange}
          placeholder="Duration (months)"
          className={styles.inputField}
          required
        />
        <button type="submit" className={styles.addButton}>
          <MdAdd /> Add Program
        </button>
      </form>
    </div>
  );
};

export default WeightGain;
