import { middleTileDate, activeTile } from './sliderCalendar';
import {
  loader,
  mountGameTiles,
  gamesFromApiSchedule,
  gamesForTileCalendar,
} from './gameTiles';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  middleTileDate,
  activeTile,
  loader,
  mountGameTiles,
  gamesFromApiSchedule,
  gamesForTileCalendar,
});

export default allReducers;
