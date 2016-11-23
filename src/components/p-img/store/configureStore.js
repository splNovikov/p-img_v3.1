import { createStore } from 'redux';
import pImgCombinedReducers from '../reducers';

export const configureStore = () => {
  return createStore(pImgCombinedReducers);
};

export default configureStore;
