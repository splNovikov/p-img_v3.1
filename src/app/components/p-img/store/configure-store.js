import { createStore } from 'redux';
import pImgCombinedReducers from '../reducers';
import {imagesStore} from './images-store';

export const configureStore = () => {
  return createStore(pImgCombinedReducers, { images: imagesStore.getData() });
};

export default configureStore;
