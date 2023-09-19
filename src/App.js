import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); // dispatch action goes into the data layer, pulls user from it and reads it

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); // step1: get the access token from the url
    window.location.hash = "";   // for security, I don't want access token to sit in the url
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
       //step 2: store access token in the state

      spotify.setAccessToken(_token); //allows me to communicate between the spotify api and React 
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcGG19oLEM29B").then(response => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          dicover_weekly: response,
        })
        );
    }
  }, []);

    // BEM in order to name your class files...
    // if there's token = render logged in message
  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
