import React, { useEffect } from 'react';
import CardContainer from '../../Components/CardContainer/CardContainer';
import classes from './MainPage.module.scss';
import moment from 'moment';
import ScoreSquare from '../../Components/ScoreSquare/ScoreSquare';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const MainPage = props => {
  useEffect(() => {
    props.getGamesForGameTiles(moment(new Date()).format('YYYY-MM-DD'));
  }, []);

  const testGames =
    props.gamesForTiles.length > 0
      ? props.gamesForTiles.map((games, i) => (
          <ScoreSquare
            mounted={true}
            key={i}
            teamOneId={games[0][2]}
            teamOne={games[0][0]}
            scoreOne={games[0][1]}
            teamTwo={games[1][0]}
            scoreTwo={games[1][1]}
            teamTwoId={games[1][2]}
            venue={games[2]}
          />
        ))
      : null;
  return (
    <div>
      Hello
      <div className={classes.mainContainer}>
        <div className={classes.mainContainer__firstRow}>
          <CardContainer title={'Games today'} content={testGames} />
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
