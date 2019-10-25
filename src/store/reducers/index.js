import { middleTileDate, activeTile } from './sliderCalendar';
import { loader, mountGameTiles, gamesFromApiSchedule } from './gameTiles';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  middleTileDate,
  activeTile,
  loader,
  mountGameTiles,
  gamesFromApiSchedule,
});

export default allReducers;
