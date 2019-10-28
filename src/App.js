import React, { Component } from 'react';
import classes from './App.css';
import GamesContainer from './Containers/GamesContainer/GamesContainer';
import DateTile from './Components/SliderCalendar/DateTiles/DateTiles';
import ChandeDaysButton from './Components/SliderCalendar/ChangeDaysButton/ChangeDaysButton';
import Spinner from './Components/UI/Spinner/Spinner';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from './store/actions';

class App extends Component {
  passDateForTileToGames = () => {
    const clickedDate = moment(
      event.target.getAttribute('data-date'),
      'D-MMM-YYYY'
    ).format('YYYY-MM-DD');
    this.props.changeActiveDate(clickedDate);
    this.props.getGamesForTiles(clickedDate);
  };

  changeMiddleTileDateOnClick = numberOfDays => {
    this.props.changeMiddleTileDate(numberOfDays);
    this.props.gamesForSliderCalendar(this.props.middleTileDate);
  };

  componentDidMount() {
    this.props.getGamesForTiles(moment(new Date()).format('YYYY-MM-DD'));
    this.props.gamesForSliderCalendar(moment(new Date()).format('YYYY-MM-DD'));
  }

  render() {
    const middleFieldDate = this.props.middleTileDate;
    const daysForCalendar = [];
    for (let i = -2; i < 3; i++) {
      daysForCalendar.push([
        new Date(
          middleFieldDate.getFullYear(),
          middleFieldDate.getMonth(),
          middleFieldDate.getDate() + i
        ),
      ]);
    }

    const dateTiles = daysForCalendar.map((date, iteration) => {
      const dateForTile = date.toString().split(' ');
      const dateTileDate = moment(new Date(dateForTile.join(' '))).format(
        'YYYY-MM-DD'
      );
      const activeTileCssToggle = dateTileDate == this.props.clickedDate;
      return (
        <DateTile
          key={iteration}
          label={dateForTile[2][0] == 0 ? dateForTile[2][1] : dateForTile[2]}
          dayName={dateForTile[0]}
          dayDate={dateForTile[2][0] == 0 ? dateForTile[2][1] : dateForTile[2]}
          dayMonth={dateForTile[1]}
          dayYear={dateForTile[3]}
          changeDate={this.passDateForTileToGames}
          activeTile={activeTileCssToggle}
          gamesOnDay={this.props.getGamesForSliderCalendar[dateTileDate]}
        />
      );
    });
    const renderedGameTiles = this.props.showLoader ? (
      <Spinner />
    ) : (
      <GamesContainer
        mounted={this.props.mountedGameTilesBool}
        games={this.props.gamesForTiles}
      />
    );
    // console.log(this.props.mountedGameTilesBool);
    return (
      <div className={classes.mainContainer}>
        <div className={classes.DateTilesContainer}>
          <ChandeDaysButton
            arrowDirection={'left'}
            changeMiddleTileDate={() => this.changeMiddleTileDateOnClick(-5)}
          />
          {dateTiles}
          <ChandeDaysButton
            arrowDirection={'right'}
            changeMiddleTileDate={() => this.changeMiddleTileDateOnClick(5)}
          />
        </div>
        {renderedGameTiles}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    middleTileDate: state.middleTileDate.middleTileDate,
    clickedDate: state.activeTile.clickedDate,
    showLoader: state.loader.loading,
    mountedGameTilesBool: state.mountGameTiles.mounted,
    gamesForTiles: state.gamesFromApiSchedule.gamesApiSchedule,
    getGamesForSliderCalendar: state.gamesForTileCalendar.gamesForTilesCalendar,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMiddleTileDate: payload =>
      dispatch(actions.changeMiddleTileDate(payload)),
    changeActiveDate: payload => dispatch(actions.changeActiveTile(payload)),
    mountedGameTiles: payload => dispatch(actions.mountedGameTiles(payload)),
    getGamesForTiles: payload => dispatch(actions.gamesForTiles(payload)),
    gamesForSliderCalendar: payload =>
      dispatch(actions.numberOfGamesForSlider(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
