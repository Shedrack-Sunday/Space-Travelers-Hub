import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <img src="planet.png" alt="logo" />
      <h1>Space Traverlers&apos; Hub</h1>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to="/"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to="/Missions"
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to="/Profile"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
