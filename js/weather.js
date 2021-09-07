const APIKey = '004dTU1swCv8D9SGILWREoq0Yv33s8fB';

const fetchData = async (cityName) => {
  try {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}&lang=pt-br`);
    const json = await response.json();
    const [cityData] = json;
    return cityData;
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
};

const fetchWeatherInfos = async (key) => {
  try {
    const fetchWeatherInfo = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKey}&language=pt-br`);
    const json = await fetchWeatherInfo.json();
    return json;
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
};
