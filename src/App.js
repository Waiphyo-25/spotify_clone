import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromURL } from './spotify';
import SpotifyWebAPI from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebAPI();

function App() {
  // const [token,setToken] = useState(null);
  const [{user, token}, dispatch] = useDataLayerValue();


  //Run code based on a given condition
   useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";

    const _token = hash.access_token;
    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

     

      spotify.setAccessToken(_token);
      spotify.getMe().then(user =>{

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      });

      spotify.getPlaylist('ey8f4o5k465h36ltvyr3531yv').then(response =>{
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      });
    }
    console.log("I have  a token:", token);
  }, []);
  console.log('person:', user);
  console.log('Alien:', token);

  return (
    <div className="App">
      {
        token ? 
          <Player spotify={spotify} /> :<Login/>
      }
     
    </div>
  );
}

export default App;
