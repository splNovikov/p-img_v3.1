import {actionTypes} from '../constants';

export const addImage = (path, title) => {
  return {
    type: actionTypes.ADD_IMAGE,
    path,
    title
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  };
};

