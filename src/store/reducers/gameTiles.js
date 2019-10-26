const initialState = {
  mounted: false,
  loading: true,
  gamesApiSchedule: {},
  gamesForTilesCalendar: {},
};

const loader = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LOADER':
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

const mountGameTiles = (state = initialState, action) => {
  switch (action.type) {
    case 'MOUNT_TILES':
      return { ...state, mounted: action.mounted };
    default:
      return state;
  }
};

const gamesFromApiSchedule = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GAMES_FOR_TILES':
      return { ...state, gamesApiSchedule: action.games, mounted: false };
    default:
      return state;
  }
};

const gamesForTileCalendar = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GAMES_FOR_CALENDAR':
      return { ...state, gamesForTilesCalendar: action.gamesForCalendar };
    default:
      return state;
  }
};

export { loader, mountGameTiles, gamesFromApiSchedule, gamesForTileCalendar };
