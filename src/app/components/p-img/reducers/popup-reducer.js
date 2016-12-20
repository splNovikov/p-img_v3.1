import {actionTypes} from '../constants';

const popupReducer = (state = { isVisible: false }, payload) => {
  switch (payload.type) {
    case actionTypes.TOGGLE_POPUP:
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
};

export default popupReducer;
