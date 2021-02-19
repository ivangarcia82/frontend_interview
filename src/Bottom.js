/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";


function Bottom() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src='https://m.media-amazon.com/images/M/MV5BNTVmNGFjMTMtMDM2Zi00NGQ4LWJmMDItNjU2NjAyOTY0ODNlXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg'
          alt='song'
        />
      
          <div className="footer__songInfo">
            <h4>Slow Dancing in The Dark</h4>
            <p>Joji</p>
          </div>


      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />

          <PlayCircleOutlineIcon
            fontSize="large"
            className="footer__icon"
          />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
    </div>
  );
}

export default Bottom;
