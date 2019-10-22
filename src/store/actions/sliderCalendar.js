import * as actionTypes from './actionTypes';

export const changeMiddleTileDate = payload => {
  console.log(payload);
  return {
    type: actionTypes.CHANGE_MIDDLE_TILE_DATE,
    payload: payload,
  };
};
