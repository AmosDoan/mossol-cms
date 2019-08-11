import { createAction, handleActions } from "redux-actions";
import { List } from 'immutable';
import { Map } from 'immutable';
import LocationService from "../service/LocationService";
import { pender } from 'redux-pender';

export const FETCH_LOCATION = 'location/FETCH_LOCATION';

export const fetchLocation = createAction(FETCH_LOCATION, LocationService.fetchAllLocation);

const initialState = {
    LocationList : List(
        Map({
            id : "-1",
            latitude : 37.385110,
            longitude : 127.123067,
            title : "LINE+",
            type : "KOREA_MENU"
        }))};

export default handleActions({
    ...pender({
        type : FETCH_LOCATION,
        onSuccess : (state, action) => {
            return {
                    ...state,
                    LocationList : action.payload.data
                };
        }
    })
}, initialState);