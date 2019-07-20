import { combineReducers} from "redux/es/redux";
import currentLocation from "./CurrentLocation";
import locationList from "./LocationList";

export default combineReducers({
    currentLocation,
    locationList
});
