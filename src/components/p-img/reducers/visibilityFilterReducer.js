import * as actionTypes from '../constants/actionTypes';

const visibilityFilterReducer = (state = 'SHOW_IMAGES', action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilterReducer;
