import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './workoud.module.css'
import { FaUser,FaClock ,FaVenusMars ,FaCalendarAlt ,} from 'react-icons/fa';
import {   MdAdd } from 'react-icons/md';
const WorkoutPrograms = () => {
  const [programs, setPrograms] = useState([]);
  const [newProgram, setNewProgram] = useState({
    fullName: '',
    age: '',
    gender: '',
    programType: '',
    hours: '',
    days: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPrograms, setShowPrograms] = useState(false);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/workoutPrograms/all');
      
        setPrograms(response.data);
      } catch (error) {
        console.error('Error fetching programs:', error);
        setError('Failed to fetch programs');
      }
    };

    fetchPrograms();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProgram({ ...newProgram, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/workoutPrograms/add', newProgram);
      setPrograms([...programs, response.data]);
      setMessage('Program added successfully!');
      setError('');
      setNewProgram({
        fullName: '',
        age: '',
        gender: '',
        programType: '',
        hours: '',
        days: '',
      });
    } catch (error) {
      console.error('Error adding program:', error);
      setError('Failed to add program');
      setMessage('');
    }
  };

  const handleShowPrograms = () => {
    setShowPrograms(!showPrograms);
  };

  return (
    <div className={style.one}>
      <h4>Workout Programs</h4>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroupsss}>
          <label><FaUser />Full Name:</label>
          <input
            type="text"
            name="fullName"
            className={style.input}
            value={newProgram.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroupsss}>
          <label><FaUser/>Age:</label>
          <input
            type="number"
            name="age"
            className={style.input}
            value={newProgram.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroupsss}>
          <label><FaClock/>Hours:</label>
          <input
            type="number"
            name="hours"
            className={style.input}
            value={newProgram.hours}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroupsss}>
          <label><FaUser/>Days:</label>
          <input
            type="text"
            name="days"
            className={style.input}
            value={newProgram.days}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroupsss}>
          <label><FaVenusMars/>Gender:</label>
          <select
            name="gender"
            value={newProgram.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className={style.formGroupsss}>
          <label><FaCalendarAlt/>Program Type:</label>
          <select
            name="programType"
            value={newProgram.programType}
            onChange={handleChange}
            required
          >
            <option value="">Select Program type </option>
            <option value="Fitness">Fitness</option>
            <option value="Bicycle">Bicycle</option>
            <option value="Boxing">Boxing</option>
            <option value="CrossFit">CrossFit</option>
          </select>
        </div>
       
        <button type="submit"><MdAdd/></button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleShowPrograms}>
        {showPrograms ? 'Hide Programs' : 'Show Programs'}
      </button>
      {showPrograms && (
        <div>
          <h2>All Programs</h2>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Program Type</th>
                <th>Hours</th>
                <th>Days</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr key={program._id}>
                  <td>{program.fullName}</td>
                  <td>{program.age}</td>
                  <td>{program.gender}</td>
                  <td>{program.programType}</td>
                  <td>{program.hours}</td>
                  <td>{program.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WorkoutPrograms;
