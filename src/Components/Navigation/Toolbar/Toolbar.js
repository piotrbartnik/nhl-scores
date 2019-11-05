import React from 'react';
import classes from './Toolbar.module.scss';
import NavLink from './NavLink/NavLink';
import Logo from './Logo/Logo';

const Toolbar = () => {
  const routesForNavbar = ['schedule', 'standings', 'stats'];

  const navbarLinks = routesForNavbar.map((el, index) => (
    <NavLink key={index} url={el} />
  ));

  return (
    <header className={classes.toolbar}>
      <Logo />
      <nav className={classes.desktopOnly}>
        <ul className={classes.navigationMenu}>{navbarLinks}</ul>
      </nav>
    </header>
  );
};

export default Toolbar;
