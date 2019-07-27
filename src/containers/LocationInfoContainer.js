import LocationInfo from '../components/LocationInfo';
import * as actions from '../reducers/UIActions';
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
        dispatch(actions.changeLocation({
            id : location.id,
            title : location.title,
            latitude : location.latitude,
            longitude: location.longitude}))
    },
    onCloseLocation : () => {
        dispatch(actions.closeLocation())
    }
});

const LocationInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationInfo);

export default LocationInfoContainer
