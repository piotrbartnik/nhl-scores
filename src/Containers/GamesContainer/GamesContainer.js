import React from 'react';
import PropTypes from 'prop-types';
import ScoreSquare from '../../Components/ScoreSquare/ScoreSquare';
import classes from './GamesContainer.scss';

const GamesContainer = props => {
  const noGamesContainer = (
    <div className={classes.NoGames}>There are no games that day</div>
  );

  return (
    <div className={classes.GamesContainer}>
      {props.games.length > 0
        ? props.games.map((games, i) => (
            <ScoreSquare
              mounted={props.mounted}
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
        : noGamesContainer}
    </div>
  );
};

GamesContainer.propTypes = { mounted: PropTypes.bool, games: PropTypes.array };

export default GamesContainer;
