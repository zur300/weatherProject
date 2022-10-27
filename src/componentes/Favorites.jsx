// import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { searchCurrentWeather, search5DayWeather } from "../APIs";

export default function Favorites(props) {
  const nav = useNavigate();

  // const [citiesToPresent, setCitiesToPresent] = useState([]);

  // useEffect(() => {
  //   props.favoritsArr.map((city) => {
  //       searchCurrentWeather(city.Key, (data) =>{
  //       setCitiesToPresent([
  //         ...citiesToPresent,
  //         {
  //           CityKey: city.Key,
  //           LocalizedName: city.LocalizedName,
  //           Weather: data[0]?.Temperature?.Metric?.Value
  //         },
  //       ])}
  //     ).then(console.log('ok'));

  //   });

  // }, [props.favoritsArr]);

  const presentFavorites = () => {
    return props.favoritesArr?.map((val) => {
      return (
        <div className="resultDiv" onClick={() => {
          props.present5DayAndWeather(val.currentCity, val.Key)
          nav('/weatherProject');


        }}>
          <p>{val.currentCity}</p>
          <p>{val.currentWeather}c</p>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="navDiv">
        <h1>Weather forecast</h1>
        <Link to="/weatherProject">
          <button>Home</button>
        </Link>
      </div>
      <h1>Favorites</h1>
      {presentFavorites()}
    </div>
  );
}
