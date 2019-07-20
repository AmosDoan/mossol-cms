import { handleActions } from 'redux-actions';

const initialState = {
    id : "0",
    title : "Location을 선택해주세요",
    latitude : 0,
    longitude : 0
};

const reducer = handleActions({
    SHOW_LOCATION : (state, action) => {
        console.log("DEBUG[SHOW_LOCATION] : "
            + action.payload.title + " " + action.payload.latitude
            + " " + action.payload.longitude);
        return {
            ...state,
            id : action.payload.id,
            title : action.payload.title,
            latitude : action.payload.latitude,
            longitude : action.payload.longitude
        };
    },
    CHANGE_LOCATION : (state, action) => {
        console.log("DEBUG[CHANGE_LOCATION] : " + action.payload.title);
        return {
            ...state,
            title : action.payload.title
        }
    }}, initialState);

export default reducer;
