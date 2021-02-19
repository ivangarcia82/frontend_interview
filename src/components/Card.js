/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";

function Card() {

  const [playlist, setPlaylist] = useState([]);


  useEffect(() => {
    axios("	https://api.spotify.com/v1/browse/new-releases?limit=7", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer " +
          "BQALf-N-bkSXAFl1YomGy7bXpljh5Ogq5zJFi6SjvOYJWY4pCsd-a19aaBJBhxMZEWPpoVEVJ-xwfZjYSBRV5DUKrte15seqr7HXNVs5zfwUwAr3K076bFt1TP_-cyTHtzj30BV1IZsRzqqOG6wCpdo45KS4XP0MWG5Nns0PrNp64VKxoQ-cXpuko4t7W1hmu0xy6mCgDA8DA3dlc9jkE18LmsuDwh4lIWIAAVEA9KQs_rM",
      },
    }).then((res) => {
      setPlaylist(res.data.albums.items);
    });
  });
  return (
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
          
  );
}

export default Card;
