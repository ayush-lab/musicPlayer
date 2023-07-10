import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import Reducer from '../Reducer/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  filter:Reducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(rootReducer,composeEnhancers());

export default store;