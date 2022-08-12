import React from "react";
import card1 from "../../assets/images/Card.png";
import card2 from "../../assets/images/Card2.png";
import card3 from "../../assets/images/Card3.png";
import { Link } from "react-router-dom";

function Interesting() {
  return (
    <div className="interesting__info">
      <h2 className="heading-secondary">Interesting Weather Videos</h2>
      <div className="interesting__container">
        <div className="interesting__container--child img__interesting">
          <Link to="/weather">
            <img src={card1} alt="Card1" />
          </Link>
        </div>
        <div className="interesting__container--child">
          <Link to="/weather">
            <img src={card2} alt="Card2" />
          </Link>
        </div>
        <div className="interesting__container--child">
          <Link to="/weather">
            <img src={card3} alt="Card3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Interesting;
