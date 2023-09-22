import React, { useState, useCallback } from "react";
import './css/App.css';

import Playlist from "./components/PlayList";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Spotify from "./util/Spotify";

function App() {
	const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);



  return (
    
    <div className="App">
      
      <header className="Header">
        <h1>Jammming</h1>
      </header>
      <div className="Banner">
        <p>YOUR FAVOURITE SONG PALACE</p>
        
      </div>
      <div className="SearchBar">
      <p></p>
      <SearchBar onSearch={search} />
        
        
        </div>

      <div className="Left">
        
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
      </div>
      <div className="Right">
        
        <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />

      </div>

      <footer className="Footer">
        <p>Design: Peter O. Onifade</p>
      </footer>
    </div>

  );
}

export default App;
