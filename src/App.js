import React from 'react';
import WeatherWidget from './Components/WeatherWidget';
import './App.css'
 

const App = () => {
  return (
    <div>
      <h1>My Weather App</h1>
       <WeatherWidget apiKey="5a9a61dcd7b6134615241ee868cb6b2f" className="my-custom-widget" />
      
    </div>
  );
};


export default App;