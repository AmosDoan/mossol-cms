import LocationInfo from '../components/LocationInfo';
import * as actions from '../modules';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    id : state.id,
    title : state.title,
    latitude : state.latitude,
    longitude : state.longitude
});

const mapDispatchToProps = (dispatch) => ({
    onChangeLocation : (location) => {
        console.dir(JSON.stringify("::LOCATION " +
            JSON.stringify(location)));
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
