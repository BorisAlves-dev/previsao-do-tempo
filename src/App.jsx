import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInfo from "./components/informationsW/Weatherinfo";
import WeatherInfo5Days from "./components/WeatherInfo5Days/WeatherInfo5Days";

function App() {
  const inputRef = useRef();
  const [wether, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "d695ac8f20be59f20522b1b856391579";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5Days = await axios.get(url5Days);

    setWeather(apiInfo.data);
    setWeather5Days(apiInfo5Days.data);
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("botao").click();
    }
  });

  return (
    <div className="container">
      <h1>Previsão do tempo</h1>

      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button id="botao" onClick={searchCity}>
        Pesquisar
      </button>

      {wether && <WeatherInfo weather={wether} />}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
