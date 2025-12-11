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
