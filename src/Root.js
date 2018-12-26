import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";

import { postReducer } from "../src/reducers/post_reducer";
import { messageReducer } from "../src/reducers/message_reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  messages: messageReducer
});

const logger = store => next => action => {
  const prevState = store.getState();
  const loggerAction = next(action);
  console.log("[Previours State]", prevState);
  console.log("[Action]", loggerAction);
  console.log("[Next State]", store.getState());
  return loggerAction;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(
      logger,
      // promiseMiddleware,
      ReduxThunk
    )
  )
);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>{this.props.children}</BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
