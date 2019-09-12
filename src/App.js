import React, { Component } from "react";
import classes from './App.css';
import GamesContainer from './Containers/GamesContainer/GamesContainer';
import DateTile from './Components/SliderCalendar/DateTiles/DateTiles'
import ChandeDaysButton from './Components/SliderCalendar/ChangeDaysButton/ChangeDaysButton'

class App extends Component {
  state = {
    middleTileDate: new Date(),
    games: [],
    mounted: false,
    clickedDate: new Date().toLocaleDateString('us-US').replace(/(\d+)\/(\d+)\/(\d{4})/, "$3-$1-$2"),
    numberOfGames: {},
  }

  asyncFunc = () => {
    const clickedDate = new Date(event.target.getAttribute('data-date')).toLocaleDateString('us-US').replace(/(\d+)\/(\d+)\/(\d{4})/, "$3-$1-$2");
    this.getGames(clickedDate);
    this.setState({clickedDate: clickedDate});
    
  }

  changeDays = (numberOfDays) => {
    const dateToChange = this.state.middleTileDate;
    this.setState({middleTileDate: new Date(dateToChange.setDate(dateToChange.getDate() + numberOfDays))});
    this.getNumberOfGames();
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
            let scoreOne = new Date() >= new Date(nhlDateDay) ? responseNHL.dates[0].games[i].teams.away.score : "-";
            let teamTwo = responseNHL.dates[0].games[i].teams.home.team.name;
            let scoreTwo = new Date() >= new Date(nhlDateDay) ? responseNHL.dates[0].games[i].teams.home.score : "-";
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
  };

  getNumberOfGames = () => {
    let nhlFirstDay;
    let resultGames = {};
    for (let i = -2; i < 3; i++) {
      nhlFirstDay = new Date(this.state.middleTileDate.getFullYear(), this.state.middleTileDate.getMonth(), this.state.middleTileDate.getDate() + i).toLocaleDateString('us-US').replace(/(\d+)\/(\d+)\/(\d{4})/, "$3-$1-$2");

      fetch(`https://statsapi.web.nhl.com/api/v1/schedule?date=${nhlFirstDay}`)
      .then(response => {
        return response.json();
      })
      .then(data => {   
        data.dates[0] ? resultGames[data.dates[0].date] = data.totalGames : null;         
      })
    };
    setTimeout(() => {
     this.setState({ numberOfGames : resultGames })
    }, 500)
    
    }

  componentDidMount() {
    this.getNumberOfGames()
    this.getGames(this.state.middleTileDate.toLocaleDateString('us-US').replace(/(\d+)\/(\d+)\/(\d{4})/, "$3-$1-$2"));
    setTimeout(() => {
      this.setState({ mounted: true })
    }, 500)
  }

  render() {

    const middleFieldDate = this.state.middleTileDate;
    const daysForCalendar = [];

    for (let i = -2; i < 3; i++) {
      daysForCalendar.push([new Date(middleFieldDate.getFullYear(), middleFieldDate.getMonth(), middleFieldDate.getDate() + i)])
    };
    
    const dateTiles = daysForCalendar.map((date, iteration) => {
      
      const dateForTile = date.toString().split(' ');
      let dateTileDate = new Date(dateForTile.join(' ')).toLocaleDateString('us-US', { month: '2-digit', day: '2-digit',year: 'numeric' }).replace(/(\d+)\/(\d+)\/(\d{4})/, "$3-$1-$2");

      let activeTileCssToggle = dateTileDate == this.state.clickedDate;
      return <DateTile
        label={dateForTile[2][0] == 0 ? dateForTile[2][1] : dateForTile[2]}
        keyData={iteration}
        dayName={dateForTile[0]}
        dayDate={dateForTile[2][0] == 0 ? dateForTile[2][1] : dateForTile[2]}
        dayMonth={dateForTile[1]}
        dayYear={dateForTile[3]}
        changeDate={this.asyncFunc}
        activeTile={activeTileCssToggle}
        gamesOnDay={this.state.numberOfGames[dateTileDate]}
      />
    });

    return (<div className={classes.mainContainer}>
      <div className={classes.DateTilesContainer}>
        <ChandeDaysButton arrowDirection={'left'} changeDays={() => this.changeDays(-5)}/>
        {dateTiles}
        <ChandeDaysButton arrowDirection={'right'} changeDays={() => this.changeDays(5)}/>
      </div>
      <GamesContainer mounted={this.state.mounted} games={this.state.games} />
    </div>
    );
  }
}

export default App;