const initialState = {
  data: {},
};

const standingsData = (state = initialState, action) => {
  switch (action.type) {
    case 'STANDINGS_DATA':
      return {
        ...state,
        data: action.standingsData,
      };
    default:
      return state;
  }
};

export { standingsData };
