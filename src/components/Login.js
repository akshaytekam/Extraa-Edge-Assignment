import React, { useState } from 'react';
import './Login.css';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn } from '../redux/actions';

function Login() {

    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const isLogged = useSelector(state => state.isLogged)

    function onSubmitHandler(e) {
        e.preventDefault();
        if (userName === 'akki' && password === 'akki') {
            dispatch(isLoggedIn())

        }
    }

    return (
        <>
            {
                isLogged ? <Redirect to='/weather' /> :
                    <div className="main">
                        <h1>Weather App</h1>
                        <form onSubmit={(e) => { onSubmitHandler(e) }}>
                            <div>
                                <input onChange={e => setUserName(e.target.value)} id="username" placeholder="Username" />
                            </div>
                            <div>
                                <input onChange={e => setPassword(e.target.value)} id="password" type="password" placeholder="Password" />
                            </div>
                            <div>
                                <button className="loginBtn" type="submit">Log In</button>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}

export default Login
