import {actionTypes} from '../constants';
import {Image} from '../entities'

// image reducer
const imageReducer = (state, payload) => {
  switch (payload.type) {
    case (actionTypes.ADD_IMAGE):
      return new Image(payload.path, payload.title);
    default:
      return state;
  }
};

// imagesList reducer
const imagesList = (state = [], payload) => {
  switch (payload.type) {
    case (actionTypes.ADD_IMAGE):
      return [
        ...state,
        imageReducer(null, payload)
      ];
    case (actionTypes.DELETE_IMAGE):
      return state.filter(image => image.path !== payload.path);
    default:
      return state;
  }
};

export default imagesList;
