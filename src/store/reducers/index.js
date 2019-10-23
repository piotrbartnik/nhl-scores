import { middleTileDate, activeTile } from './sliderCalendar';
import { combineReducers } from 'redux';

const allReducers = combineReducers({ middleTileDate, activeTile });

export default allReducers;
