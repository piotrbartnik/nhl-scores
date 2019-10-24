const initialState = {
  mounted: false,
  loading: true,
};

const loader = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LOADER':
      return state, { loading: action.loading };
    default:
      return state;
  }
};

const mountGameTiles = (state = initialState, action) => {
  switch (action.type) {
    case 'MOUNT_TILES':
      return state, { mounted: action.mounted };
    default:
      return state;
  }
};

export { loader, mountGameTiles };
