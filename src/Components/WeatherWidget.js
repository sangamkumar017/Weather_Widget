import React, { useState } from 'react';
import './WeatherWidget.css';

const WeatherWidget = ({ apiKey, className }) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }       
  };

  return (
    <> 
    
    
       <div className={`weather-widget ${className}`}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weather ? (
        <div>
          <h2>Weather in {city}</h2>
          {weather.main && <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>}
          {weather.main && <p>Humidity: {weather.main.humidity}%</p>}
          {weather.weather && <p>Description: {weather.weather[0].description}</p>}
        </div>
      ) : (
        <p>Enter a city and click Search to get weather data.</p>
      )}
    </div>
    </>
  );
};

export default WeatherWidget;
