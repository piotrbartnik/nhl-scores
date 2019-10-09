import counterReducer from './sliderCalendar';
import { combineReducers } from 'redux';

const allReducers = combineReducers({ counterReducer });

export default allReducers;
