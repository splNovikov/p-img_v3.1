/**
 * Created by Novikov on 3/2/2016.
 */

import {actionTypes} from '../constants';

export const setVisibilityFilter = (filter) => {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  };
};

