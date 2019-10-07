import * as types from "../constants";

const initialState = {
  allAlbums: [],
  photos: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALL_ALBUMS:
      return {
        ...state,
        allAlbums: action.payload
      };

    case types.SET_ALL_PHOTOS:
      return {
        ...state,
        photos: {
          ...state.photos,
          [`${action.payload.id}`]: action.payload.data
        }
      };

    default:
      return state;
  }
};
