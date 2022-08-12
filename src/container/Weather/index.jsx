import React from "react";
import "./index.css";
import SideNavbar from "../../components/Sidebar/SideNavbar";
import Navbar from "../../components/Navbar/Navbar";
import Forecast from "../../components/Forecast/Forecast";

const Weather = () => {
  return (
    <>
      <div className="double__grid--child double__grid--right">
        <SideNavbar />
        <Navbar />
      </div>
      <div className="forecast__content">
       <Forecast/>
      </div>
    </>
  );
};

export default Weather;
