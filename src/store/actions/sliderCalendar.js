import * as actionTypes from './actionTypes';

export const changeMiddleTileDate = payload => {
  return {
    type: actionTypes.CHANGE_MIDDLE_TILE_DATE,
    payload: payload,
  };
};

export const changeActiveTile = payload => {
  return {
    type: actionTypes.CHANGE_ACTIVE_TILE,
    dateFromTile: payload,
  };
};

export const mountedGameTiles = payload => {
  console.log(payload);
  return {
    type: actionTypes.MOUNT_TILES,
    mounted: payload,
  };
};

export const showLoader = payload => {
  return {
    type: actionTypes.SHOW_LOADER,
    loading: payload,
  };
};
