import "./App.css";
import React from 'react';
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Breeds from "./components/Breeds";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <div className="body">
        <h1>The Cat API</h1>
        <BrowserRouter>
        <nav>
        <Link to="/"><button className="btn-Breeds">Breeds</button></Link>
        <Link to="/favorites"><button className="btn-Favorite">Favorite</button></Link>
        </nav>
          <Routes>
            <Route path="/" element = { <Breeds/> } />
            <Route path="/favorites" element = { <Favorites/> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
