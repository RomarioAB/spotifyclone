import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDatatLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDatatLayerValue(); // dispatch action goes into the data layer, pulls user from it and reads it

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); // step1: get the access token from the url
    window.location.hash = "";   // for security, I don't want access token to sit in the url
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
       //step 2: store access token in the state


      spotify.setAccessToken(_token); //allows me to communicate between the spotify api and React 
      
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,

        })
      });
    }

    console.log('I HAVE A TOKEN >>>', token);  
  }, []);

  console.log("person", user) //shows user's profile details on console log when logged in 
  console.log("Token", token) //shows user's token on console log when logged in


  return (
    // BEM in order to name your class files...
    // if there's token = render logged in message
    <div className="app">{token ? 
      <Player />
      : <Login />}</div>
  );
}

export default App;
