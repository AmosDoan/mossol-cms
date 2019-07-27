import {createAction, handleActions} from 'redux-actions';

export const SHOW_LOCATION = 'ui/SHOW_LOCATION';
export const CHANGE_LOCATION = 'ui/CHANGE_LOCATION';
export const CLOSE_LOCATION = 'ui/CLOSE_LOCATION';

export const showLocation = createAction(SHOW_LOCATION);
export const changeLocation = createAction(CHANGE_LOCATION);
export const closeLocation = createAction(CLOSE_LOCATION);

const initialState = {
    id : "0",
    title : "Location을 선택해주세요",
    latitude : 0,
    longitude : 0,
    visible : false
};

export default handleActions({
    [SHOW_LOCATION] : (state, action) => {
        return {
            ...state,
            id : action.payload.id,
            title : action.payload.title,
            latitude : action.payload.latitude,
            longitude : action.payload.longitude,
            visible : action.payload.visible
        };
    },
    [CHANGE_LOCATION] : (state, action) => {
        return {
            ...state,
            title : action.payload.title
        }
    },
    [CLOSE_LOCATION] : (state) => {
        return {
            ...state,
            visible : false
        }
    }}, initialState);
