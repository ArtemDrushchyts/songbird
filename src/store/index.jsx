import thunk from 'redux-thunk';
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';

import appReducer from '../containers/App/reducer';

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
