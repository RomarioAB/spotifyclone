import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); // step1: get the access token from the url
    window.location.hash = "";   // for security, I don't want access token to sit in the url
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);  //step 2: store access token in the state

      spotify.setAccessToken(_token); //allows me to communicate between the spotify api and React 
      
      spotify.getMe().then(user => {
        console.log("person", user);
      });
    }

    console.log('I HAVE A TOKEN >>>', token);  
  }, []);

  return (
    // BEM in order to name your class files...
    // if there's token = render logged in message
    <div className="app">{token ? 
      <Player />
      : <Login />}</div>
  );
}

export default App;
