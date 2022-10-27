import { useState } from "react";
import { Link } from "react-router-dom";
import {searchCurrentWeather} from "../APIs.js";

export default function SearchPage(props) {
  const [text, setText] = useState("");

  const favoriteButton = (currentCity, isInFavorit) => {
    if (isInFavorit) {
      return (
        <button
          onClick={() => {
            props.setFavoritsArr(
              props.favoritsArr.filter(
                (favoriteCity) => favoriteCity.Key !== currentCity.Key
              )
            );
          }}
        >
          ★ click to remove from favorits
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            searchCurrentWeather(currentCity.Key, props.setWeatherFound);
            props.setFavoritsArr([...props.favoritsArr,{currentCity:currentCity.LocalizedName,Key:currentCity.Key,currentWeather:props.weatherFound?.[0]?.Temperature?.Metric?.Value}]);

          }}
        >
          add to favorits
        </button>
      );
    }

  };

  const mapCities = () => {

    return props.citiesFound?.map((currentCity) => {
      const isInFavorit = props.favoritsArr.find(
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
          {favoriteButton(currentCity, isInFavorit)}
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
        <Link to="/weatherProject/favorits">
          <button>Favortis</button>
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
