import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <h3>Weather Info - {info.weather}</h3>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="weather"
            height="140"
            image={INIT_URL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Temp Min: {info.tempMin}&deg;C</p>
              <p>Temp Max: {info.tempMax}&deg;C</p>
              <p>Feels Like: {info.feelsLike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
