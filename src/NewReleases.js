/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Credentials } from './config';



function NewReleases() {
    
    const spotify = Credentials();  


  const [playlist, setPlaylist] = useState([]);
  const [token, setToken] = useState('');  

 

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      .then(tokenResponse => {      
        setToken(tokenResponse.data.access_token);
        axios('	https://api.spotify.com/v1/browse/new-releases?limit=6', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then ((res) => {        
        setPlaylist(res.data.albums.items)
      });
      
    });

  }, [spotify.ClientId, spotify.ClientSecret]);

    return (
        <main>
    <section className="section">
        <div className="section--header">
            <div className="section--header--left">
                <h2 className="title">Released This Week</h2>
            </div>
            <div className="section--header--right">
                <a  className="section--header--right--more">flechas</a>
            </div>
        </div>
        <div className="section--body">
          {playlist.map((item) => (
                    <div>
                    <div class="section--body">
                  <div class="section--body--item album--item">
                    <div class="section--body--item--img">
                      <img src={item.images[0].url} alt="" />
                    </div>
                    <p class="section--body--item--title">{item.name}</p>
                    <p class="section--body--item--subtitle">
                      <a>{item.artists[0].name}</a>
                      
                    </p>
                  </div>
                </div>
                  </div>
          ))}
    </div>

    </section>
</main>
    )
}

export default NewReleases
