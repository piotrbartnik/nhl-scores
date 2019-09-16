import * as actionTypes from '../actions/actionTypes';

const initialState = {
  date: new Date(),
};

const setDate = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATE:
      return {
        ...state,
        date: action.date,
      };
    default:
      return state;
  }
};

export default setDate;
