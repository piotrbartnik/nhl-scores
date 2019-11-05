import React from 'react';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.scss';

const Layout = props => {
  return (
    <>
      <Toolbar />
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
