import React from 'react';
import classes from './Toolbar.module.scss';
import { Link } from 'react-router-dom';

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}></div>
      <nav className={classes.DesktopOnly}>
        <ul className={classes.navigationMenu}>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>test2</li>
          <li>test3</li>
        </ul>
      </nav>
    </header>
  );
};

export default Toolbar;
