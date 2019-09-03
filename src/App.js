import React, { Component } from "react";
import classes from './App.css';
import GamesContainer from './Containers/GamesContainer/GamesContainer';
import DateTile from './Components/SliderCalendar/DateTiles/DateTiles'
import styles from './Calendar.scss';

class App extends Component {
  state = {
    dateToday: new Date(),
    randomDate: '2019-1-1',
    games: [],
    mounted: false,    
  }

  onChange = date => {
    this.setState({ date: date })
    setTimeout(() => {
      this.asyncFunc()
    }, 200)
    
  }

  asyncFunc = () => {
    const clickedDate = new Date(this.state.date).toLocaleDateString('us-US').replace(/(\d+)\/(\d{2})\/(\d{4})/, "$3-$1-$2");
    console.log(this.state.date)
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
    const middleFieldDay = middleFieldDate.getDay();
    const middleFieldYear = middleFieldDate.getFullYear();
    const middleFieldMonth = middleFieldDate.getMonth();
    const daysForCalendar = [[new Date(middleFieldYear, middleFieldMonth, middleFieldDay-2)].toString(),[new Date(middleFieldYear, middleFieldMonth, middleFieldDay-1)].toString(), [new Date(middleFieldYear, middleFieldMonth, middleFieldDay)].toString(), [new Date(middleFieldYear, middleFieldMonth, middleFieldDay+1)].toString(), [new Date(middleFieldYear, middleFieldMonth, middleFieldDay+2)].toString()];
    console.log(daysForCalendar[0].split(' ')[0])
    const dateTiles = daysForCalendar.map((x) => (<DateTile dayName={x.split(' ')[0]} />))
    return (<div className={classes.mainContainer}>

      {dateTiles}
      <GamesContainer mounted={this.state.mounted} games={this.state.games} />
    </div>
    );
  }
}

export default App;