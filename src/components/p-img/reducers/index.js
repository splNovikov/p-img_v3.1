import { combineReducers } from 'redux';
import visibilityFilterReducer from './visibilityFilterReducer';

const pImgCombinedReducers = combineReducers({
  // just stay it here for future:
  // todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
});

export default pImgCombinedReducers;
