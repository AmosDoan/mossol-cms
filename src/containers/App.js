import React, { Component } from 'react';
import Header from '../components/Header';
import GoogleMaps from '../components/GoogleMaps';
import LocationInfoContainer from '../containers/LocationInfoContainer';
import * as actions from '../reducers/CurrentLocation';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        const { onShowLocation } = this.props;
        return (
            <div>
                <Header/>
                <GoogleMaps
                    onShowLocation={onShowLocation}
                />
                <LocationInfoContainer/>
            </div>
        )
    }
}

const mapToDispatch = (dispatch) => ({
    onShowLocation: (location) =>
        dispatch(actions.showLocation({
                id: location.id,
                title: location.title,
                latitude: location.latitude,
                longitude: location.longitude
            }))
});

export default connect(null, mapToDispatch)(App);