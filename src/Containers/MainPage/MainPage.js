import React from 'react';
import CardContainer from '../../Components/CardContainer/CardContainer';
import classes from './MainPage.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const MainPage = props => {
  console.log(props.gamesForTiles);
  return (
    <div>
      Hello
      <div className={classes.mainContainer}>
        <div className={classes.mainContainer__firstRow}>
          <CardContainer title={'test00'} />
        </div>
        <div className={classes.mainContainer__secondRow}>
          <CardContainer title={'Stats'} />
          <CardContainer title={'Standings'} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showLoader: state.loader.loading,
    shouldGameTilesMount: state.mountGameTiles.mounted,
    gamesForTiles: state.gamesFromApiSchedule.gamesApiSchedule,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGamesForGameTiles: payload =>
      dispatch(actions.fetchGamesForTiles(payload)),
    setGamesNumberForSliderCalendar: payload =>
      dispatch(actions.fetchNumberOfGamesForSlider(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
