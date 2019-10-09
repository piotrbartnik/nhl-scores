import * as actions from '../actions/index';

const initialState = {
  middleTileDate: new Date(),
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.sliderAdd:
      return state + 1;
    case actions.sliderSubstract:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
