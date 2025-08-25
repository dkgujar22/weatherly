import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="bg-gray-800 p-6 rounded-xl text-white text-center shadow-lg w-72">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <p className="text-xl mb-2">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize mb-2">{weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className="mx-auto"
      />
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
