const APIKey = '004dTU1swCv8D9SGILWREoq0Yv33s8fB';

const getCityUrl = (cityName) => 
  `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}&lang=pt-br`;

const getCityWeatherUrl = (key) =>
  `https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKey}&language=pt-br`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
}
