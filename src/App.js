import React from 'react';
import './App.css';
import JokeBook from './pages/JokeBook';
import LameJokes from './pages/LameJokes';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JokeBook/>}/>
        <Route path="/LameJokes" element={<LameJokes/>}/>
      </Routes>
    </div>
  );
};//end App

export default App;
