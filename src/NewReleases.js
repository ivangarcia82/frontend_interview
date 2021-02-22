/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Credentials } from "./config";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function NewReleases() {
  const spotify = Credentials();

  const [playlist, setPlaylist] = useState([]);
  const [token, setToken] = useState("");
  //first call make the post request to get the api token
  //second call make the get request to get the data from the api
  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);
      axios("	https://api.spotify.com/v1/browse/new-releases?limit=6", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((res) => {
        setPlaylist(res.data.albums.items);
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
            <a className="section--header--right--more">
              <ChevronLeftIcon />
              <ChevronRightIcon />
            </a>
          </div>
        </div>
        <div className="section--body">
          {playlist.map((item) => (
            <div key={item.name}>
              <div className="section--body">
                <div className="section--body--item album--item">
                  <div className="section--body--item--img">
                    <img src={item.images[0].url} alt="" />
                  </div>
                  <p className="section--body--item--title">{item.name}</p>
                  <p className="section--body--item--subtitle">
                    <a>{item.artists[0].name}</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default NewReleases;
