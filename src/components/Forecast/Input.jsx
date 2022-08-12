import React from "react";
import { FcSearch } from "react-icons/fc";

const Input = ({ location, setLocation, searchLocation }) => {
    const cities = [
        {
          id: 1,
          title: "London",
        },
        {
          id: 2,
          title: "Sydney",
        },
        {
          id: 3,
          title: "Tokyo",
        },
        {
          id: 4,
          title: "Toronto",
        },
        {
          id: 5,
          title: "Paris",
        },
      ];
    
  return (
    <>
      <div className="search__container">
        <div className="input__search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          // onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
        </div>
       <div className="input__icon">
       <FcSearch onClick={searchLocation} />
       </div>
      </div>
      <div className="other--cities">
        {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setLocation(city.name)}
        >
          {city.title}
        </button>
      ))}
      </div>
    </>
  );
};

export default Input;
