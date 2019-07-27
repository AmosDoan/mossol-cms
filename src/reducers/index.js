import { combineReducers} from "redux/es/redux";
import ui from "./UIActions";
import locationList from "./LocationList";

export default combineReducers({
    ui,
    locationList
});
