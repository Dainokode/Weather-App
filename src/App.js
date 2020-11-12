import React, { useState } from 'react'
import "./styles/main.scss";

const App = () => {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({});

  const key = "9e7fe41b571f076a0bee5baf210193f0";
  const base = "https://api.openweathermap.org/data/2.5/"

  const search = (e) => {
    if(e.key === "Enter") {
      const fetchWeather = async () => {
      const response = await fetch(`${base}weather?q=${query}&appid=${key}`);
      const data = await response.json();
      setWeather(data);
      console.log(data.sys.sunrise)
    }

    fetchWeather()
    }
  }

  return (
    <>
    {( weather.main !== undefined) ? (
      <div className="container">
      <h1>Weather App</h1>
      <input type="text" onKeyPress={search} onChange={e => setQuery(e.target.value)} value={query} placeholder="Search" />

      <div className="card">
        <div className="card-image">
          <img src={require("./img/night.svg")} alt="" />
        </div>
        <div className="card-text">
          <h2 className="city-name">{weather.name}</h2>
          <h3>{weather.weather[0].description}</h3>
          <h1 className="temp">{Math.round(weather.main.temp - 273.15)}</h1>
        </div>
      </div>
    </div>
    ) : (<div className="container">
          <h1>Weather App</h1> 
          <input type="text" onKeyPress={search} onChange={e => setQuery(e.target.value)} value={query} placeholder="Search" />
        </div>)}
    </>
  )
    }
export default App;
