import React from "react";
import food1 from "../../images/food1.avif";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import "./Hero.css"; // Import the CSS file

const Hero = () => {
  const user = useUser();
  return (
    <header>
      <section>
        <div className="hero-content">
          <div className="hero-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/booking">
              <button className="button" aria-label="On Click">
                Reserve Table
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={food1} alt="Food" />
        </div>
      </section>
    </header>
  );
};

export default Hero;
