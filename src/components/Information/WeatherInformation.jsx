import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import london from "../../assets/images/london.jpg";
import zurich from "../../assets/images/zurich.jpg";
import paris from "../../assets/images/paris.jpg";
import { FcSearch } from "react-icons/fc";

function WeatherInformation() {
  return (
    <>
      <section className="weather__info">
        <h2 className="heading-secondary">Weather Reports</h2>
        <div className="weather__info--container">
          <div className="weather__info--container-child-left">
            <div className="weather__left--child">
              <Link to="/london">
                <img src={london} alt="London" />
                <p>London</p>
              </Link>
            </div>
            <div className="weather__left--child">
              <Link to="/paris">
                <img src={paris} alt="Paris" />
                <p>Paris</p>
              </Link>
            </div>
            <div className="weather__left--child">
              <Link to="/zurich">
                <img src={zurich} alt="Zurich" />
                <p>Zurich</p>
              </Link>
            </div>
          </div>
          <Link to="/weather">
            <button className="weather__info--icon-container">
              <FcSearch className="weather__icon" />
              <p>Search city</p>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default WeatherInformation;
