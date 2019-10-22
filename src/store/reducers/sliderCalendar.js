// import * as actions from '../actions/index';

const initialState = {
  middleTileDate: new Date(),
};

const middleTileDate = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_MIDDLE_TILE_DATE':
      return (
        state,
        {
          middleTileDate: new Date(
            state.middleTileDate.setDate(
              state.middleTileDate.getDate() + action.payload
            )
          ),
        }
      );
    default:
      return state;
  }
};

export default middleTileDate;
