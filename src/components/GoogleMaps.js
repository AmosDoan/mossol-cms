import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div style={{width : 100, background: "white"}}>{text}</div>;

class GoogleMaps extends Component {

    static defaultProps = {
        center: {
            lat: 37.385110,
            lng: 127.123067
        },
        zoom: 18,
        onShowLocation : () => console.warn('onLocationClick not defined')
    };

    locationClicked(location) {
        console.log("The marker that was clicked is", location);
        // you may do many things with the "marker" object, please see more on tutorial of the library's author:
        // https://github.com/istarkov/google-map-react/blob/master/API.md#onchildclick-func
        // Look at their examples and you may have some ideas, you can also have the hover effect on markers, but it's a bit more complicated I think
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyA7WY5IRmtw8o0jAwTzjyFUnABM9ckytqw" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onClick={e => {
                        this.props.onShowLocation({title : "noname", latitude : e.lat, longitude : e.lng, type : e.type});
                    }}
                    onChildClick={index => {
                        const location = this.props.locations[index];
                        this.props.onShowLocation({
                            id : location.id,
                            title : location.title,
                            latitude : location.latitude,
                            longitude : location.longitude,
                            type : location.type});
                    }}
                >
                    {
                        this.props.locations.map((location, i) => {
                            return(
                                <AnyReactComponent
                                    key = {i}
                                    id = {location.id}
                                    lat = {location.latitude}
                                    lng = {location.longitude}
                                    text = {location.title}
                                    type = {location.type}
                                />);
                        })
                    }
                    <AnyReactComponent
                        lat = {37.385110}
                        lng = {127.123067}
                        text = "LINE+"
                        type = "KOREA_MENU"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

GoogleMaps.propTypes = {
    onShowLocation : PropTypes.func
};

export default GoogleMaps;