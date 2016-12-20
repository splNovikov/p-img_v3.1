import { combineReducers } from 'redux';
import visibilityFilterReducer from './visibility-filter-reducer';
import imagesReducer from './images-reducer';
import popupReducer from './popup-reducer';

const pImgCombinedReducers = combineReducers({
  popup: popupReducer,
  images: imagesReducer,
  visibilityFilter: visibilityFilterReducer
});

export default pImgCombinedReducers;
