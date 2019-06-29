import React, { Component } from 'react';
import { NaverMap, Marker } from 'react-naver-maps';

class NaverMaps extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleCenterChanged(center) {
        // this.setState({ center })
        const navermaps = window.naver.maps;
        this.setState({ center: new navermaps.LatLng(37.3595704, 127.105399) }) ;
    }

    render() {
        const { navermaps } = this.props;

        return (
                <NaverMap
                    mapDivId={'maps-mossol'} // default: react-naver-map
                    style={{
                        width: '80%',
                        height: '500px',
                    }}
                    defaultCenter={{lat: 37.385110, lng: 127.123067}}
                    defaultZoom={25}
                    onClick={() => {
                        alert("clicked!");
                    }}
                >
                    <Marker
                        position={{lat: 37.385110, lng: 127.123067}}
                        onClick={() => {
                            alert('여기는 LINE+ 입니다.')
                        }}
                    />
                </NaverMap>
        );
    }
}

export default NaverMaps;
