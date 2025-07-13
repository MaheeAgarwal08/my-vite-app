import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 24.82,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "Haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={styles.appContainer}>
      <h2 style={styles.header}>🌤️ Weather Forecast</h2>
      <div style={styles.card}>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #83a4d4, #b6fbff)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    color: "#ffffff",
    marginBottom: "20px",
    fontSize: "2rem",
    textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    width: "90%",
    maxWidth: "500px",
  },
};
