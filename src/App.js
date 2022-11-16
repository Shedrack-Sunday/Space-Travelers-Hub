import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchApiRockets } from './redux/rockets/rockets';
import Header from './components/Header';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import './App.css';

function App() {
  const API_ROCKETS = 'https://api.spacexdata.com/v3/rockets';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiRockets(API_ROCKETS));
  }, []);
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
