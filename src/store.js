import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./redux/reducers/reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/rootSaga";

const sagaMidle = createSagaMiddleware();

const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMidle)));

sagaMidle.run(rootSaga);

export default store;
