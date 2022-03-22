import React, { useEffect, useState } from 'react';
import 'dotenv/config';
import './Current.css';


function Current({ city }) {

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
            const jsonData = await response.json();
            setWeatherData(jsonData);
        }

        fetchData();
    }, [city])


    return (
        <div className="currentWeatherCard">
            <h3>Weather In Celcius</h3>
            <div>
                {weatherData != null ? weatherData.weather[0].main : "SKY"}
            </div>
            <div className="temp">{weatherData != null ? weatherData.main.temp : "--.--"}°C </div><br />
            <div>
                Feel : {weatherData != null ? weatherData.main.feels_like : "--.--"}°C
            </div>
            <span>
                <div>
                    Max : {weatherData != null ? weatherData.main.temp_max : "--.--"} °C
                </div>
                <div>
                    Min : {weatherData != null ? weatherData.main.temp_min : "--.--"} °C
                </div>
            </span>
        </div>
    )
}

export default Current;
