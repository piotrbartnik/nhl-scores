import { middleTileDate, activeTile } from './sliderCalendar';
import { loader, mountGameTiles } from './gameTiles';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  middleTileDate,
  activeTile,
  loader,
  mountGameTiles,
});

export default allReducers;
