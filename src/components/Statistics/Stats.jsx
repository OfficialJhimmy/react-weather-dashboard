import React from "react";
import "./Stats.css";
import graphdetail from "../../assets/images/Graph & detail.png";
import graphmonth from "../../assets/images/Graph & months.png";

const Stats = () => {
  return (
    <>
      <section className="weather__info statsinfo__container">
        <h2 className="heading-secondary">Statistics</h2>
        <div className="stats__top-container">
          <h3>Polution Index</h3>
          <div className="stats__top-parent">
            <div className="stats__figure">
              <h2>4.93%</h2>
            </div>
            <div className="stats__graph">
              <img src={graphdetail} alt="graph" />
            </div>
          </div>
        </div>
        <div className="stats__middle-container">
          <h3>Average Monthly Rainfall in London</h3>
          <div className="stats__top-parent">
            <div className="stats__figure">
              <h2>50mm</h2>
            </div>
            <div className="stats__graph">
              <img src={graphmonth} alt="graph" />
            </div>
          </div>
        </div>
        <div className="stats__bottom-container"></div>
      </section>
    </>
  );
};

export default Stats;
