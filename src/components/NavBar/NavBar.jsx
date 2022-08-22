import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

import s from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={s.link}
        activeclassname={s.active}
      >
        <img src={logo} className="App-logo" alt="logo" />
      </NavLink>

      <NavLink to="/auth" className={s.link} activeclassname={s.active}>
        Auth Page
      </NavLink>

      <NavLink to="/chat" className={s.link} activeclassname={s.active}>
        Chat Page
      </NavLink>
    </nav>
  );
};
