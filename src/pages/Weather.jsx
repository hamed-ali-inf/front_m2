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
