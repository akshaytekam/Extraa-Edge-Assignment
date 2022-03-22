import React, { useState } from 'react';
import Current from './_weather_cards/Current';
import './Weather.css';
import Forecast from './_weather_cards/Forecast';
import AboutPanel from './AboutPanel';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../redux/actions';
import { Redirect } from 'react-router';

export const cityArray = ['Nagpur', 'Mumbai', 'Kerala', 'Manipur'];


function Weather() {

    const dispatch = useDispatch();

    const [city, setCity] = useState('Nagpur');
    const [showPanel, setShowPanel] = useState(false);
    const isLogged = useSelector(state => state.isLogged)
    //console.log(isLogged);

    function logoutHandler() {
        dispatch(isLoggedIn());

    }

    return (
        <>
            {!isLogged ?
            /*<Unauthorized />*/ <Redirect to='/' /> :
                <div className="mainDiv">
                    {showPanel ? <AboutPanel /> : <></>}
                    <div className="weatherDiv">
                        <div className="cityDiv">
                            <h1>Weather Details</h1>
                            <select className="cityDropdown" onChange={(e) => setCity(e.target.value)}>
                                {cityArray.map((item, key) => {
                                    return <option key={key} value={item}>{item}</option>
                                })}
                            </select>
                        </div>
                        <div className="weatherInfo">
                            <div className="currentWeatherDiv">
                                <Current city={city} />
                            </div>
                            <div className="forecastDiv">
                                <Forecast city={city} />
                            </div>
                        </div>
                        <button onClick={() => setShowPanel(!showPanel)} className="aboutBtn">About Us</button>
                        <button onClick={function () { logoutHandler() }} className="logoutBtn" >Log Out</button>

                    </div>
                </div>}
        </>
    )
}

export default Weather
