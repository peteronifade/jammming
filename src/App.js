import React, { useState, useCallback } from "react";
import './App.css';

import Playlist from "../JamProject/PlayList";
import SearchBar from "../JamProject/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Jammming</h1>
      </header>
      <div className="Banner">
        <p>YOUR FAVOURITE SONG PALACE</p>
        
      </div>
      <div className="SearchBar">
        <p>Search Bar</p>
        </div>

      <div className="Left">
        <p>left</p>
      </div>
      <div className="Right">
        <p>right</p>

      </div>

      <footer className="Footer">
        <p>Design: Peter O. Onifade</p>
      </footer>
    </div>

  );
}

export default App;
