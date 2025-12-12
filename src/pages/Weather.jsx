<<<<<<< HEAD
import { Link } from "react-router-dom";

export function Weather() {
  // Mock weather data (in a real app, fetch from an API like OpenWeatherMap)
  const currentWeather = {
    location: "New York, NY",
    temperature: "72°F",
    condition: "Sunny",
    humidity: "45%",
    wind: "10 mph NW",
  };
  const forecast = [
    { day: "Today", high: "75°F", low: "60°F", condition: "Sunny" },
    { day: "Tomorrow", high: "70°F", low: "55°F", condition: "Partly Cloudy" },
    { day: "Wednesday", high: "68°F", low: "52°F", condition: "Rainy" },
  ];

  return (
    <>
      <style>{`
        /* Styles for Weather page */
        .weather-page {
          display: flex;
          justify-content: center;
          padding: 40px 20px;
          background: #b2c4ffff;
          min-height: 100vh;
        }
        .weather-card {
          max-width: 600px;
          background: white;
          padding: 24px;
          border-radius: 10px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.1);
        }
        .weather-title {
          font-size: 28px;
          font-weight: 700;
          color: #222;
          margin-bottom: 20px;
        }
        .current-weather {
          text-align: center;
          margin-bottom: 30px;
        }
        .temp {
          font-size: 48px;
          font-weight: 700;
          color: #007bff;
        }
        .condition {
          font-size: 24px;
          margin: 10px 0;
        }
        .forecast {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        }
        .forecast-item {
          text-align: center;
          padding: 10px;
          background: #d3e5f8ff;
          border-radius: 8px;
        }
        .day {
          font-weight: 600;
        }
        .btn-back {
          display: inline-block;
          margin-top: 20px;
          text-decoration: none;
          color: #007bff;
          font-weight: 500;
          padding: 10px 20px;
          border: 1px solid #007bff;
          border-radius: 6px;
          transition: background-color 0.3s;
        }
        .btn-back:hover {
          background-color: #007bff;
          color: #fff;
        }
      `}</style>
      <div className="weather-page">
        <div className="weather-card">
          <h1 className="weather-title">Weather Details</h1>
          <div className="current-weather">
            <h2>{currentWeather.location}</h2>
            <p className="temp">{currentWeather.temperature}</p>
            <p className="condition">{currentWeather.condition}</p>
            <p>Humidity: {currentWeather.humidity} | Wind: {currentWeather.wind}</p>
          </div>
          <h3>3-Day Forecast</h3>
          <div className="forecast">
            {forecast.map((day, index) => (
              <div key={index} className="forecast-item">
                <p className="day">{day.day}</p>
                <p>{day.high} / {day.low}</p>
                <p>{day.condition}</p>
              </div>
            ))}
          </div>
          <Link to="/" className="btn-back">Back to Home</Link>
        </div>
      </div>
    </>
  );
}
=======
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Weather() {
  const API_KEY = "2ff10ea00b286e703efd9c806522d91d";
  const city = "Tindouf";

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        // Fetch current weather
        const resCurrent = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${API_KEY}`
        );
        const dataCurrent = await resCurrent.json();

        // Fetch 3-day forecast
        const resForecast = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${API_KEY}`
        );
        const dataForecast = await resForecast.json();

        // Process forecast (1 item per day)
        const days = {};
        dataForecast.list.forEach((item) => {
          const date = item.dt_txt.split(" ")[0];
          if (!days[date]) {
            days[date] = item;
          }
        });

        setCurrentWeather({
          location: dataCurrent.name,
          temperature: `${Math.round(dataCurrent.main.temp)}°C`,
          condition: dataCurrent.weather[0].description,
          humidity: `${dataCurrent.main.humidity}%`,
          wind: `${dataCurrent.wind.speed} km/h`,
          icon: dataCurrent.weather[0].icon,
        });

        setForecast(
          Object.values(days)
            .slice(0, 3)
            .map((item) => ({
              day: new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "long",
              }),
              high: `${Math.round(item.main.temp_max)}°C`,
              low: `${Math.round(item.main.temp_min)}°C`,
              condition: item.weather[0].description,
              icon: item.weather[0].icon,
            }))
        );

      } catch (err) {
        setError("Failed to load weather data.");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading weather...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;

  return (
    <>
      <style>{`
        .weather-page {
          display: flex;
          justify-content: center;
          padding: 50px 20px;
          background: linear-gradient(135deg, #87CEEB, #f0f9ff);
          min-height: 100vh;
          direction: ltr;
          font-family: "Tahoma", sans-serif;
        }
        .weather-card {
          max-width: 750px;
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.15);
        }
        .weather-title { font-size: 32px; font-weight: 800; text-align: center; color: #1e3a8a; }
        .current-weather { text-align: center; margin-bottom: 40px; }
        .weather-icon { width: 90px; }
        .temp { font-size: 60px; font-weight: 700; color: #e67e22; }
        .forecast { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
        .forecast-item { background: #e8f4ff; border-radius: 15px; padding: 15px; text-align: center; }
        .forecast-icon { width: 60px; }
        .btn-back { display: block; width: fit-content; margin: 30px auto; text-decoration: none; color: white; background: #2563eb; padding: 12px 24px; border-radius: 10px; font-size: 18px; }
      `}</style>

      <div className="weather-page">
        <div className="weather-card">

          <h1 className="weather-title">Weather  – {currentWeather.location}</h1>

          <div className="current-weather">
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
            />
            <p className="temp">{currentWeather.temperature}</p>
            <p>{currentWeather.condition}</p>
            <p>Humidity: {currentWeather.humidity}</p>
            <p>Wind: {currentWeather.wind}</p>
          </div>

          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>3-Day Forecast</h2>

          <div className="forecast">
            {forecast.map((item, i) => (
              <div className="forecast-item" key={i}>
                <img
                  className="forecast-icon"
                  src={`https://openweathermap.org/img/wn/${item.icon}.png`}
                />
                <p><strong>{item.day}</strong></p>
                <p>{item.high} / {item.low}</p>
                <p>{item.condition}</p>
              </div>
            ))}
          </div>

          <Link to="/" className="btn-back">Back to Home</Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> df13238cbf2b759a6e59728782001429cfa880c2
