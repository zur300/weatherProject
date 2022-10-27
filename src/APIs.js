const apiKey = "U1LLnS1mjIWRuam1uFGRlUpn0BvwLIPh";
// "f8GWeQLX7NGQtnqTIvdqRm1TtCjiKuqk";
// "Tm1AzBiBQ2BYpdhhMP5uTbvWe1QmjENh";

export const searchCities = (search, onComplete) => {
  fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=` +
      search
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      onComplete(data);
      return data;
    })
    .catch((err) => {
      window.alert("Could not find cities");
      console.log(err);
    });
};

export const searchCurrentWeather = (locationKey, onComplete) => {
  fetch(
    "https://dataservice.accuweather.com/currentconditions/v1/" +
      locationKey +
      `?apikey=${apiKey}`
  )
    .then((res) => {
      return res.json();
    })
    .then((respond) => {
      onComplete(respond);
      return respond;
    })
    .catch((err) => {
      window.alert("Could not find weather");
      console.log(err);
    });
};

export const search5DayWeather = (search, onComplete) => {
  fetch(
    "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
      search +
      `?apikey=${apiKey}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      onComplete(data);
      return data;
    })
    .catch((err) => {
      window.alert("Could not find 5 day weather");
      console.log(err);
    });
};
