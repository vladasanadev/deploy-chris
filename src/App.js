import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <form action="" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city"
                autocomplete="off"
                className="form-control"
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
          <a href="https://github.com/EndijaM/react-weather-app">
            open-source code
          </a>
          , hosted on
          <a href="https://benevolent-entremet-723e8f.netlify.app/">
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

export default App;
