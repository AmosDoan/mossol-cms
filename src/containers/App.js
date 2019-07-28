import React, { Component } from 'react';
import Header from '../components/Header';
import LocationInfoContainer from '../containers/LocationInfoContainer';
import GoogleMapsContainer from '../containers/GoogleMapsContainer';
import * as uiActions from '../reducers/UIActions';
import * as locationActions from '../reducers/LocationActions';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        const { onFetchLocation } = this.props;
        onFetchLocation();
    }

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
        dispatch(uiActions.showLocation({
                id: location.id,
                title: location.title,
                latitude: location.latitude,
                longitude: location.longitude,
                visible : true
            })),
    onFetchLocation: () =>
        dispatch(locationActions.fetchLocation())
});

export default connect(null, mapToDispatch)(App);