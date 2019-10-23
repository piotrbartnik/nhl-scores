import moment from 'moment';

const initialState = {
  middleTileDate: new Date(),
  clickedDate: moment(new Date()).format('YYYY-MM-DD'),
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

const activeTile = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_ACTIVE_TILE':
      return (
        state,
        {
          clickedDate: action.dateFromTile,
        }
      );
    default:
      return state;
  }
};

export { middleTileDate, activeTile };
