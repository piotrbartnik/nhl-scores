import React, { Component } from "react";
import ScoreSquare from "../../Components/ScoreSquare/ScoreSquare";

import classes from "./GamesContainer.scss";

class GamesContainer extends Component {
 render() {
  const noGamesContainer = (
   <div className={classes.NoGames}>There are no games that day</div>
  );
  return (
   <div className={classes.GamesContainer}>
    {this.props.games.length > 0
     ? this.props.games.map((games, i) => (
        <ScoreSquare
         mounted={this.props.mounted}
         key={i}
         teamOneId={games[0][2]}
         teamOne={games[0][0]}
         scoreOne={games[0][1]}
         teamTwo={games[1][0]}
         scoreTwo={games[1][1]}
         teamTwoId={games[1][2]}
        />
       ))
     : noGamesContainer}
   </div>
  );
 }
}

export default GamesContainer;
