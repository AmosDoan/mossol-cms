import * as types from './ActionTypes';
import { createAction } from 'redux-actions';

export const showLocation = createAction(types.SHOW_LOCATION);
/*
export const showLocation = (title, latitude, longitude) => ({
    type : types.SHOW_LOCATION,
    title,
    latitude,
    longitude
});
*/