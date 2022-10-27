import { useState } from "react";
import { Link } from "react-router-dom";
import {currentWeatherForFavorites} from "../APIs.js";

export default function SearchPage(props) {
  const [text, setText] = useState("");

  const favoriteButton = (currentCity, isInFavorite) => {
    if (isInFavorite) {
      return (
        <button
          onClick={() => {
            props.setFavoritesArr(
              props.favoritesArr.filter(
                (favoriteCity) => favoriteCity.Key !== currentCity.Key
              )
            );
          }}
        >
          ★ click to remove from favorites
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            currentWeatherForFavorites(currentCity.LocalizedName,currentCity.Key,props.setFavoritesArr,props.favoritesArr)

            // [...props.favoritesArr,{currentCity:currentCity.LocalizedName,Key:currentCity.Key,currentWeather:[]}];

          }}
        >
          add to favorites
        </button>
      );
    }

  };

  const mapCities = () => {

    return props.citiesFound?.map((currentCity) => {
      const isInFavorite = props.favoritesArr.find(
        (favoriteCity) => favoriteCity.Key === currentCity.Key
      );
      return (
        <div id={currentCity.Key} className="map citiesDivDiv">
          <p>{currentCity.LocalizedName}</p>
          <p>{currentCity.Country?.LocalizedName}</p>
          <p>{currentCity.AdministrativeArea?.LocalizedName}</p>
          <button
            onClick={() => {

              props.present5DayAndWeather(currentCity.LocalizedName, currentCity.Key)

            }}
          >
            show weather
          </button>
          {favoriteButton(currentCity, isInFavorite)}
        </div>
      );
    });
    // }
  };

  const showWheater = () => {
    console.log("weatherFound", props.weatherFound);

    return (
      <div className="resultDiv">
        <p>{props.selectedCity}</p>
        <p>{props.weatherFound?.[0]?.WeatherText}</p>
        <p>{props.weatherFound?.[0]?.Temperature?.Metric?.Value}c</p>
      </div>
    )

  };

  const show5DayWeather = () => {
    const arr = props.fiveDayWeatherFound;
    arr.DailyForecasts?.forEach((val) => {
      val.Date = new Date(val.Date).toDateString();
    });
    return (
      <div className="srchResultDiv">
   
        {props.fiveDayWeatherFound?.DailyForecasts?.map((val) => {
          return (
            <div className="resultDiv">
              <p>{val.Date.substring(0, 3)}</p>
              <p>
                temp:
                {Math.round((val.Temperature.Minimum.Value - 32) * (5 / 9))} c
              </p>
              {/* <p>maximum temp: {Math.round((val.Temperature.Maximum.Value - 32) * (5 / 9))} c</p> */}
            </div>
          );
        })}
      </div>
    );
  };



  const checkText = (val) => {
    const validChar = /^[A-Za-z `]*$/g;
    if (validChar.test(val)) {
      setText(val);
      props.setSearch(val);
      props.setPresentationFlag(1)
    }
  };

  return (
    <div className="homeDiv">
      <div className="navDiv">
        <h1>Weather forecast</h1>
        <Link to="/weatherProject/favorites">
          <button>Favorites</button>
        </Link>
        <button>Home</button>
      </div>
      <div className="searchDiv">
        <input
          type="text"
          value={text}
          placeholder="Search city"
          id="searchInput"
          onChange={(elm) => {
            checkText(elm.target.value);

          }}
        />
        {mapCities()}
      </div>


      <div className="lowerDiv">
        {showWheater()}
        {show5DayWeather()}
      </div>


    </div>
  );
}
