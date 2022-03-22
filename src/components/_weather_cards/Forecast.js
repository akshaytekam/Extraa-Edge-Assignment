import React, { useEffect, useState } from 'react';
import 'dotenv/config';
import './Forecast.css'
import Helper from './_forecast_helper';

function Forecast({ city }) {

    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
            const jsonData = await response.json();
            const fiveDay = jsonData.list;
            setForecastData(fiveDay);
        }

        fetchData();
    }, [city])

    return (
        <>
            <div className="forecastCard">
                {forecastData == null ? <></> :
                    <>
                        {forecastData.map((item, key) => {
                            return (
                                <div className="forecastDays" key={key}>
                                    <Helper temp={item.main.temp} date={item.dt_txt} sky={item.weather[0].description} skyIcon={item.weather[0].icon}/>
                                </div>
                            )
                        })}
                    </>
                }

            </div>
            <div className="forecastHeader">
                <h3>5 Days Forecast</h3>
            </div>
        </>
    )
}

export default Forecast
