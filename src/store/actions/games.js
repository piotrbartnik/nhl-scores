import * as actionTypes from './actionTypes';
import { mountedGameTiles, showLoader } from './index';
import moment from 'moment';
import { apiNhl } from '../utilities/utilities';

export const getGamesForGameTiles = payload => {
  return {
    type: actionTypes.GET_GAMES_FOR_TILES,
    games: payload,
  };
};

export const getGamesNumberForSliderCalendar = payload => {
  return {
    type: actionTypes.GET_GAMES_FOR_CALENDAR,
    gamesForCalendar: payload,
  };
};

export const fetchGamesForTiles = dateForTiles => {
  return dispatch => {
    dispatch(showLoader(true));
    dispatch(mountedGameTiles(false));
    fetch(`${apiNhl}${dateForTiles}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const preparedGames = [];
        if (data.dates.length > 0) {
          for (let i = 0; i < data.dates[0].games.length; i++) {
            const teamOne = data.dates[0].games[i].teams.away.team.name;
            const scoreOne =
              new Date(data.dates[0].games[i].gameDate) < new Date()
                ? data.dates[0].games[i].teams.away.score
                : '-';
            const teamTwo = data.dates[0].games[i].teams.home.team.name;
            const scoreTwo =
              new Date(data.dates[0].games[i].gameDate) < new Date()
                ? data.dates[0].games[i].teams.home.score
                : '-';
            const teamOneId = data.dates[0].games[i].teams.away.team.id;
            const teamTwoId = data.dates[0].games[i].teams.home.team.id;
            const venue = data.dates[0].games[i].venue.name;
            preparedGames.push([
              [teamOne, scoreOne, teamOneId],
              [teamTwo, scoreTwo, teamTwoId],
              venue,
            ]);
          }
        }
        dispatch(getGamesForGameTiles(preparedGames));
      })
      .then(() => {
        setTimeout(() => dispatch(mountedGameTiles(true)), 500);
        dispatch(showLoader(false));
      });
  };
};

export const fetchNumberOfGamesForSlider = middleDate => {
  let nhlFirstDay;
  const resultGames = {};
  return dispatch => {
    const promises = [];
    for (let i = -2; i < 3; i++) {
      nhlFirstDay = moment(
        new Date(
          new Date(middleDate).getFullYear(),
          new Date(middleDate).getMonth(),
          new Date(middleDate).getDate() + i
        )
      ).format('YYYY-MM-DD');

      promises.push(
        fetch(`${apiNhl}${nhlFirstDay}`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            data.dates[0]
              ? (resultGames[data.dates[0].date] = data.totalGames)
              : null;
          })
      );
    }
    Promise.all(promises).then(() =>
      dispatch(getGamesNumberForSliderCalendar(resultGames))
    );
  };
};
