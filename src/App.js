import React, { Component } from 'react';
import classes from './App.css';
import GamesContainer from './Containers/GamesContainer/GamesContainer';
import DateTile from './Components/SliderCalendar/DateTiles/DateTiles';
import ChandeDaysButton from './Components/SliderCalendar/ChangeDaysButton/ChangeDaysButton';
import Spinner from './Components/UI/Spinner/Spinner';
import moment from 'moment';

class App extends Component {
  state = {
    middleTileDate: new Date(),
    games: [],
    mounted: false,
    loading: true,
    clickedDate: moment(new Date()).format('YYYY-MM-DD'),
    numberOfGames: {},
  };

  passDateForTileToGames = () => {
    const clickedDate = moment(
      event.target.getAttribute('data-date'),
      'D-MMM-YYYY'
    ).format('YYYY-MM-DD');
    this.getGamesForTiles(clickedDate);
    this.setState({ clickedDate: clickedDate });
  };

  changeDays = numberOfDays => {
    const dateToChange = this.state.middleTileDate;
    this.setState({
      middleTileDate: new Date(
        dateToChange.setDate(dateToChange.getDate() + numberOfDays)
      ),
    });
    this.getNumberOfGames();
  };

  getGamesForTiles = gameDay => {
    this.setState({ loading: true });
    const nhlDateDay = gameDay;
    const preparedGames = [];

    fetch(`https://statsapi.web.nhl.com/api/v1/schedule?date=${nhlDateDay}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const responseNHL = data;

        if (responseNHL.dates.length > 0) {
          for (let i = 0; i < responseNHL.dates[0].games.length; i++) {
            const teamOne = responseNHL.dates[0].games[i].teams.away.team.name;
            const scoreOne =
              new Date(responseNHL.dates[0].games[i].gameDate) < new Date()
                ? responseNHL.dates[0].games[i].teams.away.score
                : '-';
            const teamTwo = responseNHL.dates[0].games[i].teams.home.team.name;
            const scoreTwo =
              new Date(responseNHL.dates[0].games[i].gameDate) < new Date()
                ? responseNHL.dates[0].games[i].teams.home.score
                : '-';
            const teamOneId = responseNHL.dates[0].games[i].teams.away.team.id;
            const teamTwoId = responseNHL.dates[0].games[i].teams.home.team.id;
            const venue = responseNHL.dates[0].games[i].venue.name;
            preparedGames[i] = [
              [teamOne, scoreOne, teamOneId],
              [teamTwo, scoreTwo, teamTwoId],
              venue,
            ];
          }
          this.setState({ mounted: false });
          this.setState({ games: preparedGames });
        } else {
          this.setState({ games: [] });
        }
      })
      .then(() => {
        this.setState({ loading: false });
        setTimeout(() => {
          this.setState({ mounted: true });
        }, 500);
      });
  };

  getNumberOfGames = () => {
    let nhlFirstDay;
    const resultGames = {};
    for (let i = -2; i < 3; i++) {
      nhlFirstDay = moment(
        new Date(
          this.state.middleTileDate.getFullYear(),
          this.state.middleTileDate.getMonth(),
          this.state.middleTileDate.getDate() + i
        )
      ).format('YYYY-MM-DD');

      fetch(`https://statsapi.web.nhl.com/api/v1/schedule?date=${nhlFirstDay}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          data.dates[0]
            ? (resultGames[data.dates[0].date] = data.totalGames)
            : null;
        })
        .then(() => {
          this.setState({ numberOfGames: resultGames });
        });
    }
  };

  componentDidMount() {
    this.getNumberOfGames();
    this.getGamesForTiles(
      moment(new Date(this.state.middleTileDate)).format('YYYY-MM-DD')
    );
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
  }

  render() {
    const middleFieldDate = this.state.middleTileDate;
    const daysForCalendar = [];

    for (let i = -2; i < 3; i++) {
      daysForCalendar.push([
        new Date(
          middleFieldDate.getFullYear(),
          middleFieldDate.getMonth(),
          middleFieldDate.getDate() + i
        ),
      ]);
    }

    const dateTiles = daysForCalendar.map((date, iteration) => {
      const dateForTile = date.toString().split(' ');
      const dateTileDate = moment(new Date(dateForTile.join(' '))).format(
        'YYYY-MM-DD'
      );

      const activeTileCssToggle = dateTileDate == this.state.clickedDate;
      return (
        <DateTile
          key={iteration}
          label={dateForTile[2][0] == 0 ? dateForTile[2][1] : dateForTile[2]}
          dayName={dateForTile[0]}
          dayDate={dateForTile[2][0] == 0 ? dateForTile[2][1] : dateForTile[2]}
          dayMonth={dateForTile[1]}
          dayYear={dateForTile[3]}
          changeDate={this.passDateForTileToGames}
          activeTile={activeTileCssToggle}
          gamesOnDay={this.state.numberOfGames[dateTileDate]}
        />
      );
    });

    const renderedGameTiles = this.state.loading ? (
      <Spinner />
    ) : (
      <GamesContainer mounted={this.state.mounted} games={this.state.games} />
    );

    return (
      <div className={classes.mainContainer}>
        <div className={classes.DateTilesContainer}>
          <ChandeDaysButton
            arrowDirection={'left'}
            changeDays={() => this.changeDays(-5)}
          />
          {dateTiles}
          <ChandeDaysButton
            arrowDirection={'right'}
            changeDays={() => this.changeDays(5)}
          />
        </div>
        {renderedGameTiles}
      </div>
    );
  }
}

export default App;
