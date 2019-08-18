import { combineReducers} from "redux/es/redux";
import ui from "reducers/UIActions";
import location from "reducers/LocationActions";
import { penderReducer } from "redux-pender";

export default combineReducers({
    ui,
    location,
    pender : penderReducer
});
