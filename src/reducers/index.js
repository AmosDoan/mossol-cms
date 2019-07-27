import { combineReducers} from "redux/es/redux";
import ui from "./UIActions";
import location from "./LocationActions";

export default combineReducers({
    ui,
    location
});
