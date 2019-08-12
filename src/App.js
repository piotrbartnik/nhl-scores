import React, { Component } from "react";
import "./App.css";
import GamesContainer from './Containers/GamesContainer/GamesContainer';
import Calendar from 'react-calendar';

class App extends Component {
  state = {
    date: new Date(),
    randomDate: '2018-1-1',
    games: [],
    mounted: false
  }

  clicked = () => {
    const clickedDate = new Date(this.state.date).toLocaleDateString('us-US').replace(/(\d+)\/(\d{2})\/(\d{4})/, "$3-$1-$2");
    this.getGames(clickedDate);
  }

  getGames = (games) => {
    
    
    let nhlDateDay = games;
    let prepareGames = [];

    fetch(`https://statsapi.web.nhl.com/api/v1/schedule?date=${nhlDateDay}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let responseNHL = data;
        if (responseNHL.dates.length > 0) {
          
          for (let i = 0; i < responseNHL.dates[0].games.length; i++) {
            let teamOne = responseNHL.dates[0].games[i].teams.away.team.name;
            let scoreOne = responseNHL.dates[0].games[i].teams.away.score;
            let teamTwo = responseNHL.dates[0].games[i].teams.home.team.name;
            let scoreTwo = responseNHL.dates[0].games[i].teams.home.score;
            let teamOneId = responseNHL.dates[0].games[i].teams.away.team.id;
            let teamTwoId = responseNHL.dates[0].games[i].teams.home.team.id;
            prepareGames[i] = [[teamOne, scoreOne, teamOneId], [teamTwo, scoreTwo, teamTwoId]];
          } 
          this.setState({ mounted: false });
          this.setState({ games: prepareGames });
          setTimeout(() => {
            this.setState({mounted: true})
        }, 500)
        } else {
          this.setState({ games: [] });
        }
        
      });
  }


  componentDidMount() {
    this.getGames(this.state.randomDate);
    setTimeout(() => {
      this.setState({mounted: true})
  }, 500)
  }

  onChange = date => {
    this.setState({ date })
  }


  render() {
    return (<div>
      <Calendar
        onChange={this.onChange}
        value={this.state.date}
        onClickDay={this.clicked}
      />
      <GamesContainer mounted={this.state.mounted} games={this.state.games} />
    </div>
    );
  }
}

export default App;