import React, { Component } from 'react';
import ScoreSquare from '../../Components/ScoreSquare/ScoreSquare';

class GamesContainer extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    }
  }

  componentDidMount() {

    let nhlDateDay = '2019-01-02';
    let prepareGames = [];

    fetch(`https://statsapi.web.nhl.com/api/v1/schedule?date=${nhlDateDay}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let responseNHL = data;
        console.log(`number of games that day is ${responseNHL.dates[0].games.length}`)
        for (let i = 0; i < responseNHL.dates[0].games.length; i++) {
          let teamOne = responseNHL.dates[0].games[i].teams.away.team.name;
          let scoreOne = responseNHL.dates[0].games[i].teams.away.score;
          let teamTwo = responseNHL.dates[0].games[i].teams.home.team.name;
          let scoreTwo = responseNHL.dates[0].games[i].teams.home.score;
          prepareGames[i] = [[teamOne, scoreOne], [teamTwo, scoreTwo]];
        }
        this.setState({ games: prepareGames });
      });
  }


  render() {
    return (
      <div>
        {this.state.games.map((games, i) => (<ScoreSquare key={i} teamOne={games[0][0]} scoreOne={games[0][1]} teamTwo={games[1][0]} scoreTwo={games[1][1]} />))}
      </div>
    );
  }
}

export default GamesContainer;