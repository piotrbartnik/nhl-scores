import { middleTileDate, activeTile } from './sliderCalendar';
import {
  loader,
  mountGameTiles,
  gamesFromApiSchedule,
  gamesForTileCalendar,
} from './gameTiles';
import { standingsData } from './standings';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  middleTileDate,
  activeTile,
  loader,
  mountGameTiles,
  gamesFromApiSchedule,
  gamesForTileCalendar,
  standingsData,
});

export default allReducers;
