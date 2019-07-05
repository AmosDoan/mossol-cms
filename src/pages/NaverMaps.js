import React, { Component } from 'react';
import { NaverMap, Marker } from 'react-naver-maps';

class NaverMaps extends Component {

    constructor(props) {
        super(props);
        this.state = {};
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
                    onClick={(e) => {
                        alert("clicked!" + e.lat);
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
