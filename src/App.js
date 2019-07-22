import React, { Component } from "react";
import "./App.css";
import ScoreSquare from './Components/ScoreSquare/ScoreSquare';

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    var that = this;
    let nhlDateDay = '2019-01-02';
    let prepareGames = [];
    let xhttpNHL = new XMLHttpRequest();
    xhttpNHL.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let responseNHL = JSON.parse(this.responseText);
        console.log(`number of games that day is ${responseNHL.dates[0].games.length}`)
        for (let i = 0; i < responseNHL.dates[0].games.length; i++) {
          let teamOne = responseNHL.dates[0].games[i].teams.away.team.name;
          let scoreOne = responseNHL.dates[0].games[i].teams.away.score;
          let teamTwo = responseNHL.dates[0].games[i].teams.home.team.name;
          let scoreTwo = responseNHL.dates[0].games[i].teams.home.score;
          prepareGames[i] = [[teamOne, scoreOne], [teamTwo, scoreTwo]];
        }
        that.setState({games: prepareGames})
      }
    };

    xhttpNHL.open("GET", `https://statsapi.web.nhl.com/api/v1/schedule?date=${nhlDateDay}`, true);
    xhttpNHL.send();
  }

  render() {
    console.log(this.state.games.length);
    return (
      <div className="App">
        {this.state.games.map((games, i) => (<ScoreSquare key={i} teamOne={games[0][0]} scoreOne={games[0][1]}  teamTwo={games[1][0]} scoreTwo={games[1][1]}/>))}
      </div>
    );
  }
}

export default App;