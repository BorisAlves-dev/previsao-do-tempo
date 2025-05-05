import "./WeatherInfo5Days.css";

function WeatherInfo5Days({ weather5Days }) {
  if (!weather5Days || !weather5Days.list) {
    return <p>Carregando dados...</p>;
  }

  console.log(weather5Days);

  const dailyForecasts = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecasts[date]) {
      dailyForecasts[date] = forecast;
    }
  }

  const nextFiveDaysForecast = Object.values(dailyForecasts).slice(1, 6);

  return (
    <div className="container-5days">
      <h3>Previsão para 5 dias</h3>
      <div className="weather-list">
        {nextFiveDaysForecast.map((forecast) => (
          <div className="keys" key={forecast.dt}>
            <p className="date-days">{new Date(forecast.dt * 1000).toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit" })}</p>
            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="Ícone do clima" />

            <p className="description-info">{forecast.weather[0].description}</p>
            <p className="temp-max-min">
              {Math.round(forecast.main.temp_min)}°C min/{Math.round(forecast.main.temp_max)}°C máx
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInfo5Days;
