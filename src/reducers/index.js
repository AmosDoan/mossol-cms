import { handleActions } from 'redux-actions';

const initialState = {
    title : "Location을 선택해주세요",
    latitude : 0,
    longitude : 0
};

const reducer = handleActions({
        SHOW_LOCATION : (state, action) => {
            console.log("DEBUG " + action.payload);
            return {
                ...state,
                title : action.payload.title,
                latitude : action.payload.latitude,
                longitude : action.payload.longitude
            };
        }
        }, initialState);

export default reducer;

/*
function showLocationInfo(state = initialState, action)  {
    switch(action.type) {
        case types.SHOW_LOCATION:
            return {
                ...state,
                title : action.title,
                latitude : action.latitude,
                longitude : action.longitude
            };
        default:
            return state;
    }
}

export default showLocationInfo;
*/


