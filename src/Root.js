import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";

import { postReducer } from "./reducers/post_reducer";
import { messageReducer } from "./reducers/message_reducer";
import { fetchReducer } from "./reducers/fetch_reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  messages: messageReducer,
  fetchData: fetchReducer
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

const dummyState = {
  posts: [{ id: 1, title: "Riya" }, { id: 2, title: "Kapuria" }]
};

class Root extends Component {
  render() {
    const initialState = this.props.initialState || dummyState;

    const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(
          logger,
          // promiseMiddleware,
          ReduxThunk
        )
      )
    );

    return (
      <Provider store={store}>
        <BrowserRouter>{this.props.children}</BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
