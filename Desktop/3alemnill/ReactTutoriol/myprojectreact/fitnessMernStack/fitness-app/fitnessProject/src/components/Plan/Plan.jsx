import React from "react";
import "./Plan.css";

function Plan() {
  return (
    <section className="sectionContainere priceContainer">
      <h2 className="sectionHeadere">OUR PRICING PLAN</h2>
      <p className="sectionSubheadere">
        Our pricing plan comes with various membership tiers, each tailored to
        cater to different preferences and fitness aspirations.
      </p>
      <div className="priceGrid">
        <div className="priceCard">
          <div className="priceCardContent">
            <h4>Basic Plan</h4>
            <h3>$16</h3>
            <p>
              <i className="ri-checkbox-circle-line"></i> Smart workout plan
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i> At home workouts
            </p>
          </div>
          <button className="btnn priceBtn">Join Now</button>
        </div>
        <div className="priceCard">
          <div className="priceCardContent">
            <h4>Weekly Plan</h4>
            <h3>$25</h3>
            <p>
              <i className="ri-checkbox-circle-line"></i> PRO Gyms
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i> Smart workout plan
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i> At home workouts
            </p>
          </div>
          <button className="btnn priceBtn">Join Now</button>
        </div>
        <div className="priceCard">
          <div className="priceCardContent">
            <h4>Monthly Plan</h4>
            <h3>$45</h3>
            <p>
              <i className="ri-checkbox-circle-line"></i> ELITE Gyms & Classes
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i> PRO Gyms
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i> Smart workout plan
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i> At home workouts
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i> Personal Training
            </p>
          </div>
          <button className="btnn priceBtn">Join Now</button>
        </div>
      </div>
    </section>
  );
}

export default Plan;
