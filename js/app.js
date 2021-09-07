const weatherForm = document.querySelector('[data-js="change-location"]');
const weatherContainer = document.querySelector('[data-js="weather-container"]');
const cityName = document.querySelector('[data-js="city-name"]');
const temperatureValue = document.querySelector('[data-js="weather-value"]');
const weatherText = document.querySelector('[data-js="weather-text"]');
const weatherImage = document.querySelector('[data-js="time"]');
const weatherIcon = document.querySelector('[data-js="time-icon"]');

const setWeatherImageSrc = (param) => {
  param ? weatherImage.src = './src/day.svg' : weatherImage.src = './src/night.svg';
};

const setAllInnerHtml = (localizedName, weatherTextValue, temperature) => {
  cityName.innerHTML = localizedName;
  weatherText.innerHTML = weatherTextValue;
  temperatureValue.innerHTML = temperature.Metric.Value;
};

const renderWeatherData = async (event) => {
  event.preventDefault();

  const cityInput = event.target.city.value;

  const cityWeatherInfos = await fetchData(getCityUrl(cityInput));
  const [{ Key, LocalizedName }] = cityWeatherInfos;

  const weatherData = await fetchData(getCityWeatherUrl(Key));
  const [{ IsDayTime, Temperature, WeatherIcon, WeatherText }] = weatherData;

  setAllInnerHtml(LocalizedName, WeatherText, Temperature);
  setWeatherImageSrc(IsDayTime);

  weatherIcon.innerHTML = `<img src="./src/icons/${WeatherIcon}.svg" />`;

  weatherContainer.classList.remove('d-none');
  weatherForm.reset();
}

weatherForm.addEventListener('submit', renderWeatherData);
