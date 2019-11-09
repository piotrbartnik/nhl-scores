import React from 'react';
import CardContainer from '../../Components/CardContainer/CardContainer';
import classes from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div>
      Hello
      <div className={classes.mainContainer}>
        <div className={classes.mainContainer__firstRow}>
          <CardContainer title={'Your favorite team games'} />
        </div>
        <div className={classes.mainContainer__secondRow}>
          <CardContainer title={'Stats'} />
          <CardContainer title={'Standings'} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
