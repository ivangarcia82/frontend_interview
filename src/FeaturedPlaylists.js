/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Credentials } from './config';
import axios from "axios";



function FeaturedPlaylists() {
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
          axios('https://api.spotify.com/v1/browse/featured-playlists?limit=6', {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
        })
        .then ((res) => {        
          setPlaylist(res.data.playlists.items)
        });
        
      });
  
    }, [spotify.ClientId, spotify.ClientSecret]);
    

    return (
        <main>
    <section className="section">
        <div className="section--header">
            <div className="section--header--left">
                <h2 className="title">Featured Playlists</h2>
            </div>
            <div className="section--header--right">
                <a  className="section--header--right--more">flechas</a>
            </div>
        </div>
        <div className="section--body">
          {playlist.map((item) => (
                    <div>
                    <div className="section--body">
                  <div className="section--body--item album--item">
                    <div className="section--body--item--img">
                      <img src={item.images[0].url} alt="" />
                    </div>
                    <p className="section--body--item--title">{item.name}</p>
                    <p className="section--body--item--subtitle">                      
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

export default FeaturedPlaylists