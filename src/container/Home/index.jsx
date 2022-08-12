import React from "react";
import Interesting from "../../components/Information/Interesting";
import WeatherInformation from "../../components/Information/WeatherInformation";
import Navbar from "../../components/Navbar/Navbar";
import SideNavbar from "../../components/Sidebar/SideNavbar";
import Stats from "../../components/Statistics/Stats";
import "./index.css";

const Home = () => {
  return (
    <div className="double__grid">
      <div className="double__grid--child double__grid--right">
        <SideNavbar />
        <Navbar />
      </div>
      <div className="double__grid--child double__grid--left">
        <div>
          <WeatherInformation />
          <Interesting/>
        </div>
        <div>
          <Stats/>
        </div>
      </div>
    </div>
  );
};

export default Home;
