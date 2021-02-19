import NavBar from './NavBar'
import Header from './Header';
import React from 'react'
import NewReleases from './NewReleases'
import FeaturedPlaylists from './FeaturedPlaylists'
import Categories from './Categories';
import Bottom from './Bottom'



function App() {
 
    
  return (
    <>
      <NavBar/>
      <Header />
      <NewReleases/>
      <FeaturedPlaylists/>
      <Categories />
      <Bottom />
    </>
  );
}

export default App;
