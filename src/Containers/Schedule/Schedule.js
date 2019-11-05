import React, { Component } from 'react';
import classes from './Schedule.module.scss';
import GamesContainer from '../GamesContainer/GamesContainer';
import Spinner from '../../Components/UI/Spinner/Spinner';
import SliderCalendar from '../Calendar/SliderCalendar';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class App extends Component {
  componentDidMount() {
    this.props.getGamesForGameTiles(moment(new Date()).format('YYYY-MM-DD'));
    this.props.setGamesNumberForSliderCalendar(
      moment(new Date()).format('YYYY-MM-DD')
    );
  }

  render() {
    const renderedGameTiles = this.props.showLoader ? (
      <Spinner />
    ) : (
      <GamesContainer
        mounted={this.props.shouldGameTilesMount}
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
)(App);
