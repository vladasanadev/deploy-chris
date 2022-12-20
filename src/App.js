import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [update, setUpdate] = useState(false);

  function displayWeather(response) {
    setUpdate(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    if (city.length > 0) {
      axios.get(url).then(displayWeather);
    } else {
      alert(`Please type a city!`);
    }
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <form action="" className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city"
                autocomplete="off"
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-100"
              />
            </div>
          </div>
        </form>

        <div className="Overview">
          <h1>Luxembourg</h1>
          <ul>
            <li>Last updated: Tuesday 15:05</li>
            <li>Rainy</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-4">
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png"
              alt="Snow"
              srcset=""
            />
          </div>
          <div className="col-4">
            <span className="degree">19</span>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
          <div className="col-4">
            <ul className="Conditions">
              <li>Humidity: 80%</li>
              <li>Wind: 10 mph</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="Footer">
        <p>
          This is an{" "}
          <a
            href="https://github.com/EndijaM/react-weather-app"
            target="_blank"
          >
            open-source code
          </a>
          , hosted on
          <a
            href="https://benevolent-entremet-723e8f.netlify.app/"
            target="_blank"
          >
            {" "}
            Netlify{" "}
          </a>
          <br />
          and is coded by <strong>Endija Mathur</strong>
        </p>
      </div>
    </div>
  );
}
