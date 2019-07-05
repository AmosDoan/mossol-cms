import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationService from '../service/LocationService';

const AnyReactComponent = ({ text }) => <div style={{width : 100, background: "white"}}>{text}</div>;

class GoogleMaps extends Component {
    static defaultProps = {
        center: {
            lat: 37.385110,
            lng: 127.123067
        },
        zoom: 18
    };

    constructor(props) {
        super(props);
        this.state = {
            locationData : []
        };
    }

    componentWillMount() {
        LocationService.fetchAllLocation().then(
            response => {
                console.log(response);
                const locationData = response.data;
                this.setState({ locationData });
            }
        ).catch(e => {
            console.log(e);
        });
    }

    locationClicked(location) {
        console.log("The marker that was clicked is", location);
        // you may do many things with the "marker" object, please see more on tutorial of the library's author:
        // https://github.com/istarkov/google-map-react/blob/master/API.md#onchildclick-func
        // Look at their examples and you may have some ideas, you can also have the hover effect on markers, but it's a bit more complicated I think
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '80%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyA7WY5IRmtw8o0jAwTzjyFUnABM9ckytqw" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onClick={e => alert("This : " + e.lat)}
                    onChildClick={index => alert("location : " + this.state.locationData[index].title)}
                >
                    {
                        this.state.locationData.map((location) => {
                            return(
                                <AnyReactComponent
                                    lat={location.latitude}
                                    lng={location.longitude}
                                    text={location.title}
                                />);
                        })
                    }
                    <AnyReactComponent
                        lat={37.385110}
                        lng={127.123067}
                        text="LINE+"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMaps;