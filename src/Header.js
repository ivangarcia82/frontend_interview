import React from "react";
import Image from './ilustration.png'

function Header() {
  return (<div className="header">
    <img className="image" src={Image} alt="ilustration"/>
    <div className="header--banner">
      <h1>Your favourite tunes</h1>
      <h2>All <span>sol</span> and all <span>luna</span></h2>
    </div>


  </div>)
}

export default Header;
