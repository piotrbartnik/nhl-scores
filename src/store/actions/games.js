import * as actionTypes from './actionTypes';
// import moment from 'moment';

export const getGamesForTiles = payload => {
  return {
    type: actionTypes.GET_GAMES_FOR_TILES,
    games: payload,
  };
};

export const gamesForTiles = dateForTiles => {
  const apiNhl = 'https://statsapi.web.nhl.com/api/v1/schedule?date=';
  return dispatch => {
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
        dispatch(getGamesForTiles(preparedGames));
      });
  };
};
