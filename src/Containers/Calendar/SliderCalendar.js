import React from 'react';
// import PropTypes from 'prop-types';
import DateTile from '../../Components/SliderCalendar/DateTiles/DateTiles';
import ChangeDaysButton from '../../Components/SliderCalendar/ChangeDaysButton/ChangeDaysButton';
import classes from './SliderCalendar.module.scss';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const SliderCalendar = props => {
  const passDateForTileToGames = () => {
    const clickedDate = moment(
      event.target.getAttribute('data-date'),
      'D-MMM-YYYY'
    ).format('YYYY-MM-DD');
    props.changeActiveDate(clickedDate);
    props.getGamesForTiles(clickedDate);
  };

  const changeMiddleTileDateOnClick = numberOfDays => {
    props.changeMiddleTileDate(numberOfDays);
    props.gamesForSliderCalendar(props.middleTileDate);
  };

  const middleFieldDate = props.middleTileDate;
  const daysForSliderCalendar = [];
  for (let i = -2; i < 3; i++) {
    daysForSliderCalendar.push([
      new Date(
        middleFieldDate.getFullYear(),
        middleFieldDate.getMonth(),
        middleFieldDate.getDate() + i
      ),
    ]);
  }

  const dateTiles = daysForSliderCalendar.map((date, iteration) => {
    const dateForTile = date.toString().split(' ');
    const dateTileDate = moment(new Date(dateForTile.join(' '))).format(
      'YYYY-MM-DD'
    );
    const activeTileCssToggle = dateTileDate == props.clickedDate;
    return (
      <DateTile
        key={iteration}
        label={dateForTile[2][0] == 0 ? dateForTile[2][1] : dateForTile[2]}
        dayName={dateForTile[0]}
        dayDate={dateForTile[2][0] == 0 ? dateForTile[2][1] : dateForTile[2]}
        dayMonth={dateForTile[1]}
        dayYear={dateForTile[3]}
        changeDate={passDateForTileToGames}
        activeTile={activeTileCssToggle}
        gamesOnDay={props.getGamesForSliderCalendar[dateTileDate]}
      />
    );
  });

  return (
    <div className={classes.DateTilesContainer}>
      <ChangeDaysButton
        arrowDirection={'left'}
        changeMiddleTileDate={() => changeMiddleTileDateOnClick(-5)}
      />
      {dateTiles}
      <ChangeDaysButton
        arrowDirection={'right'}
        changeMiddleTileDate={() => changeMiddleTileDateOnClick(5)}
      />
    </div>
  );
};

// SliderCalendar.propTypes = {};

const mapStateToProps = state => {
  return {
    middleTileDate: state.middleTileDate.middleTileDate,
    clickedDate: state.activeTile.clickedDate,
    gamesForTiles: state.gamesFromApiSchedule.gamesApiSchedule,
    getGamesForSliderCalendar: state.gamesForTileCalendar.gamesForTilesCalendar,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMiddleTileDate: payload =>
      dispatch(actions.changeMiddleTileDate(payload)),
    changeActiveDate: payload => dispatch(actions.changeActiveTile(payload)),
    getGamesForTiles: payload => dispatch(actions.gamesForTiles(payload)),
    gamesForSliderCalendar: payload =>
      dispatch(actions.numberOfGamesForSlider(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderCalendar);
