import React from 'react';
import CardContainer from '../../Components/CardContainer/CardContainer';
import classes from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div>
      Hello
      <div className={classes.mainContainer}>
        <CardContainer />
      </div>
    </div>
  );
};

export default MainPage;
