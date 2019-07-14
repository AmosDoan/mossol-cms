import LocationInfo from '../components/LocationInfo';
import * as actions from '../modules';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    title : state.title,
    latitude : state.latitude,
    longitude : state.longitude
});

const mapDispatchToProps = (dispatch) => ({
    onShowLocation : (location) => {
        dispatch(actions.showLocation(location.payload.title, location.payload.latitude, location.payload.longitude))
    }
});

const LocationInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationInfo);

export default LocationInfoContainer
