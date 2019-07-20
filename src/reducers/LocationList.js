import {createAction} from "redux-actions";
import { List } from 'immutable';
import { Map } from 'immutable';
import handleActions from "redux-actions/es/handleActions";

export const FETCH_LOCATION = 'locationList/FETCH_LOCATION';

export const fetchLocation = createAction(FETCH_LOCATION);

const initialState = List(
    Map({
        id : "-1",
        latitude : 37.385110,
        longitude : 127.123067,
        title : "LINE+"
    })
);

export default handleActions({

}, initialState);