/**
 * Created by Novikov on 3/2/2016.
 */

import * as actionTypes from '../constants/actionTypes';

export const setVisibilityFilter = (filter) => {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  };
};

