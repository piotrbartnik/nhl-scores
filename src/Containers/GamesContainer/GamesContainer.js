import React, { Component } from 'react';
import ScoreSquare from '../../Components/ScoreSquare/ScoreSquare';
import ChangeDate from '../../Components/ChangeDate/ChangeDate';

import classes from './GamesContainer.css'


class GamesContainer extends Component {

  render() {
    return (
      <div className={classes.GamesContainer}>
        
        {this.props.games.length > 0 ? this.props.games.map((games, i) => (<ScoreSquare key={i} 
        teamOneId={games[0][2]}
        teamOne={games[0][0]} 
        scoreOne={games[0][1]} 
        teamTwo={games[1][0]}
        scoreTwo={games[1][1]}
        teamTwoId={games[1][2]} />)) : 'There are no games that day'}
        
      </div>
    );
  }
}

export default GamesContainer;