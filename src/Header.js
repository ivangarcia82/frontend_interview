import React from "react";
import Image from './ilustration.png'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

function Header() {
  return (<div className="header">
    <img className="image" src={Image} alt="ilustration"/>
    <div className="header--banner">
      <h1>Your favourite tunes</h1>
      <h2>All <WbSunnyIcon/> and all <Brightness2Icon/> </h2>
    </div>


  </div>)
}

export default Header;
