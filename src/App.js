import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  search5DayWeather,
  searchCities,
  searchCurrentWeather,
} from "./APIs.js";
import "./App.css";
import Favorites from "./componentes/Favorites";
import SearchPage from "./componentes/SearchPage";

function App() {
  const [search, setSearch] = useState();
  const [cityKey, setCityKey] = useState();

  const [citiesFound, setCitiesFound] = useState([]);
  const [weatherFound, setWeatherFound] = useState([]);
  const [fiveDayWeatherFound, setFiveDayWeatherFound] = useState([]);

  const [presentationFlag, setPresentationFlag] = useState(0);
  const [favoritesArr, setFavoritesArr] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Tel-aviv");

  useEffect(() => {
    if (presentationFlag === 0) {
      searchCurrentWeather("215854", setWeatherFound);
      search5DayWeather("215854", setFiveDayWeatherFound);
      // setWeatherFound(telavivWeather);
      // setFiveDayWeatherFound(telaviv5days);
    }
    if (presentationFlag === 1) {
      searchCities(search, setCitiesFound);
      // setCitiesFound(hebron);
    }
    if (presentationFlag === 2) {
      searchCurrentWeather(cityKey, setWeatherFound);
      search5DayWeather(cityKey, setFiveDayWeatherFound);
      // setWeatherFound(telavivWeather);
      // setFiveDayWeatherFound(telaviv5days);
    }
  }, [presentationFlag, search, cityKey]);

  const present5DayAndWeather = (LocalizedName, Key) => {
    setCityKey(Key);
    setPresentationFlag(2);
    setSelectedCity(LocalizedName);
    setCitiesFound([]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/weatherProject"
            element={
              <SearchPage
                favoritesArr={favoritesArr}
                setFavoritesArr={setFavoritesArr}
                citiesFound={citiesFound}
                setCitiesFound={setCitiesFound}
                setSearch={setSearch}
                presentationFlag={presentationFlag}
                setPresentationFlag={setPresentationFlag}
                weatherFound={weatherFound}
                setWeatherFound={setWeatherFound}
                fiveDayWeatherFound={fiveDayWeatherFound}
                setCityKey={setCityKey}
                setSelectedCity={setSelectedCity}
                selectedCity={selectedCity}
                present5DayAndWeather={present5DayAndWeather}
              />
            }
          />
          <Route
            path="/weatherProject/favorites"
            element={
              <Favorites
                searchCurrentWeather={searchCurrentWeather}
                favoritesArr={favoritesArr}
                setPresentationFlag={setPresentationFlag}
                present5DayAndWeather={present5DayAndWeather}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
