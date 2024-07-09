import React, { useState, useEffect } from "react";
import axios from "axios";
// import './MyAccount.css'; // قم بإنشاء ملف CSS للتنسيق
import "./Myaccount.css";
function MyAccount() {
  const [userData, setUserData] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [nutritionPlans, setNutritionPlans] = useState([]);
  const [trainingSessions, setTrainingSessions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/reservations",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setReservations(response.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    const fetchNutritionPlans = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/nutrition",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setNutritionPlans(response.data);
      } catch (error) {
        console.error("Error fetching nutrition plans:", error);
      }
    };

    const fetchTrainingSessions = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/training/sessions",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTrainingSessions(response.data);
      } catch (error) {
        console.error("Error fetching training sessions:", error);
      }
    };

    fetchUserData();
    fetchReservations();
    fetchNutritionPlans();
    fetchTrainingSessions();
  }, []);
  const deleteReservation = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/reservations/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReservations(
        reservations.filter((reservation) => reservation._id !== id)
      );
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  const deleteNutritionPlan = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/nutrition/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNutritionPlans(nutritionPlans.filter((plan) => plan._id !== id));
    } catch (error) {
      console.error("Error deleting nutrition plan:", error);
    }
  };

  const deleteTrainingSession = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/training/sessions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTrainingSessions(
        trainingSessions.filter((session) => session._id !== id)
      );
    } catch (error) {
      console.error("Error deleting training session:", error);
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-account-container">
      <div className="profile-section">
        <img
          src={userData.profilePicture}
          alt="User Profile"
          className="profile-picture"
        />
        <h2>{userData.fullName}</h2>
        <p className="emails">Email: {userData.email}</p>
      </div>

      <div className="reservations-section">
        <h4>Your Reservations</h4>
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation._id}>
              <p>Month: {reservation.selectedMonth}</p>
              <p>Salary: {reservation.salary}</p>
              <button onClick={() => deleteReservation(reservation._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="nutrition-section">
        <h4>Your Nutrition Plans</h4>
        <ul>
          {nutritionPlans.map((plan) => (
            <li key={plan._id}>
              <p>Height: {plan.height}</p>
              <p>Weight: {plan.weight}</p>
              <p>BMI: {plan.bmi}</p>
              <button onClick={() => deleteNutritionPlan(plan._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="training-sessions-section">
        <h4>Your Training Sessions</h4>
        <ul>
          {trainingSessions.map((session) => (
            <li key={session._id}>
              <p>Trainer: {session.selectedTrainer}</p>
              <p>Date and Time: {session.dateTime}</p>
              <button onClick={() => deleteTrainingSession(session._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyAccount;
