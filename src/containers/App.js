import React, { Component } from 'react';
import Header from '../components/Header';
import LocationInfoContainer from '../containers/LocationInfoContainer';
import GoogleMapsContainer from '../containers/GoogleMapsContainer';
import * as actions from '../reducers/UIActions';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        const { onShowLocation } = this.props;
        return (
            <div>
                <Header/>
                <GoogleMapsContainer
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
                longitude: location.longitude,
                visible : true
            }))
});

export default connect(null, mapToDispatch)(App);