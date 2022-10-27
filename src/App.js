import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  search5DayWeather,
  searchCities,
  searchCurrentWeather,
} from "./APIs.js";
import "./App.css";
import Favorits from "./componentes/Favorits";
import SearchPage from "./componentes/SearchPage";

function App() {
  const [search, setSearch] = useState();
  const [cityKey, setCityKey] = useState();

  const [citiesFound, setCitiesFound] = useState([]);
  const [weatherFound, setWeatherFound] = useState([]);
  const [fiveDayWeatherFound, setFiveDayWeatherFound] = useState([]);

  const [presentationFlag, setPresentationFlag] = useState(0);
  const [favoritsArr, setFavoritsArr] = useState([]);
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
                favoritsArr={favoritsArr}
                setFavoritsArr={setFavoritsArr}
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
            path="/weatherProject/favorits"
            element={
              <Favorits
                searchCurrentWeather={searchCurrentWeather}
                favoritsArr={favoritsArr}
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

const hebron = [
  {
    Version: 1,
    Key: "1279295",
    Type: "City",
    Rank: 45,
    LocalizedName: "Hebron",
    Country: {
      ID: "PS",
      LocalizedName: "Palestine",
    },
    AdministrativeArea: {
      ID: "WE",
      LocalizedName: "West Bank",
    },
  },
  {
    Version: 1,
    Key: "2164314",
    Type: "City",
    Rank: 75,
    LocalizedName: "Hebron",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "KY",
      LocalizedName: "Kentucky",
    },
  },
  {
    Version: 1,
    Key: "299822",
    Type: "City",
    Rank: 75,
    LocalizedName: "Hebron",
    Country: {
      ID: "ZA",
      LocalizedName: "South Africa",
    },
    AdministrativeArea: {
      ID: "NW",
      LocalizedName: "North-West",
    },
  },
  {
    Version: 1,
    Key: "2241143",
    Type: "City",
    Rank: 85,
    LocalizedName: "Hebron",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "IL",
      LocalizedName: "Illinois",
    },
  },
  {
    Version: 1,
    Key: "338104",
    Type: "City",
    Rank: 85,
    LocalizedName: "Hebron",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "IN",
      LocalizedName: "Indiana",
    },
  },
  {
    Version: 1,
    Key: "339902",
    Type: "City",
    Rank: 85,
    LocalizedName: "Hebron",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "ND",
      LocalizedName: "North Dakota",
    },
  },
  {
    Version: 1,
    Key: "334320",
    Type: "City",
    Rank: 85,
    LocalizedName: "Hebron",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "NE",
      LocalizedName: "Nebraska",
    },
  },
  {
    Version: 1,
    Key: "2190565",
    Type: "City",
    Rank: 85,
    LocalizedName: "Hebron",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "OH",
      LocalizedName: "Ohio",
    },
  },
  {
    Version: 1,
    Key: "2242135",
    Type: "City",
    Rank: 85,
    LocalizedName: "Hebron",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "PA",
      LocalizedName: "Pennsylvania",
    },
  },
  {
    Version: 1,
    Key: "2248570",
    Type: "City",
    Rank: 85,
    LocalizedName: "Hebron",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "WI",
      LocalizedName: "Wisconsin",
    },
  },
];

const telavivWeather = [
  {
    LocalObservationDateTime: "2022-10-19T20:30:00+10:30",
    EpochTime: 1666173600,
    WeatherText: "Mostly clear",
    WeatherIcon: 34,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 18.9,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 66,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/au/jerusalem/3496636/current-weather/3496636?lang=en-us",
    Link: "http://www.accuweather.com/en/au/jerusalem/3496636/current-weather/3496636?lang=en-us",
  },
];

const telaviv5days = {
  Headline: {
    EffectiveDate: "2022-10-22T08:00:00+03:00",
    EffectiveEpochDate: 1666414800,
    Severity: 4,
    Text: "Pleasant this weekend",
    Category: "mild",
    EndDate: null,
    EndEpochDate: null,
    MobileLink:
      "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?lang=en-us",
    Link: "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2022-10-19T07:00:00+03:00",
      EpochDate: 1666152000,
      Temperature: {
        Minimum: {
          Value: 54,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 75,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?day=1&lang=en-us",
      Link: "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?day=1&lang=en-us",
    },
    {
      Date: "2022-10-20T07:00:00+03:00",
      EpochDate: 1666238400,
      Temperature: {
        Minimum: {
          Value: 55,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 72,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?day=2&lang=en-us",
      Link: "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?day=2&lang=en-us",
    },
    {
      Date: "2022-10-21T07:00:00+03:00",
      EpochDate: 1666324800,
      Temperature: {
        Minimum: {
          Value: 52,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 70,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?day=3&lang=en-us",
      Link: "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?day=3&lang=en-us",
    },
    {
      Date: "2022-10-22T07:00:00+03:00",
      EpochDate: 1666411200,
      Temperature: {
        Minimum: {
          Value: 52,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 70,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?day=4&lang=en-us",
      Link: "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?day=4&lang=en-us",
    },
    {
      Date: "2022-10-23T07:00:00+03:00",
      EpochDate: 1666497600,
      Temperature: {
        Minimum: {
          Value: 52,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 72,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?day=5&lang=en-us",
      Link: "http://www.accuweather.com/en/ps/hebron/1279295/daily-weather-forecast/1279295?day=5&lang=en-us",
    },
  ],
};
