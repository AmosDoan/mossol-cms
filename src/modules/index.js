import * as types from './ActionTypes';
import { createAction } from 'redux-actions';

export const fetchLocation = createAction(types.FETCH_LOCATION);
export const showLocation = createAction(types.SHOW_LOCATION);
export const changeLocation = createAction(types.CHANGE_LOCATION);
