import React from 'react';
import './Login.css';
import{loginURL} from './spotify';

function Login() {
    return (
        <div className="login">
            <img src="https://iaudioguide.com/wp-content/uploads/2014/12/spotify-logo-primary-horizontal-dark-background-rgbizi.jpg" alt="Spotify"/>
            <a href={loginURL}> LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
