import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMissions } from './redux/missions/missions';
import Header from './components/Header';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  });
  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
