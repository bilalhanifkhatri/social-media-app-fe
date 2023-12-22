import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import postReducer from "./reducers/postReducer";
import chatReducer from "./reducers/chatReducer";

const reducers = combineReducers({
  authReducer: authReducer,
  chatReducer: chatReducer,
  postReducer: postReducer,
});

const saveStateTOLocalStorage = (store) => {
  try {
    localStorage.setItem("store", JSON.stringify(store));
  } catch (error) {
    console.log(error);
  }
};
const loadStateTOLocalStorage = (store) => {
  try {
    const serializedStore = localStorage.getItem("store");
    if (!serializedStore) return undefined;
    return JSON.parse(serializedStore);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
const persistedState = loadStateTOLocalStorage();

const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(() => saveStateTOLocalStorage(store.getState()));

export default store;
