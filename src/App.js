import NavBar from "./NavBar";
import React, { useState } from "react";
import NewReleases from "./NewReleases";
import FeaturedPlaylists from "./FeaturedPlaylists";
import Categories from "./Categories";
import Bottom from "./Bottom";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Image from "./ilustration.svg";
import IconButton from "@material-ui/core/IconButton";
import "./main.css";

function App() {
  const [mode, setMode] = useState("light");

  const Mode = () => {
    if (mode === "light") {
      return (
        <div className="header--banner">
          <h1>Your favourite tunes</h1>
          <h2>
            All day
            <IconButton onClick={changeMode}>
              <WbSunnyIcon />
            </IconButton>{" "}
            and all <Brightness2Icon />
          </h2>
        </div>
      );
    } else {
      return (
        <div className="header--banner">
          <h1>Your favourite tunes</h1>
          <h2>
            All day
            <WbSunnyIcon className="sunicon" /> and all{" "}
            <IconButton onClick={changeMode}>
              <Brightness2Icon />
            </IconButton>
          </h2>
        </div>
      );
    }
  };

  const changeMode = () => {
    mode === "light" ? setMode("dark") : setMode("light"); //Change the state in the app, if the 'light' state is active, it changes to dark mode, else, it changes to light mode
  };

  return (
    <>
      <NavBar />
      <div className="header">
        <img className="image" src={Image} alt="ilustration" />
        <Mode />
      </div>
      <NewReleases />
      <FeaturedPlaylists />
      <Categories />
      <Bottom />
    </>
  );
}

export default App;
