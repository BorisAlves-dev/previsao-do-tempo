import "./WeatherInfo.css";

function WeatherInfo({ weather }) {
  if (!weather || !weather.weather || !weather.weather[0]) {
    return;
  }

  return (
    <div className="container-weather">
      <h2>{weather.name}</h2>
      <div className="temp-info">
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
        <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="description">{weather.weather[0].description}</p>

      <div className="datails">
        <p>Sensação térmica : {Math.round(weather.main.feels_like)}°C</p>
        <p>Umidade : {weather.main.humidity}</p>
        <p>Pressão : {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
