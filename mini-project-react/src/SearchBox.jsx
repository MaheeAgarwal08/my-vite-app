import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const getWeatherInfo = async (cityName) => {
    try {
      let response = await fetch(
        `${API_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      if (jsonResponse.cod === 200) {
        let result = {
          city: cityName,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
        };
        return result;
      } else {
        alert("City not found!");
      }
    } catch (error) {
      alert("Error fetching weather data.");
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const trimmedCity = city.trim();

    if (!trimmedCity) {
      alert("Please enter a valid city name.");
      return;
    }

    const newInfo = await getWeatherInfo(trimmedCity);
    if (newInfo) {
      updateInfo(newInfo);
      setCity(""); // Clear input only after successful update
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
