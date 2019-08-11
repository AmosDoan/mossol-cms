import GoogleMaps from '../components/GoogleMaps';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    locations : state.location.LocationList
});

const GoogleMapsContainer = connect(
    mapStateToProps,
    null
)(GoogleMaps);

export default GoogleMapsContainer;