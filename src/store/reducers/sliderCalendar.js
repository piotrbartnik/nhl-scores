// import * as actions from '../actions/index';

const initialState = {
  middleTileDate: new Date(),
};

const middleTileDate = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FIVE_DAYS':
      return (
        state,
        {
          middleTileDate: new Date(
            state.middleTileDate.setDate(state.middleTileDate.getDate() + 5)
          ),
        }
      );
    default:
      return state;
  }
};

export default middleTileDate;
