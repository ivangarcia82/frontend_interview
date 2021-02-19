import NavBar from './NavBar'
import Header from './Header';
import NewReleases from './NewReleases'
import getAuth from './config'
import React, {useEffect} from 'react'


function App() {
  useEffect(() => {
    getAuth();
  }, [])
    
  return (
    <>
      <NavBar/>
      <Header />
      <NewReleases />
      {/* FEATURED PLAYLISTS */}
      {/* BROWSE GENRES */}




    </>
  );
}

export default App;
