import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/rootSaga";

import { notesReducer } from "./notesReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  notesReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
