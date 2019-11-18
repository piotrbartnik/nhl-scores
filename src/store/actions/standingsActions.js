import * as actionTypes from './actionTypes';
import { apiNhl } from '../utilities/utilities';

export const getDataForStandings = payload => {
  console.log(payload);
  return {
    type: actionTypes.STANDINGS_DATA,
    standingsData: payload,
  };
};

export const fetchStandingsData = () => {
  return dispatch => {
    fetch(`${apiNhl}standings`)
      .then(response => {
        console.log('here');
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatch(getDataForStandings(data));
      });
  };
};
