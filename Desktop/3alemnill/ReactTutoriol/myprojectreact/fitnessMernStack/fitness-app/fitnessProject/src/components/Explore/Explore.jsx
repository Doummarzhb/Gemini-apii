import React from "react";
import "./Explore.css"; // Import your CSS file for styling
import { RiArrowRightLine } from "react-icons/ri";

function Explore() {
  return (
    <div className="one">
      <section className="section__containere explore__containere">
        <div className="explore__headere">
          <h2 className="sections__headeree">EXPLORE OUR PROGRAM</h2>
          {/* <RiArrowRightLine /> */}

          <div className="explore__nav">
            <span>
              <i className="ri-arrow-left-line"></i>
            </span>
            <span>
              <i className="ri-arrow-right-line"></i>
            </span>
          </div>
        </div>
        <div className="explore__grid">
          <div className="explore__card">
            <span>
              <i className="ri-boxing-fill"></i>
            </span>
            <h4>Strength</h4>
            <p>
              Embrace the essence of strength as we delve into its various
              dimensions physical, mental, and emotional.
            </p>
            <a href="#">
              Join Now <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-heart-pulse-fill"></i>
            </span>
            <h4>Physical Fitness</h4>
            <p>
              It encompasses a range of activities that improve health,
              strength, flexibility, and overall well-being.
            </p>
            <a href="#">
              Join Now <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-run-line"></i>
            </span>
            <h4>Fat Loss</h4>
            <p>
              Through a combination of workout routines and expert guidance,
              we'll empower you to reach your goals.
            </p>
            <a href="#">
              Join Now <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-shopping-basket-fill"></i>
            </span>
            <h4>Weight Gain</h4>
            <p>
              Designed for individuals, our program offers an effective approach
              to gaining weight in a sustainable manner.
            </p>
            <a href="#">
              Join Now <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
