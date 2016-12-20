import {actionTypes} from '../constants';

export const addImage = (path, title) => {
  return {
    type: actionTypes.ADD_IMAGE,
    path,
    title
  };
};

export const deleteImage = (path) => {
  return {
    type: actionTypes.DELETE_IMAGE,
    path
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  };
};

export const togglePopup = (isVisible) => {
  return {
    type: actionTypes.TOGGLE_POPUP,
    isVisible
  };
};

