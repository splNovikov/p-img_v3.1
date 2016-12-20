import {actionTypes, filterTypes} from '../constants';

const visibilityFilterReducer = (state = filterTypes.SHOW_IMAGES, payload) => {
  switch (payload.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default visibilityFilterReducer;
