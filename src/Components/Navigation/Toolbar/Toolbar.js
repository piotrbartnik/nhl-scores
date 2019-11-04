import React from 'react';
import classes from './Toolbar.module.css';

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}></div>
      <nav className={classes.DesktopOnly}></nav>
    </header>
  );
};

export default Toolbar;
