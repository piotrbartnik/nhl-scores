import * as actionTypes from './actionTypes';

export const setDate = date => {
  return {
    type: actionTypes.SET_DATE,
    date
  }
}