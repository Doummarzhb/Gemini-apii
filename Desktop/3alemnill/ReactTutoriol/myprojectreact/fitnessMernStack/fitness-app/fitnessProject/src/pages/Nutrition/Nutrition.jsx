import React, { useState } from "react";
import axios from "axios";
import "./Nutrition.css";

const Nutrition = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/nutrition/calculateBMI",
        {
          height,
          weight,
        }
      );
      setBmi(response.data.bmi);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error calculating BMI:", error);
      setMessage("Failed to calculate BMI. Please try again.");
    }
  };

  return (
    <div className="nutrition-containere">
      <h1 className="form-titlee">Calculate Your BMI</h1>
      <form className="nutrition-form" onSubmit={calculateBMI}>
        <div className="form-groupe">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div className="form-groupe">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {bmi && (
        <div className="resulte">
          <p>Your BMI is: {bmi}</p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Nutrition;
