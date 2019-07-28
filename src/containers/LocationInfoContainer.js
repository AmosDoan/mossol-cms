import LocationInfo from '../components/LocationInfo';
import * as uiActions from '../reducers/UIActions';
import * as locationActions from '../reducers/LocationActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    id : state.ui.id,
    title : state.ui.title,
    latitude : state.ui.latitude,
    longitude : state.ui.longitude,
    visible : state.ui.visible
});

const mapDispatchToProps = (dispatch) => ({
    onChangeLocation : (location) => {
        dispatch(uiActions.changeLocation({
            id : location.id,
            title : location.title,
            latitude : location.latitude,
            longitude: location.longitude}))
    },
    onCloseLocation : () => {
        dispatch(uiActions.closeLocation())
    },
    reloadLocation : () => {
        dispatch(locationActions.fetchLocation())
    }
});

const LocationInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationInfo);

export default LocationInfoContainer
