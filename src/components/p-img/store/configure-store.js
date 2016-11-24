import { createStore } from 'redux';
import pImgCombinedReducers from '../reducers';
import {getData} from './images-store';

export const configureStore = () => {
  return createStore(pImgCombinedReducers, { images: getData() });
};

export default configureStore;
