import React, { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const [city, setCity] = useState("New York"); // default city
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "0be5c73b8e3fbabe8440a13ff16b25cd";

  // Fetch weather whenever city changes
  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = await res.json();

        if (data.cod === 200) {
          setWeather(data);
          setError("");
        } else {
          setWeather(null);
          setError("City not found. Please enter a valid city.");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchWeather();
  }, [city]); // runs whenever city changes

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">Weatherly 🌤️</h1>

      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="p-3 rounded-lg w-64 focus:outline-none"
        />
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;
