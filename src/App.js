import React, { Component } from "react";
import { Provider } from "react-redux";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import { createStore, applyMiddleware, combineReducers } from "redux";
import homeReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import Navbar from "./common/Navbar";

const rootReducer = combineReducers({
  home: homeReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}
