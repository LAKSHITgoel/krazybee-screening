import * as api from "./api";
import { put, call } from "redux-saga/effects";
import * as types from "../constants";

export function* fetchAllAblums() {
  let data = yield call(api.fetchAllAlbums);
  yield put({ type: types.SET_ALL_ALBUMS, payload: data });
}

export function* fetchAllPhotos(action) {
  let data = yield call(api.fetchAlbumDetails, action.payload.id);
  yield put({ type: types.SET_ALL_PHOTOS, payload: data });
}
