import * as types from "../constants";
import { takeLatest, takeEvery } from "redux-saga/effects";
import * as call from "./call";

export function* homeSaga() {
  yield takeLatest(types.FETCH_ALL_ALBUMS, call.fetchAllAblums);
  yield takeEvery(types.FETCH_ALL_PHOTOS, call.fetchAllPhotos);
}
