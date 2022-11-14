import React from 'react';
import Header from './components/Header';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import { Header, Missions, Rockets, Profile } from ''
import './App.css';

function App() {
  return (
    <Router className="App">
    <Header />
      <Routes>
        {/* <Route path="/" element{ <Rockets />} />
        <Route path="/missions" element{ <Missions />} />
        <Route path="/Profile" element{ <Profile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
