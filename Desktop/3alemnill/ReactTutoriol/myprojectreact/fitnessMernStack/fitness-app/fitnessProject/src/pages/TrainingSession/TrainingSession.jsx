import React, { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaDumbbell,
} from "react-icons/fa";
import styles from "./TrainingSession.module.css";
// import './TrainingSessions.css'; // Import your CSS file for styling

function TrainingSessions() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/training/sessions",
        {
          name,
          email,
          phone,
          selectedTrainer,
          dateTime,
        }
      );
      if (response.status === 200) {
        setMessage("Session booked successfully!");
        // Optionally reset form fields here
      }
    } catch (error) {
      setMessage("Failed to book session. Please try again.");
      // console.error('Error booking session:', error);
    }
  };

  return (
    <div className={styles.containers}>
      <h4>Book Your Personalized Training Sessions</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroupss}>
          <label htmlFor="name">
            {" "}
            <FaUser /> Full Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroupss}>
          <label htmlFor="email">
            {" "}
            <FaEnvelope />
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroupss}>
          <label htmlFor="phone">
            {" "}
            <FaPhone />
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        {/* Example for selecting a trainer */}
        <div className={styles.formGroupss}>
          <label htmlFor="trainer">
            <FaDumbbell />
            Select Trainer:
          </label>
          <select
            id="trainer"
            value={selectedTrainer}
            onChange={(e) => setSelectedTrainer(e.target.value)}
          >
            <option value="trainer1">Doummar</option>
            <option value="trainer2">Saad</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className={styles.formGroupss}>
          <label htmlFor="datetime">
            <FaCalendarAlt />
            Preferred Date and Time:
          </label>
          <input
            type="datetime-local"
            id="datetime"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Session</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default TrainingSessions;
