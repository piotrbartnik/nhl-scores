import * as actionTypes from './actionTypes';
import { apiNhl } from '../utilities/utilities';

export const getDataForStandings = payload => {
  return {
    type: actionTypes.STANDINGS_DATA,
    standingsData: payload,
  };
};

export const fetchStandingsData = () => {
  return dispatch => {
    fetch(`${apiNhl}standings`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const standings = {};
        data.records.forEach(el => {
          standings[el.division.name] = [];
        });

        for (const i in data.records) {
          standings[data.records[i].division.name] =
            data.records[i].teamRecords;
        }
        dispatch(getDataForStandings(standings));
      });
  };
};
