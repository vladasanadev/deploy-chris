import logo from "./logo.svg";
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
      <p className="Footer">
        Coded by Endija Mathur
        <br />
        <small>
          <a href="https://www.freepik.com/free-vector/early-morning-scenery-seascape-lonely-wooden-boat_17676504.htm#query=illustrations%20nature&position=49&from_view=search&track=sph">
            Image by upklyak
          </a>{" "}
          on Freepik
        </small>
      </p>
    </div>
  );
}

export default App;
