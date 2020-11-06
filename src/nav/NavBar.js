import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar__item">
            <Link to="/">Home</Link>
        </li>
        <li className="navbar__item">
            <Link to="/games">Games</Link>
        </li>
        { localStorage.getItem('gamer_rater_token') !== null &&
            <li className="navbar__item">
              <Link to="/logout">Logout</Link>
            </li> 
        }
      </ul>
    </nav>
  )
};
