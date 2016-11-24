import { combineReducers } from 'redux';
import visibilityFilterReducer from './visibility-filter-reducer';
import imagesReducer from './images-reducer';

const pImgCombinedReducers = combineReducers({
  images: imagesReducer,
  visibilityFilter: visibilityFilterReducer
});

export default pImgCombinedReducers;
