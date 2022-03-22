import React from 'react';
import './_forecast_helper.css';


function _forecast_helper({ date, temp, sky, skyIcon }) {

    const _date = new Date(date).toLocaleString('en-IN', { weekday: 'short', hour: 'numeric', hour12: true }).toUpperCase();

    return (
        <div className="helperStyle">
            <div>
                {temp} °C <br />
            </div>
            <div>
                {_date}
            </div>
            <div>
                {sky}
            </div>
            <div>
                {skyIcon ? <img src={`http://openweathermap.org/img/wn/${skyIcon}.png`} alt="skyIcon" /> : null}
            </div>

        </div>
    )
}

export default _forecast_helper
