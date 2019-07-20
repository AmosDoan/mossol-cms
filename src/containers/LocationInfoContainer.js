import LocationInfo from '../components/LocationInfo';
import * as actions from '../reducers/CurrentLocation';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    id : state.currentLocation.id,
    title : state.currentLocation.title,
    latitude : state.currentLocation.latitude,
    longitude : state.currentLocation.longitude
});

const mapDispatchToProps = (dispatch) => ({
    onChangeLocation : (location) => {
        dispatch(actions.changeLocation({
            id : location.id,
            title : location.title,
            latitude : location.latitude,
            longitude: location.longitude}))
    }
});

const LocationInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationInfo);

export default LocationInfoContainer
