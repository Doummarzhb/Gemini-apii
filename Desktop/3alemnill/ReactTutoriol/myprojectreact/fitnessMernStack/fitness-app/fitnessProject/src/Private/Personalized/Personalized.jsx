import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Personalized.module.css';

function Personalized() {
  const [programs, setPrograms] = useState([]);
  const [form, setForm] = useState({
    name: '',
    personName: '',
    gender: '',
    schedule: ['', '', '', '', '', '', ''],
  });
  const [editingProgram, setEditingProgram] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/programs');
        setPrograms(response.data);
      } catch (error) {
        console.error('Error fetching programs:', error);
      }
    };

    fetchPrograms();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleScheduleChange = (index, value) => {
    const newSchedule = [...form.schedule];
    newSchedule[index] = value;
    setForm({
      ...form,
      schedule: newSchedule,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingProgram) {
      try {
        const response = await axios.put(`http://localhost:5000/api/programs/${editingProgram._id}`, form);
        setPrograms(programs.map((program) => (program._id === editingProgram._id ? response.data : program)));
        setEditingProgram(null);
      } catch (error) {
        console.error('Error editing program:', error);
      }
    } else {
      try {
        const response = await axios.post('http://localhost:5000/api/programs', form);
        setPrograms([...programs, response.data]);
      } catch (error) {
        console.error('Error adding program:', error);
      }
    }
    setForm({
      name: '',
      personName: '',
      gender: '',
      schedule: ['', '', '', '', '', '', ''],
    });
  };

  const handleEdit = (program) => {
    setForm({
      name: program.name,
      personName: program.personName,
      gender: program.gender,
      schedule: program.schedule,
    });
    setEditingProgram(program);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/programs/${id}`);
      setPrograms(programs.filter((program) => program._id !== id));
    } catch (error) {
      console.error('Error deleting program:', error);
    }
  };

  return (
    <div className={styles.containersz}>
      <h4>Personalized Workout Programs</h4>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroupes}>
          <label>
            Program Name:
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
        </div>
        <div className={styles.formGroupes}>
          <label>
            Person Name:
            <input type="text" name="personName" value={form.personName} onChange={handleChange} required />
          </label>
        </div>
        <div className={styles.formGroupsss}>
          <label>
            Gender:
            <select name="gender" className={styles.select} value={form.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div className={styles.formGroupsss}>
          <label>
            Schedule:
            {form.schedule.map((day, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder={`Day ${index + 1}`}
                  value={day}
                  onChange={(e) => handleScheduleChange(index, e.target.value)}
                  className={styles.input}
                />
              </div>
            ))}
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>{editingProgram ? 'Edit Program' : 'Add Program'}</button>
      </form>
      <h4>Existing Programs</h4>
      <ul className={styles.programList}>
        {programs.map((program) => (
          <li key={program._id} className={styles.programItem}>
            <h3>{program.name}</h3>
            <p>Person Name: {program.personName}</p>
            <p>Gender: {program.gender}</p>
            <p>Schedule: {program.schedule.join(', ')}</p>
            <button onClick={() => handleEdit(program)}>Edit</button>
            <button onClick={() => handleDelete(program._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Personalized;
