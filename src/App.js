import React, { Component } from "react";
import classes from './App.css';
import GamesContainer from './Containers/GamesContainer/GamesContainer';
import DateTile from './Components/SliderCalendar/DateTiles/DateTiles'

class App extends Component {
  state = {
    dateToday: new Date(),
    randomDate: '2019-1-1',
    games: [],
    mounted: false,
  }

  asyncFunc = () => {
    // this.setState({ dateToday: new Date(event.target.getAttribute('data-date')) })
    const clickedDate = new Date(this.state.dateToday).toLocaleDateString('us-US').replace(/(\d+)\/(\d{2})\/(\d{4})/, "$3-$1-$2");
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
            this.setState({ mounted: true })
          }, 500)
        } else {
          this.setState({ games: [] });
        }
      });
  }


  componentDidMount() {
    this.getGames(this.state.randomDate);
    setTimeout(() => {
      this.setState({ mounted: true })
    }, 500)
  }

  render() {

    const middleFieldDate = this.state.dateToday;
    const daysForCalendar = [];

    for (let i = -2; i < 3; i++) {
      daysForCalendar.push([new Date(middleFieldDate.getFullYear(), middleFieldDate.getMonth(), middleFieldDate.getDate() + i)])
    };
    const dateTiles = daysForCalendar.map((date, iteration) => {
      const dateForTile = date.toString().split(' ');
      return <DateTile
        label={dateForTile[2][0] == 0 ? dateForTile[2][1] : dateForTile[2]}
        keyData={iteration}
        dayName={dateForTile[0]}
        dayDate={dateForTile[2][0] == 0 ? dateForTile[2][1] : dateForTile[2]}
        dayMonth={dateForTile[1]}
        dayYear={dateForTile[3]}
        changeDate={this.asyncFunc}
      />
    });

    return (<div className={classes.mainContainer}>
      <div className={classes.DateTilesContainer}>{dateTiles}</div>
      <GamesContainer mounted={this.state.mounted} games={this.state.games} />
    </div>
    );
  }
}

export default App;