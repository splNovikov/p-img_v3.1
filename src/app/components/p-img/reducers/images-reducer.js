 import {actionTypes} from '../constants';

// imagesList reducer
const imagesList = (state = [], payload) => {
  switch (payload.type) {
    case (actionTypes.ADD_IMAGE):
      return [
        ...state,
        // todo: imageReducer(null, action)
        payload.image
      ];
    default:
      return state;
  }
};

export default imagesList;
