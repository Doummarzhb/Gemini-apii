import React, { useState ,useEffect} from 'react';
import './Nutrition.css'; 

function Nutrition() {
  
  const [meals, setMeals] = useState([]);

  
  const [newMeal, setNewMeal] = useState({
    type: '',
    quantity: '',
    calories: '',
  });
  useEffect(() => {
    const storedMeals = localStorage.getItem('meals');
    if (storedMeals) {
      setMeals(JSON.parse(storedMeals));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('meals', JSON.stringify(meals));
  }, [meals]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setMeals([...meals, newMeal]);
    
    setNewMeal({
      type: '',
      quantity: '',
      calories: '',
    });
  };

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMeal({
      ...newMeal,
      [name]: value,
    });
  };

  return (
    <div className="nutrition-container">
      <h3>Nutrition Tracking </h3>


      <form onSubmit={handleFormSubmit}>
        <div className="form-grouppe">
          {/* <label>نوع الوجبة:</label> */}
          <label>Meal Type:</label>
          <input
            type="text"
            name="type"
            value={newMeal.type}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-grouppe">
          <label>Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={newMeal.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-grouppe">
          <label>calories : </label>
          <input
            type="text"
            name="calories"
            value={newMeal.calories}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submitt">Done </button>
      </form>

      {/* عرض الوجبات المسجلة */}
      <div className="meals-list">
        <h3>Registered Meals</h3>
        <ul>
          {meals.map((meal, index) => (
            <li key={index}>
              <strong>Meal Type:</strong> {meal.type}<br />
              <strong> Quantity:</strong> {meal.quantity}<br />
              <strong> Calories:</strong> {meal.calories}
            </li>
          ))}
        </ul>
      </div>

      {/* إحصائيات التغذية */}
      <div className="nutrition-stats">
        <h3>Nutrition Statistics</h3>
        <p>  Calories consumed today:  {meals.reduce((total, meal) => total + parseFloat(meal.calories), 0)}</p>
        <p> Meals registered today:  {meals.length}</p>
      </div>
    </div>
  );
}

export default Nutrition;
