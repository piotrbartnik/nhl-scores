import React, { Component } from "react";
import "./App.css";
import GamesContainer from './Containers/GamesContainer/GamesContainer';
import Calendar from 'react-calendar';
import ChangeDate from './Components/ChangeDate/ChangeDate'

import { createStore } from 'redux';
import setDate from './store/reducers/reducer';

class App extends Component {
  state = {
    date: new Date(),
    randomDate: '2019-01-01',
    games: []
  }

  // clicked = () => console.log(this.state.date)


  componentDidMount() {

    let nhlDateDay = this.state.randomDate;
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

  onChange = date => {
    this.setState({ date })
  }

  changeDateFunc = () => {
    const randomMonth = Math.ceil(Math.random() * 12);
    const randomDay = Math.ceil(Math.random() * 12);
    const randomDate = `2018-${randomMonth}-${randomDay}`
    this.setState({randomDate: randomDate})
    console.log(this.state.randomDate)
  }

  render() {
    return (<div>
      {/* <Calendar
        onChange={this.onChange}
        value={this.state.date}
        onClick={this.clicked()}
      /> */}
      <GamesContainer games={this.state.games}/>
      <br/>
        <div>
        <ChangeDate randomDate={this.state.randomDate} changeDateFunc={this.changeDateFunc}/>
        </div>
    </div>
    );
  }
}

export default App;