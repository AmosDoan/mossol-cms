import { combineReducers} from "redux/es/redux";
import ui from "./UIActions";
import location from "./LocationActions";
import { penderReducer } from "redux-pender";

export default combineReducers({
    ui,
    location,
    pender : penderReducer
});
