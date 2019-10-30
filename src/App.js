import React, { Component } from 'react';
import classes from './App.css';
import GamesContainer from './Containers/GamesContainer/GamesContainer';
import Spinner from './Components/UI/Spinner/Spinner';
import SliderCalendar from './Containers/Calendar/SliderCalendar';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from './store/actions';

class App extends Component {
  componentDidMount() {
    this.props.getGamesForTiles(moment(new Date()).format('YYYY-MM-DD'));
    this.props.gamesForSliderCalendar(moment(new Date()).format('YYYY-MM-DD'));
  }

  render() {
    const renderedGameTiles = this.props.showLoader ? (
      <Spinner />
    ) : (
      <GamesContainer
        mounted={this.props.mountedGameTilesBool}
        games={this.props.gamesForTiles}
      />
    );
    return (
      <div className={classes.mainContainer}>
        <SliderCalendar />
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
