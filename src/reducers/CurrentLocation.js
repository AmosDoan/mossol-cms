import {createAction, handleActions} from 'redux-actions';

export const SHOW_LOCATION = 'currentLocation/SHOW_LOCATION';
export const CHANGE_LOCATION = 'currentLocation/CHANGE_LOCATION';

export const showLocation = createAction(SHOW_LOCATION);
export const changeLocation = createAction(CHANGE_LOCATION);

const initialState = {
    id : "0",
    title : "Location을 선택해주세요",
    latitude : 0,
    longitude : 0
};

export default handleActions({
    [SHOW_LOCATION] : (state, action) => {
        return {
            ...state,
            id : action.payload.id,
            title : action.payload.title,
            latitude : action.payload.latitude,
            longitude : action.payload.longitude
        };
    },
    [CHANGE_LOCATION] : (state, action) => {
        return {
            ...state,
            title : action.payload.title
        }
    }}, initialState);
