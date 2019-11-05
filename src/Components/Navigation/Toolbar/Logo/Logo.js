import React from 'react';
import classes from '../Toolbar.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <div className={classes.logo}>
        <Link to="/">NHL app</Link>
      </div>
    </div>
  );
};

export default Logo;
