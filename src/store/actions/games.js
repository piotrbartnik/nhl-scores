import * as actionTypes from './actionTypes';

export const getGamesForTiles = payload => {
  console.log(payload);
  return {
    type: actionTypes.GET_GAMES_FOR_TILES,
    games: payload,
  };
};

export const gamesForTiles = dateForTiles => {
  return dispatch => {
    fetch(`https://statsapi.web.nhl.com/api/v1/schedule?date=${dateForTiles}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(getGamesForTiles(data));
      });
  };
};
