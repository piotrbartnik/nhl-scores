import React from 'react';
import classes from './Toolbar.module.scss';
import { Link } from 'react-router-dom';

const Toolbar = () => {
  return (
    <header className={classes.toolbar}>
      <div className={classes.Logo}></div>
      <nav className={classes.desktopOnly}>
        <ul className={classes.navigationMenu}>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/standings">Standings</Link>
          </li>
          <li>
            <Link to="/stats">Stats</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Toolbar;
