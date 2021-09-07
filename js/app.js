const weatherForm = document.querySelector('[data-js="change-location"]');
const cityName = document.querySelector('[data-js="city-name"]');
const temperatureValue = document.querySelector('[data-js="weather-value"]');
const weatherText = document.querySelector('[data-js="weather-text"]');
const weatherImage = document.querySelector('[data-js="time"]');
const weatherIcon = document.querySelector('[data-js="time-icon"]');

weatherForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cityInput = event.target.city.value;

  const cityWeatherInfos = await fetchData(cityInput);
  const { Key, LocalizedName } = cityWeatherInfos;

  const weatherData = await fetchWeatherInfos(Key);
  const [{ IsDayTime, Temperature, WeatherIcon, WeatherText }] = weatherData;

  const weatherIconImage = document.createElement('img');

  cityName.innerHTML = LocalizedName;
  weatherText.innerHTML = WeatherText;
  temperatureValue.innerHTML = Temperature.Metric.Value;

  IsDayTime ? weatherImage.src = './src/day.svg' : weatherImage.src = './src/night.svg';

  weatherIconImage.src = `./src/icons/${WeatherIcon}.svg`;
  weatherIcon.insertAdjacentElement('beforeend', weatherIconImage);

  console.log(weatherData);
  weatherForm.reset();
});