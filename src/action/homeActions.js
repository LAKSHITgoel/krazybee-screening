import * as types from "../constants";

export const fetchAllAlbums = () => ({
  type: types.FETCH_ALL_ALBUMS
});

export const fetchAllPhotos = id => ({
  type: types.FETCH_ALL_PHOTOS,
  payload: {
    id
  }
});
